import { isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import isString from 'lodash/isString';
import { Config, Connector, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { Avatar } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { ConnectData } from 'wagmi/query';
import { getcodeAdress, metamasketLogin } from 'src/fetchs/user';
import { toast } from 'src/components/toast';
import walletConfigs, { WalletOptionConnector } from './config/wallet';
import { javaEncrypt, loginSuccess } from '../public';
import useAccount from './use-account';

const WalletOption = ({
  loading,
  connector,
  onClick,
}: {
  loading: boolean;
  connector: WalletOptionConnector;
  onClick: () => void;
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (connector.downloadUrl || typeof connector.getProvider !== 'function') return;
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  // ----------e the default metamask wallet，use wagmi setting connectors----------
  return (
    <a style={{ width: '100%' }} target="_blank" href={connector.downloadUrl} rel="noreferrer">
      <LoadingButton
        // loading={loading}
        // loadingPosition="end"
        sx={() => ({
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: '16px',
          // fontWeight: '500',
        })}
        size="large"
        variant="outlined"
        key={connector.name}
        // disabled={!ready}
        onClick={onClick}
      >
        {isString(connector.icon) && (
          <Avatar
            src={connector.icon as string}
            sx={({ palette }) => ({
              background: palette.background.paper,
              width: '28px',
              height: '28px',
              marginRight: '16px',
            })}
          />
        )}
        {isValidElement(connector.icon) && connector.icon}
        {connector.name}
      </LoadingButton>
    </a>
  );
};

const ConnectOptions = ({
  loginNextStep,
  setLoading,
}: {
  loginNextStep: () => Promise<void>;
  setLoading: (loading: boolean) => void;
}) => {
  const { connectors: wagmiConnectors, connectAsync, isPending: isPendingConnect } = useConnect();

  // ----------merge own wallet config to connector----------
  const connectors = useMemo(
    () =>
      walletConfigs.map((item) => {
        const existedWallet = wagmiConnectors.find(
          (connector) => connector.id === item.id || connector.id === item.installedId
        );
        if (!existedWallet) return item;
        return { ...existedWallet, icon: item.icon, name: item.name };
      }) as WalletOptionConnector[],
    [wagmiConnectors]
  );

  const { disconnectAsync } = useDisconnect();

  const [currentConnector, setCurrentConnector] = useState<Connector | null>(null);

  // 用户点击连接钱包 ==> 钱包连接成功，有address后 ==> 立马进行签名步骤，签名成功后 ==> 进行登录
  const { signMessageAsync, isPending: isPendingSign } = useSignMessage();

  const { address } = useAccount();

  const connectHandler = useCallback(
    async (connector: WalletOptionConnector) => {
      if (connector.downloadUrl) return;

      try {
        setLoading(true);
        setCurrentConnector(connector);

        let connectRes = await connectAsync({ connector }).catch((error) => {
          if (!error.message.includes('Connector already connected')) throw error;
        });
        if (!connectRes || connectRes.accounts.length === 0) {
          if (!address) return;
          connectRes = { accounts: [address] } as unknown as ConnectData<Config>;
        }

        const addressNew = connectRes.accounts[0].toLocaleLowerCase();

        const resCode = await getcodeAdress({
          address: addressNew,
          ypAuthenticate: 'string',
          ypToken: 'string',
          captcha: javaEncrypt(parseInt(`${new Date().getTime() / 1000}`, 10).toString()),
        });

        if (resCode && resCode.code === 0) {
          const { message } = resCode.data;
          const signData = await signMessageAsync({ message });
          if (!signData) {
            await disconnectAsync();
            setLoading(false);
            return;
          }

          const res = await metamasketLogin({
            address: addressNew,
            signature: signData,
            verifyId: resCode.data.verifyId,
          });

          if (res.code !== 0) {
            await disconnectAsync();
            setLoading(false);
            toast.error(res.msg);
            return;
          }

          if (res.data === null) {
            loginNextStep();
          } else {
            loginSuccess(res);
          }
        } else {
          await disconnectAsync();
          setLoading(false);
          toast.error(resCode.msg);
        }
      } catch (error) {
        await disconnectAsync();
        setLoading(false);
        toast.error(error.code === 4001 ? 'User rejected the request' : error.message);
      }
    },
    [address, connectAsync, disconnectAsync, loginNextStep, setLoading, signMessageAsync]
  );

  return connectors.map((connector) => (
    <WalletOption
      loading={currentConnector?.id === connector.id && (isPendingConnect || isPendingSign)}
      key={connector.id}
      connector={connector}
      onClick={() => {
        connectHandler(connector);
      }}
    />
  ));
};

export default ConnectOptions;

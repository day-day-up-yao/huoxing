import { Box, Button, Divider, Tab, Tabs, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { Stack } from '@mui/system';
import { gameDetailDataType } from 'src/utils/public/datas';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { Context } from '../context';
import GameNFTCollectionBoxItem from './game-nft-box-item';
import GameTokenCollectionBoxItem from './game-token-box-item';

export default function GameNFTCollectionDom() {
  const {
    t,
    detail,
    gameNft,
    nowTimeType,
    nowContractAddress,
    nowChainData,
    isHaveToken,
    isHaveNFT,
    currentDataTab,
    handleChangeDataTab,
    onBtnConnectionWalletClick,
  } = useContext(Context);

  const { isPc } = useBreakPoint();
  // 标题
  //   const renderTitle = useMemo(
  //     () => (
  //       <Stack direction="row" alignItems="center">
  //         <Typography variant="h4" sx={{ flexGrow: 1 }}>
  //           {t('game_detail_nft_title')}
  //         </Typography>
  //       </Stack>
  //     ),
  //     [t]
  //   );

  // 切换标签
  const renderTabs = useMemo(
    () => (
      <Tabs
        value={currentDataTab}
        onChange={handleChangeDataTab}
        sx={{
          '& .MuiTabs-indicator': {
            height: '2px',
          },
        }}
      >
        {gameDetailDataType.map((tab: { value: string; label: string }) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={t(tab.label)}
            sx={{
              fontSize: '24px',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              '&:not(:last-of-type)': {
                mr: '32px',
              },
            }}
          />
        ))}
      </Tabs>
    ),
    [currentDataTab, handleChangeDataTab, t]
  );

  // 切换标签 H5
  const renderTabsH5 = useMemo(
    () => (
      <Stack direction="row" gap="10px">
        {gameDetailDataType.map((tab: { value: string; label: string }) => (
          <Button
            variant="contained"
            sx={{
              bgcolor: currentDataTab === tab.value ? 'error.main' : 'background.sub',
              color: 'text.primary',
              '&:hover': {
                bgcolor: currentDataTab === tab.value ? 'error.main' : 'background.sub',
              },
            }}
            onClick={(e) => handleChangeDataTab(e, tab.value)}
            key={tab.value}
          >
            {tab.label}
          </Button>
        ))}
      </Stack>
    ),
    [currentDataTab, handleChangeDataTab]
  );

  // NFT合集
  const renderNFTCollections = useMemo(
    () =>
      gameNft?.map((item: NFTCollectionType, index: number) => [
        <GameNFTCollectionBoxItem t={t} date={item} key={index} />,
        index !== gameNft.length - 1 && <Divider flexItem key={`line-${index}`} />,
      ]),
    [gameNft, t]
  );

  // Token信息
  const renderTokenCollections = useMemo(
    () =>
      detail?.symbol ? (
        <GameTokenCollectionBoxItem
          t={t}
          date={...detail}
          nowTimeType={nowTimeType}
          nowContractAddress={nowContractAddress}
          nowChainData={nowChainData}
          onBtnConnectionWalletClick={onBtnConnectionWalletClick}
        />
      ) : undefined,
    [detail, t, nowTimeType, nowContractAddress, nowChainData, onBtnConnectionWalletClick]
  );

  return isHaveToken || isHaveNFT ? (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="24px"
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '5px',
        p: '36px 24px',
        m: '25px 0',
        width: '100%',
      }}
    >
      {/* {renderTitle} */}
      {isHaveToken && isHaveNFT && (isPc ? renderTabs : renderTabsH5)}
      {isHaveToken && isHaveNFT && currentDataTab === gameDetailDataType[0].value
        ? renderTokenCollections
        : isHaveToken && !isHaveNFT
        ? renderTokenCollections
        : undefined}
      {isHaveToken && isHaveNFT && currentDataTab === gameDetailDataType[1].value
        ? renderNFTCollections
        : isHaveNFT && !isHaveToken
        ? renderNFTCollections
        : undefined}
    </Box>
  ) : undefined;
}

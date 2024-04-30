import React, { useEffect, useMemo } from 'react';
import { Button, Toggle } from 'rsuite';
import classNames from 'classnames';

import './index.scss';
import TextField from '../../components/text-field';

import ItemNetwork from '../../components/item-network';
import ItemRewardType from '../../components/item-reward-type';
// import ItemExtraBonus from '../../components/ItemExtraBonus'
import ItemNumberOfWinners from '../../components/item-number-of-winners';
import ItemDrawWinnersMethod from '../../components/item-draw-winners-method';
import ItemAutoWinnerMethod from '../../components/item-auto-winner-method';
import ItemRewardDistributedBy from '../../components/item-reward-distributed-by';
import ItemRewardsDistribution from '../../components/item-rewards-distri-bution';
import ItemPickFromList from '../../components/item-pick-from-list';
import ItemAddToken from '../../components/item-add-token';
import ItemCoverImage from '../../components/item-cover-image';
import ItemTotalRewardAmount from '../../components/item-total-reward-amount';
import ItemTotalRewardAmountVariable from '../../components/item-total-reward-amount-variable';

const CampaignCreateRewards = (props: any) => {
  const {
    t,
    show,
    formError,
    rewardType,
    chain,
    winnerNum,
    nftCollectionAddress,
    rewardToken,
    rewardNum,
    rewardNumUsdt,
    drawWinnerMethod,
    rewardTypeData,
    rewardChainListData,
    drawWinnersMethodData,
    autoWinnersMethodData,
    rewardDistributeByData,
    rewardsDistributionData,
    tokenType,
    tokenInfo,
    nftInfo,
    isUseUSDT,
    isLoading,
    rewardTokenObjData,
    setIsLoading,
    onBtnTokenTypeClick,
    onBtnTokenIsUseUSDTChange,
  } = props;

  useEffect(() => {
    console.log('当前状态: ', rewardType);
  }, [rewardType]);

  // 奖励类型  1.Token 2.NFT 3.Whitelist
  const CampaignRewardType = useMemo(
    () => (
      <TextField
        name="rewardType"
        label={t('campaign_create_reward_type')}
        accepter={ItemRewardType}
        data={rewardTypeData}
        t={t}
        labelFirst
        errorMessage={formError.rewardType}
      />
    ),
    [formError.rewardType, rewardTypeData, t]
  );

  // 选择网络
  const CampaignNetwork = useMemo(
    () => (
      <TextField
        name="chain"
        label={t('campaign_create_reward_network')}
        accepter={ItemNetwork}
        data={rewardChainListData}
        t={t}
        errorMessage={formError.chain}
      />
    ),
    [formError.chain, rewardChainListData, t]
  );
  // 选择网络 - 最初
  const CampaignNetworkByTop = useMemo(
    () => (rewardType === 1 || rewardType === 3 ? CampaignNetwork : null),
    [rewardType, CampaignNetwork]
  );
  // 选择网络 - NFT
  const CampaignNetworkByNFT = useMemo(
    () =>
      rewardType === 2 && ((winnerNum && winnerNum > 0) || winnerNum === -1)
        ? CampaignNetwork
        : null,
    [rewardType, winnerNum, CampaignNetwork]
  );

  // 代币类型 - Pick from list
  const CampaignTokenTypeByPickFromList = useMemo(
    () => (
      <TextField
        name="rewardToken"
        accepter={ItemPickFromList}
        rewardTokenObjData={rewardTokenObjData}
        chain={chain}
        t={t}
        errorMessage={formError.rewardToken}
      />
    ),
    [rewardTokenObjData, chain, t, formError.rewardToken]
  );
  // 代币类型 - Add Token
  const CampaignTokenTypeByAddToken = useMemo(
    () => (
      <TextField
        name="rewardTokenAddr"
        accepter={ItemAddToken}
        t={t}
        errorMessage={formError.rewardTokenAddr}
        isLoading={isLoading}
      />
    ),
    [formError.rewardTokenAddr, isLoading, t]
  );
  // 代币类型 - Token Type
  const CampaignTokenTypeDom = useMemo(
    () =>
      rewardType === 1 && chain !== '' ? (
        <div className="campaign-create-rewards-custom-item">
          <div className="campaign-create-rewards-custom-item-title">
            {t('campaign_create_reward_token_type')}
            <div className="campaign-create-rewards-custom-item-title-right">
              <Button
                className={classNames('campaign-create-rewards-custom-item-title-btn', {
                  active: tokenType === 0,
                })}
                onClick={() => onBtnTokenTypeClick(0)}
              >
                {t('campaign_create_reward_token_pick_from_list')}
              </Button>
              <Button
                className={classNames('campaign-create-rewards-custom-item-title-btn', {
                  active: tokenType === 1,
                })}
                onClick={() => onBtnTokenTypeClick(1)}
              >
                {t('campaign_create_reward_token_add')}
              </Button>
            </div>
          </div>
          {tokenType === 0 ? CampaignTokenTypeByPickFromList : null}
          {tokenType === 1 ? CampaignTokenTypeByAddToken : null}
        </div>
      ) : null,
    [
      rewardType,
      chain,
      t,
      tokenType,
      CampaignTokenTypeByPickFromList,
      CampaignTokenTypeByAddToken,
      onBtnTokenTypeClick,
    ]
  );

  // 代币名称 - Token Name
  const CampaignTokenName = useMemo(
    () =>
      rewardType === 1 &&
      tokenType === 1 &&
      tokenInfo &&
      typeof tokenInfo.name !== 'undefined' &&
      tokenInfo.name !== '' ? (
        <div className="campaign-create-rewards-custom-item only-title">
          <div className="campaign-create-rewards-custom-item-title">
            {`${t('campaign_create_reward_token_name')}: ${tokenInfo.name}`}
          </div>
        </div>
      ) : null,
    [rewardType, tokenType, tokenInfo, t]
  );

  // 代币奖励总数量 - 输入的数量
  const CampaignTotalRewardAmount = useMemo(
    () => (
      <TextField
        name="rewardNum"
        accepter={ItemTotalRewardAmount}
        symbol={tokenType === 0 ? rewardToken : tokenInfo.symbol}
        errorMessage={formError.rewardNum}
      />
    ),
    [rewardToken, tokenType, tokenInfo, formError.rewardNum]
  );
  // 代币奖励总数量 - USDT输入的数量
  const CampaignTotalRewardAmountVariable = useMemo(
    () => (
      <TextField
        name="rewardNumUsdt"
        accepter={ItemTotalRewardAmountVariable}
        t={t}
        errorMessage={formError.rewardNumUsdt}
      />
    ),
    [t, formError.rewardNumUsdt]
  );
  // 代币奖励总数量
  const CampaignTotalRewardAmountDom = useMemo(
    () =>
      rewardType === 1 &&
      ((tokenType === 0 && rewardToken !== '') ||
        (tokenType === 1 &&
          tokenInfo &&
          typeof tokenInfo.name !== 'undefined' &&
          tokenInfo.name !== '')) ? (
        <div className="campaign-create-rewards-custom-item">
          <div className="campaign-create-rewards-custom-item-title">
            {t('campaign_create_reward_token_reward_amount')}
            <div className="campaign-create-rewards-custom-item-title-right">
              {t('campaign_create_reward_token_reward_amount_variable')}
              <Toggle
                {...{ value: isUseUSDT }}
                onChange={(value) => onBtnTokenIsUseUSDTChange(value)}
                style={{ marginLeft: '16px' }}
              />
            </div>
          </div>
          {isUseUSDT ? CampaignTotalRewardAmountVariable : CampaignTotalRewardAmount}
        </div>
      ) : null,
    [
      rewardType,
      tokenType,
      rewardToken,
      tokenInfo,
      t,
      isUseUSDT,
      CampaignTotalRewardAmountVariable,
      CampaignTotalRewardAmount,
      onBtnTokenIsUseUSDTChange,
    ]
  );

  // 获奖人数
  const CampaignNumberOfWinners = useMemo(
    () =>
      (rewardType === 1 && isUseUSDT === false && rewardNum !== 0) ||
      (rewardType === 1 && isUseUSDT === true && rewardNumUsdt !== 0) ||
      rewardType === 2 ||
      (rewardType === 3 && chain !== '') ? (
        <TextField
          name="winnerNum"
          label={t('campaign_create_reward_number_of_winners')}
          accepter={ItemNumberOfWinners}
          t={t}
          errorMessage={formError.winnerNum}
        />
      ) : null,
    [rewardType, isUseUSDT, rewardNum, rewardNumUsdt, chain, t, formError.winnerNum]
  );

  // 抽奖方式 - 获奖设置
  const CampaignDrawWinnersMethod = useMemo(
    () =>
      winnerNum && winnerNum > 0 ? (
        <TextField
          name="drawWinnerMethod"
          label={t('campaign_create_reward_draw_winners_method')}
          accepter={ItemDrawWinnersMethod}
          data={drawWinnersMethodData}
          t={t}
        />
      ) : null,
    [drawWinnersMethodData, t, winnerNum]
  );

  // 自动抽奖方式 - 获奖设置
  const CampaignAutoWinnersMethod = useMemo(
    () =>
      winnerNum && winnerNum > 0 && drawWinnerMethod === 0 ? (
        <TextField
          name="autoWinnerMethod"
          label={t('campaign_create_reward_auto_winners_method')}
          accepter={ItemAutoWinnerMethod}
          data={autoWinnersMethodData}
          t={t}
        />
      ) : null,
    [winnerNum, drawWinnerMethod, t, autoWinnersMethodData]
  );

  // 奖励分配方式
  const CampaignRewardsDistribution = useMemo(
    () =>
      rewardType === 1 &&
      ((winnerNum && winnerNum > 0) || winnerNum === -1) &&
      drawWinnerMethod === 0 ? (
        <TextField
          name="rewardMethod"
          label={t('campaign_create_reward_distribution')}
          accepter={ItemRewardsDistribution}
          data={rewardsDistributionData}
          t={t}
        />
      ) : null,
    [rewardType, winnerNum, drawWinnerMethod, t, rewardsDistributionData]
  );

  // 奖励发放方式
  const CampaignRewardDistributeBy = useMemo(
    () =>
      (rewardType === 2 || rewardType === 1) &&
      ((winnerNum && winnerNum > 0) || winnerNum === -1) ? (
        <TextField
          name="rewardDistributedBy"
          label={t('campaign_create_reward_distributed_by')}
          accepter={ItemRewardDistributedBy}
          data={rewardDistributeByData}
          t={t}
        />
      ) : null,
    [rewardDistributeByData, rewardType, t, winnerNum]
  );

  // NFT 合约地址
  const CampaignNFTContractAddress = useMemo(
    () =>
      rewardType === 2 && ((winnerNum && winnerNum > 0) || winnerNum === -1) && chain !== '' ? (
        <TextField
          name="nftCollectionAddress"
          label={`${t('campaign_create_reward_nft_contract_address')} (${t('public_optional')})`}
          errorMessage={formError.nftCollectionAddress}
        />
      ) : null,
    [rewardType, winnerNum, chain, t, formError.nftCollectionAddress]
  );

  // NFT 合集名称
  const CampaignNFTCollectionName = useMemo(
    () =>
      rewardType === 2 && nftCollectionAddress !== '' && nftInfo && nftInfo.name !== '' ? (
        <div className="campaign-create-rewards-custom-item only-title">
          <div className="campaign-create-rewards-custom-item-title">
            {`${t('campaign_create_reward_nft_collection_name')}: ${nftInfo.name}`}
          </div>
        </div>
      ) : null,
    [rewardType, nftCollectionAddress, nftInfo, t]
  );

  // NFT Image
  const CampaignCoverImageDom = useMemo(
    () =>
      (rewardType === 2 && nftCollectionAddress !== '' && nftInfo && nftInfo.name !== '') ||
      (rewardType === 3 && chain !== '') ? (
        <TextField
          name="nftPreviewUrl"
          label={t('campaign_create_reward_nft_image')}
          accepter={ItemCoverImage}
          toggleShow={rewardType === 3}
          t={t}
          isNFT
          setIsLoading={setIsLoading}
          errorMessage={formError.nftPreviewUrl}
        />
      ) : null,
    [rewardType, nftCollectionAddress, nftInfo, chain, t, setIsLoading, formError.nftPreviewUrl]
  );

  // 额外奖励
  // const CampaignExtraBonus = useMemo(
  //     () =>
  //         rewardType > 0 ? (
  //             <TextField
  //                 name="rewardExtra"
  //                 label={t('campaign_create_reward_extra_bonus')}
  //                 accepter={ItemExtraBonus}
  //                 t={t}
  //                 toggleShow
  //             />
  //         ) : null,
  //     [rewardType]
  // )

  return (
    <div className={classNames('campaign-create-rewards', { show })}>
      {CampaignRewardType}
      {CampaignNetworkByTop}
      {CampaignTokenTypeDom}
      {CampaignTokenName}
      {CampaignTotalRewardAmountDom}
      {CampaignNumberOfWinners}
      {CampaignDrawWinnersMethod}
      {CampaignAutoWinnersMethod}
      {CampaignRewardsDistribution}
      {CampaignRewardDistributeBy}
      {CampaignNetworkByNFT}
      {CampaignNFTContractAddress}
      {CampaignNFTCollectionName}
      {CampaignCoverImageDom}
      {/* {CampaignExtraBonus} */}
    </div>
  );
};

export default CampaignCreateRewards;

// ---------launchpad list---------
type LaunchpadListParams = BasePaginationParams & {
  category: number; // token:1 nft:2
  stage: string; //  即将开始:upcoming 已结束:ended
  keyword?: string;
};

type LaunchpadListItem = {
  brief?: string;
  category?: number;
  coverUrl?: string;
  discord?: string;
  endTime?: number;
  gameId?: number;
  iconUrl?: string;
  id?: number;
  itemNum?: number; // -1 TBA, -2 不限量
  itemPrice?: number;
  totalRaise?: number;
  name?: string;
  platform?: string;
  platformIcon?: string;
  startTime?: number;
  twitter?: string;
  website: string;
  telegram: string;
  chain: string;
  chainName: string;
  chainIcon: string;
  tokenSymbol: string;
  tokenPrice: number;
  status: number; // 进行中:1未开始:2结束:3,
  itemUnit: string;
  priceUnit: string;
  jumpUrl: string;
};
type LaunchpadListResponse = BaseRes<Pagination<LaunchpadListItem>>;

// ---------launchpad list---------
type OrderListParams = BasePaginationParams & {
  category: number; // token:1 nft:2
};
type OrderListItem = LaunchpadListItem;
type OrderListResponse = BaseRes<Pagination<OrderListItem>>;

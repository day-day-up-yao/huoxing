// -----------------BonusAwardSetting-----------------
type BonusAwardSetting = {
  changeAvatar: number;
  changeName: number;
  earlyUser: number;
  followNagaTwitter: number;
  invite: number;
  inviteLimit: number;
  joinNagaDiscord: number;
  limitedQuest: number;
  quest: number;
  questDailyLimit: number;
  signin1: number;
  signin2: number;
  signin3: number;
  signin4: number;
  signin5: number;
  signin6: number;
  signin7: number;
};

type BonusAwardSettingRes = BaseRes<BonusAwardSetting>;

// -----------------BonusSignin-----------------
type BonusSignin = {
  signInNumMod: number;
};
type BonusSigninRes = BaseRes<BonusSignin>;

// -----------------get Invite Record signin-----------------
type InviteRecord = {
  avatarUrl: string;
  createAt: number;
  status: number;
  inviteCode: string;
  name: string;
  uidStr: string;
};
type InviteRecordParams = BasePaginationParams & { inviteCode: string };
type InviteRecordRes = BaseRes<Pagination<InviteRecord>>;

// -----------------get Limited Quests-----------------
type LimitedQuestsRes = BaseRes<(QuestListType & { rewardBonus: number })[]>;

// -----------------receive Bonus Award-----------------
type ReceiveBonusAwardParams = {
  bonusTaskType: number;
};
type ReceiveBonusAwardRes = BaseRes<{
  bonusTaskType: number;
  status: number;
}>;

// -----------------get Bonus Task Status-----------------
type BonusTaskStatus = {
  changeAvatar: number;
  changeName: number;
  earlyUser: number;
  followNagaTwitter: number;
  joinNagaDiscord: number;
  signin: number;
};
type BonusTaskStatusRes = BaseRes<BonusTaskStatus>;

/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root reducer
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import publicInfo from './public/index'
import loginInfo from './public/loginInfo'
import channelListInfo from './post/channelList'
import flashTypeListInfo from './flash/flashTypeList'
import liveTypeListInfo from './newlive/liveTypeList'
import liveChatListInfo from './newlive/liveChatList'
import gameListInfo from './useless/gameListInfo'
import postInfo from './post/post.reducer'
import tagsv2 from './tagsv2/tagsv2.reducer'
import agendaInfo from './conference/agenda.reducer'
import guestInfo from './conference/guest.reducer'
import mediaInfo from './conference/media.reducer'
import conferenceInfo from './conference/conferenceList'
import videoInfo from './video/video.reducer'
import postChannelInfo from './post/postChannel.reducer'
import commentInfo from './others/comment.reducer'
import flashInfo from './flash/flash.reducer'
import flashAuditInfo from './audit/flashAudit.reducer'
import userPostInfo from './useless/userPost.reducer'
import imgsInfo from './useless/imgs.reducer'
import languageInfo from './useless/language.reducer'
import InitGameInfo from './useless/initGame.reducer'
import authorityInfo from './useless/authority.reducer'
import auditInfo from './audit/audit.reducer'
import officialAuditInfo from './audit/officialAudit.reducer'
import whiteListInfo from './audit/whiteList.reducer'
import adInfo from './others/ad.reducer'
import articleAudit from './audit/articleAudit.reducer'
import icoInfo from './others/ico.reducer'
import liveInfo from './live/live.reducer'
import specialTopicInfo from './others/specialTopic.reducer'
import appTopicInfo from './app/appTopic.reducer'
import columnAuthorInfo from './others/columnAuthor.reducer'
import newsMergeInfo from './post/newsMerge.reducer'
import liveUserInfo from './live/liveUser.reducer'
import liveContent from './live/liveContent.reducer'
import liveComment from './live/liveComment.reducer'
import flashAccountInfo from './account/flashAccount.reducer'
import postAccountInfo from './account/postAccount.reducer'
import managerAccountInfo from './account/managerAccount.reducer'
import blackListInfo from './account/blackList.reducer'
import cooperationInfo from './entries/cooperation.reducer'
import coinRecommendInfo from './entries/coinRecommend.reducer'
import webCoinRecommendInfo from './entries/webCoinRecommend.reducer'
import hotCoinInfo from './entries/hotCoin.reducer'
import newsHotWordsInfo from './entries/newsHotWords.reducer'
import bannerInfo from './banner/banner.reducer'
import marsTripInfo from './activity/marsTrip.reducer'
import registrantInfo from './activity/registrant.reducer'
import countInfo from './system/count.reducer'
import flashPushInfo from './flash/flashPush.reducer'
import activityInfo from './activity/activity.reducer'
import activityPublishInfo from './activity/activityPublish.reducer'
import activityCityInfo from './activity/activityCity.reducer'
import placeListInfo from './activity/cityList.reducer'
import wordsFilterInfo from './entries/wordsFilter.reducer'
import newsReadCountInfo from './system/newsReadCount.reducer'
import flashTypeInfo from './flash/flashType.reducer'
import miniAppInfo from './miniApp/miniApp.reducer'
import miniVideoInfo from './miniApp/miniVideo.reducer'
import feedBackInfo from './app/feedBack.reducer'
import videoAuditInfo from './audit/videoAudit.reducer'
import exchangeRecommendInfo from './entries/exchangeRecommend.reducer'
import versionInfo from './app/version.reducer'
import hotAuthorAndTagsInfo from './entries/hotAuthorAndTags.reducer'
import twitterInfo from './socialMedia/twitter.reducer'
import adDataInfo from './others/adData.reducer'
import twitterAccountInfo from './socialMedia/twitterAccount.reducer'
import appOpenCoinRecommendInfo from './entries/appOpenCoinRecommend.reducer'
import stoUserInfo from './sto/stoUser.reducer'
import stoNoticeInfo from './sto/stoNotice.reducer'
import participateInfo from './activity/participate.reducer'
import lecturerInfo from './college/lecturer.reducer'
import courseInfo from './college/course.reducer'
import chapterInfo from './college/chapter.reducer'
import powerGuestInfo from './activity/power/guest.reducer'
import powerFameInfo from './activity/power/fame.reducer'
import powerPokeInfo from './activity/power/poke.reducer'
import chanceInfo from './calendarChance/chance.reducer'
import calendarInfo from './calendarChance/calendar.reducer'
import postTacticsInfo from './account/postTactics.reducer'
import powerYNGuestList from './activity/powerYN/guestList.reducer'
import powerYNAgendaList from './activity/powerYN/agendaList.reducer'
import powerYNCooperation from './activity/powerYN/cooperation.reducer'
import powerYNImgList from './activity/powerYN/imgList.reducer'
import powerYNRecommendList from './activity/powerYN/recommend.reducer'
import powerSHGuestList from './activity/powerSH/guestList.reducer'
import powerSHAgendaList from './activity/powerSH/agendaList.reducer'
import powerSHCooperation from './activity/powerSH/cooperation.reducer'
import powerSHImgList from './activity/powerSH/imgList.reducer'
import powerSHRecommendList from './activity/powerSH/recommend.reducer'
import powerSZGuestList from './activity/powerSZ/guestList.reducer'
import powerSZAgendaList from './activity/powerSZ/agendaList.reducer'
import powerSZCooperation from './activity/powerSZ/cooperation.reducer'
import powerSZImgList from './activity/powerSZ/imgList.reducer'
import powerSZRecommendList from './activity/powerSZ/recommend.reducer'
import powerBjGuestList from './activity/powerBj/guestList.reducer'
import powerBjAgendaList from './activity/powerBj/agendaList.reducer'
import powerBjCooperation from './activity/powerBj/cooperation.reducer'
import powerBjImgList from './activity/powerBj/imgList.reducer'
import powerBjRecommendList from './activity/powerBj/recommend.reducer'
import mpRankInfo from './mpRank/mpRank.reducer'
import powerZHGuestList from './activity/powerZH/guestList.reducer'
import powerZHAgendaList from './activity/powerZH/agendaList.reducer'
import powerZHCooperation from './activity/powerZH/cooperation.reducer'
import powerZHImgList from './activity/powerZH/imgList.reducer'
import powerZHRecommendList from './activity/powerZH/recommend.reducer'
import powerZHPrizeList from './activity/powerZH/prizeList.reducer'
import powerZHActivityList from './activity/powerZH/activityList.reducer'
import amendPhoneInfo from './amendPhone/amendPhone.reducer'
import newsNoticeInfo from './post/postNotice.reducer'
import newliveInfo from './newlive/newlive.reducer'

const reducers = Object.assign({
    publicInfo,
    newliveInfo,
    liveChatListInfo,
    loginInfo,
    channelListInfo,
    conferenceInfo,
    flashTypeListInfo,
    liveTypeListInfo,
    gameListInfo,
    postInfo,
    tagsv2,
    agendaInfo,
    guestInfo,
    mediaInfo,
    videoInfo,
    postChannelInfo,
    commentInfo,
    userPostInfo,
    imgsInfo,
    flashInfo,
    coinRecommendInfo,
    webCoinRecommendInfo,
    hotCoinInfo,
    newsHotWordsInfo,
    flashAuditInfo,
    languageInfo,
    InitGameInfo,
    authorityInfo,
    adInfo,
    auditInfo,
    officialAuditInfo,
    articleAudit,
    icoInfo,
    liveInfo,
    liveUserInfo,
    liveContent,
    liveComment,
    specialTopicInfo,
    appTopicInfo,
    columnAuthorInfo,
    newsMergeInfo,
    flashAccountInfo,
    managerAccountInfo,
    blackListInfo,
    cooperationInfo,
    bannerInfo,
    marsTripInfo,
    registrantInfo,
    countInfo,
    flashPushInfo,
    activityInfo,
    activityPublishInfo,
    activityCityInfo,
    placeListInfo,
    wordsFilterInfo,
    newsReadCountInfo,
    flashTypeInfo,
    miniAppInfo,
    miniVideoInfo,
    feedBackInfo,
    videoAuditInfo,
    exchangeRecommendInfo,
    versionInfo,
    hotAuthorAndTagsInfo,
    twitterAccountInfo,
    twitterInfo,
    postAccountInfo,
    adDataInfo,
    appOpenCoinRecommendInfo,
    stoUserInfo,
    stoNoticeInfo,
    participateInfo,
    lecturerInfo,
    courseInfo,
    chapterInfo,
    powerGuestInfo,
    powerFameInfo,
    powerPokeInfo,
    chanceInfo,
    calendarInfo,
    whiteListInfo,
    postTacticsInfo,
    powerYNGuestList,
    powerYNAgendaList,
    powerYNCooperation,
    powerYNImgList,
    powerYNRecommendList,
    powerSHGuestList,
    powerSHAgendaList,
    powerSHCooperation,
    powerSHImgList,
    powerSHRecommendList,
    powerSZGuestList,
    powerSZAgendaList,
    powerSZCooperation,
    powerSZImgList,
    powerSZRecommendList,
    powerBjGuestList,
    powerBjAgendaList,
    powerBjCooperation,
    powerBjImgList,
    powerBjRecommendList,
    mpRankInfo,
    powerZHGuestList,
    powerZHAgendaList,
    powerZHCooperation,
    powerZHImgList,
    powerZHRecommendList,
    powerZHPrizeList,
    powerZHActivityList,
    amendPhoneInfo,
    newsNoticeInfo,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer

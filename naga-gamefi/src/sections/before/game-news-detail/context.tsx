import React, { createContext, useMemo, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import { memoize } from 'proxy-memoize';
import { usePathname } from 'src/routes/hooks';
import { toast } from 'src/components/toast';
import { RootState } from 'src/models/store';
import { useUserPopup } from 'src/fetchs/store';

const selectDatas = memoize((state: RootState) => ({
  articleDetail: state.common.articleDetail,
  strategyDetail: state.common.strategyDetail,
  articleFlashDetail: state.common.articleFlashDetail,
  evaluationDetail: state.common.articleEvaluationDetail,
  detail: state.common.gameDetail,
  articleCommentListByArticleId: state.comment.articleCommentListByArticleId,
  selfArticleComment: state.comment.selfArticleComment,
}));

export const Context = createContext({} as any);
export default ({ children }: any) => {
  const pathname = usePathname({ pure: true });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    articleDetail,
    strategyDetail,
    articleFlashDetail,
    evaluationDetail,
    detail,
    articleCommentListByArticleId,
    selfArticleComment,
  } = useSelector((state: RootState) => selectDatas(state));

  useEffect(() => {
    console.log('articleDetail', articleDetail);
  }, [articleDetail]);

  const [userFlage, setUserFlage] = useState(false); // 用户是否登录
  const [commentList, setCommentList] = useState(articleCommentListByArticleId); // 评论列表
  const [isCommentPopupShow, setIsCommentPopupShow] = useState(false); // 评价弹窗 开关

  // 判断当前页面 ———— 资讯
  const isArticlPage = useMemo(() => pathname?.includes('/article/'), [pathname]);
  // 判断当前页面 ———— 攻略
  const isStrategyPage = useMemo(() => pathname?.includes('/strategy/'), [pathname]);
  // 判断当前页面 ———— 快讯
  const isArticlFlashPage = useMemo(() => pathname?.includes('/flash/'), [pathname]);
  // 判断当前页面 ———— 测评
  const isEvaluationPage = useMemo(
    () => pathname?.includes('/game/') || pathname?.includes('/evaluation/'),
    [pathname]
  );

  // 当前页面数据
  const nowNewsDetail = useMemo(() => {
    if (isArticlPage) return articleDetail;
    if (isStrategyPage) return strategyDetail;
    if (isArticlFlashPage) return articleFlashDetail;
    if (isEvaluationPage) return evaluationDetail;
  }, [
    isArticlPage,
    isStrategyPage,
    isArticlFlashPage,
    isEvaluationPage,
    articleDetail,
    strategyDetail,
    articleFlashDetail,
    evaluationDetail,
  ]);

  // 请求当前资讯详情 用户自己的评论
  const getSelfComment = useCallback(() => {
    dispatch.comment.getSelfArticleComment({
      articleId: articleDetail.id,
    });
  }, [articleDetail.id, dispatch.comment]);

  // 判断是否登录
  useEffect(() => {
    if (Cookies.get('uid')) {
      setUserFlage(true);
      getSelfComment();
    } else {
      setUserFlage(false);
    }
  }, [getSelfComment]);

  // 请求评价列表事件
  const getUserReviewsList = useCallback(
    (curPage: any) => {
      dispatch.comment
        .getArticleCommentListByArticleId({
          articleId: articleDetail.id,
          currentPage: curPage,
          pageSize: 10,
        })
        .then((res: any) => {
          if (res.code === 0) {
            setCommentList(res.data);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [articleDetail.id, dispatch.comment]
  );

  // 切换评价页数
  const onBtnUserReviewsPageClick = useCallback(
    (curPage: any) => {
      getUserReviewsList(curPage);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    [getUserReviewsList]
  );

  // 评价弹窗开启事件
  const { mutate: mutateUserInfo } = useUserPopup();
  const onBtnCommentPopupOpenClick = useCallback(() => {
    if (userFlage) {
      setIsCommentPopupShow(true);
    } else {
      mutateUserInfo({ type: 0, bool: true });
    }
  }, [mutateUserInfo, userFlage]);

  // 评价弹窗关闭事件
  const onBtnCommentPopupCloseClick = useCallback(() => {
    setIsCommentPopupShow(false);
  }, []);

  // 发送评价确定事件
  const onBtnAddCommentClick = useCallback(
    (id: any, content: any) => {
      if (id) {
        dispatch.comment
          .updateArticleComment({
            content,
            id,
          })
          .then((res: any) => {
            if (res.code === 0) {
              getUserReviewsList(1);
              getSelfComment();
              onBtnCommentPopupCloseClick();
            } else {
              toast.error(res.msg);
            }
          });
      } else {
        dispatch.comment
          .addArticleComment({
            content,
            articleId: articleDetail.id,
          })
          .then((res: any) => {
            if (res.code === 0) {
              getUserReviewsList(1);
              getSelfComment();
              onBtnCommentPopupCloseClick();
            } else {
              toast.error(res.msg);
            }
          });
      }
    },
    [
      articleDetail.id,
      dispatch.comment,
      getSelfComment,
      getUserReviewsList,
      onBtnCommentPopupCloseClick,
    ]
  );

  const result = useMemo(
    () => ({
      t,
      isArticlPage,
      isStrategyPage,
      isArticlFlashPage,
      isEvaluationPage,
      nowNewsDetail,
      detail,
      commentList,
      isCommentPopupShow,
      selfArticleComment,
      onBtnUserReviewsPageClick,
      onBtnCommentPopupOpenClick,
      onBtnCommentPopupCloseClick,
      onBtnAddCommentClick,
    }),
    [
      commentList,
      detail,
      isArticlFlashPage,
      isArticlPage,
      isCommentPopupShow,
      isEvaluationPage,
      isStrategyPage,
      nowNewsDetail,
      onBtnAddCommentClick,
      onBtnCommentPopupCloseClick,
      onBtnCommentPopupOpenClick,
      onBtnUserReviewsPageClick,
      selfArticleComment,
      t,
    ]
  );

  return <Context.Provider value={result}>{children}</Context.Provider>;
};

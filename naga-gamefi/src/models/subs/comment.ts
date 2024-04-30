import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { comment as commentApis } from '../apis';
import { RootModel } from '../root';

export const comment = createModel<RootModel>()({
  state: {
    commentListByGameId: {},
    commentListByUid: {},
    selfComment: {},
    starByGameId: {},
    articleCommentListByArticleId: {},
    articleCommentListByUid: {},
    selfArticleComment: {},
  } as any,
  reducers: {
    setCommentListByGameId: (state, payload) => {
      state.commentListByGameId = payload;
      return state;
    },
    setCommentListByUid: (state, payload) => {
      state.commentListByUid = payload;
      return state;
    },
    setSelfComment: (state, payload) => {
      state.selfComment = payload;
      return state;
    },
    setStarByGameId: (state, payload) => {
      state.starByGameId = payload;
      return state;
    },
    setArticleCommentListByArticleId: (state, payload) => {
      state.articleCommentListByArticleId = payload;
      return state;
    },
    setArticleCommentListByUid: (state, payload) => {
      state.articleCommentListByUid = payload;
      return state;
    },
    setSelfArticleComment: (state, payload) => {
      state.selfArticleComment = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async addComment(payload) {
      const res = await fetcher({
        type: 'post',
        url: commentApis.addComment,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async updateComment(payload) {
      const res = await fetcher({
        type: 'post',
        url: commentApis.updateComment,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getSelfComment(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getSelfComment,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setSelfComment(res.data);
      }
      return res;
    },
    async getCommentListByGameId(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getCommentListByGameId,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setCommentListByGameId(res.data);
      }
      return res;
    },
    async getCommentListByUid(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getCommentListByUid,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setCommentListByUid(res.data);
      }
      return res;
    },
    async getStarByGameId(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getStarByGameId,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setStarByGameId(res.data);
      }
      return res;
    },
    async addArticleComment(payload) {
      const res = await fetcher({
        type: 'post',
        url: commentApis.addArticleComment,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async updateArticleComment(payload) {
      const res = await fetcher({
        type: 'post',
        url: commentApis.updateArticleComment,
        params: {
          ...payload,
        },
      });
      return res;
    },
    async getSelfArticleComment(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getSelfArticleComment,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setSelfArticleComment(res.data);
      }
      return res;
    },
    async getArticleCommentListByArticleId(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getArticleCommentListByArticleId,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setArticleCommentListByArticleId(res.data);
      }
      return res;
    },
    async getArticleCommentListByUid(payload) {
      const res = await fetcher({
        type: 'get',
        url: commentApis.getArticleCommentListByUid,
        params: {
          ...payload,
        },
      });
      if (res.code === 0) {
        dispatch.comment.setArticleCommentListByUid(res.data);
      }
      return res;
    },
  }),
});

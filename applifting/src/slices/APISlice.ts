import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store/Store";
import {
  AccessToken,
  Article,
  ArticleDetail,
  Articles,
  ImageInfo,
  Comment,
} from "../types/apiReturnTypes";
import {
  NewComment,
  UserLogin,
  EditedArticle,
  NewArticle,
  EditCommentState,
} from "../types/apiInputTypes";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      if (apiKey) {
        headers.set("X-API-KEY", apiKey.toString());
      }

      const token = (getState() as RootState).auth.access_token;

      if (token) {
        headers.set("Authorization", token);
      }

      return headers;
    },
  }),
  tagTypes: ["articles", "article", "image"],
  endpoints: (builder) => ({
    login: builder.mutation<AccessToken, UserLogin>({
      query: (credentials) => ({
        url: `/login`,
        method: "POST",
        body: credentials,
      }),
    }),

    getArticles: builder.query<Articles, void>({
      query: () => `/articles`,
      providesTags: ["articles"],
    }),
    createArticle: builder.mutation<Article, NewArticle>({
      query: (article) => ({
        url: `/articles`,
        method: "POST",
        body: article,
      }),
      invalidatesTags: ["articles"],
    }),

    getArticle: builder.query<ArticleDetail, string | undefined>({
      query: (articleId) => `/articles/${articleId}`,
      providesTags: ["article"],
    }),

    editArticle: builder.mutation<string, EditedArticle>({
      query: (editedArticle) => ({
        url: `/articles/${editedArticle.articleId}`,
        method: "PATCH",
        body: editedArticle,
      }),
      invalidatesTags: ["article", "articles"],
    }),
    deleteArticle: builder.mutation<string, string>({
      query: (articleId) => ({
        url: `/articles/${articleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["article", "articles"],
    }),

    createComment: builder.mutation<Comment, NewComment>({
      query: (comment) => ({
        url: `/comments`,
        method: "POST",
        body: comment,
      }),
      async onQueryStarted({ articleId }, { dispatch, queryFulfilled }) {
        try {
          if (articleId) {
            const { data: newComment } = await queryFulfilled;
            dispatch(
              api.util.updateQueryData("getArticle", articleId, (draft) => {
                draft.comments.push(newComment);
              })
            );
          }
        } catch {}
      },
    }),
    upVoteComment: builder.mutation<Comment, EditCommentState>({
      query: (comment) => ({
        url: `/comments/${comment.commentId}/vote/up`,
        method: "POST",
      }),
      async onQueryStarted(comment, { dispatch, queryFulfilled }) {
        try {
          if (comment.articleId) {
            const { data: newComment } = await queryFulfilled;
            dispatch(
              api.util.updateQueryData(
                "getArticle",
                comment.articleId,
                (draft) => {
                  const draftComment = draft.comments.findIndex(
                    (e) => e.commentId === comment.commentId
                  );
                  Object.assign(draft.comments[draftComment], newComment);
                }
              )
            );
          }
        } catch {}
      },
    }),
    downVoteComment: builder.mutation<Comment, EditCommentState>({
      query: (comment) => ({
        url: `/comments/${comment.commentId}/vote/down`,
        method: "POST",
      }),
      async onQueryStarted(comment, { dispatch, queryFulfilled }) {
        try {
          if (comment.articleId) {
            const { data: newComment } = await queryFulfilled;
            dispatch(
              api.util.updateQueryData(
                "getArticle",
                comment.articleId,
                (draft) => {
                  const draftComment = draft.comments.findIndex(
                    (e) => e.commentId === comment.commentId
                  );
                  Object.assign(draft.comments[draftComment], newComment);
                }
              )
            );
          }
        } catch {}
      },
    }),

    addImage: builder.mutation<ImageInfo[], FormData>({
      query: (newImages) => ({
        url: `/images`,
        method: "POST",
        body: newImages,
      }),
    }),
    deleteImage: builder.mutation<string, string>({
      query: (imageId) => ({
        url: `/images/${imageId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetArticlesQuery,
  useCreateArticleMutation,
  useAddImageMutation,
  useCreateCommentMutation,
  useDeleteArticleMutation,
  useDeleteImageMutation,
  useDownVoteCommentMutation,
  useEditArticleMutation,
  useGetArticleQuery,
  useUpVoteCommentMutation,
} = api;

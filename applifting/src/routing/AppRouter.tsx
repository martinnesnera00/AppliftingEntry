import { BrowserRouter, Routes } from "react-router-dom";
import { Route, Navigate } from "react-router";
import React from "react";

import * as routes from "./RouteConstants";
import PrivateRoute from "./PrivateRoute";

import EditArticleViewPage from "../pages/adminPages/editArticlePage/EditArticleViewPage";
import LoginPage from "../pages/userPages/loginPage/LoginPage";
import ArticleViewPage from "../pages/userPages/articleViewPage/ArticleViewPage";
import ArticleListPage from "../pages/userPages/articleListPage/ArticleListPage";
import NewArticleViewPage from "../pages/adminPages/newArticleViewPage/NewArticleViewPage";
import MyArticlesListPage from "../pages/adminPages/myArticleListPage/MyArticlesListPage";
import Navbar from "../components/reusableComponents/navbar/Navbar";

export const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path={routes.HOMEPAGE.path}
        element={<Navigate to={routes.ARTICLES_LIST.path} />}
      />
      <Route path={routes.ARTICLE_VIEW.path} element={<ArticleViewPage />} />
      <Route path={routes.LOGIN.path} element={<LoginPage />} />
      <Route path={routes.ARTICLES_LIST.path} element={<ArticleListPage />} />
      <Route
        path={routes.EDIT_ARTICLE_VIEW.path}
        element={<PrivateRoute component={<EditArticleViewPage />} />}
      />
      <Route
        path={routes.NEW_ARTICLE_VIEW.path}
        element={<PrivateRoute component={<NewArticleViewPage />} />}
      />
      <Route
        path={routes.MY_ARTICLES_LIST.path}
        element={<PrivateRoute component={<MyArticlesListPage />} />}
      />
      <Route
        path={routes.NOT_FOUND.path}
        element={<div>{routes.NOT_FOUND.path}</div>}
      />
    </Routes>
  </BrowserRouter>
);

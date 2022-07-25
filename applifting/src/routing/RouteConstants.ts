import { Route } from "../types/commonTypes";

const HOMEPAGE: Route = {
  name: "Homepage",
  path: "/",
};
const ARTICLES_LIST: Route = {
  name: "Recent Articles",
  path: "/recent-articles",
};
const LOGIN: Route = { name: "Login", path: "/login" };
const ARTICLE_VIEW: Route = {
  name: "Article View",
  path: "/recent-articles/:id",
};
const MY_ARTICLES_LIST: Route = {
  name: "My Articles",
  path: "/my-articles",
};
const NEW_ARTICLE_VIEW: Route = {
  name: "Create Article",
  path: "/my-articles/new",
};
const EDIT_ARTICLE_VIEW: Route = {
  name: "Edit Article",
  path: "/my-articles/:id",
};
const NOT_FOUND: Route = { name: "Not Found", path: "*" };

export {
  HOMEPAGE,
  LOGIN,
  ARTICLE_VIEW,
  ARTICLES_LIST,
  EDIT_ARTICLE_VIEW,
  NEW_ARTICLE_VIEW,
  MY_ARTICLES_LIST,
  NOT_FOUND,
};

import { Navigate, RouteProps } from "react-router-dom";
import React from "react";

import { ARTICLES_LIST } from "./RouteConstants";

import { useAppSelector } from "../store/Store";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = ({ component }) => {
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  return loggedIn ? component : <Navigate to={ARTICLES_LIST.path} />;
};

export default PrivateRoute;

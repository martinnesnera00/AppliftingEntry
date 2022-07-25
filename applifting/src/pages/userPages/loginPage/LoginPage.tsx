import React, { useEffect } from "react";
import { FormikProps, Formik, Form, Field } from "formik";
import { useNavigate } from "react-router";

import { FormValues, loginSchema } from "./validationSchema";
import {
  LoginFormContainer,
  StyledButton,
  StyledMain,
} from "./styled.LoginPage";

import Layout from "../../../components/reusableComponents/layout/Layout";
import { useLoginMutation } from "../../../slices/APISlice";
import { MY_ARTICLES_LIST } from "../../../routing/RouteConstants";
import { BlockContainer } from "../../../components/styledComponents/Container";
import { H1, Label } from "../../../components/styledComponents/Text";
import { UserLogin } from "../../../types/apiInputTypes";
import { Input } from "../../../components/reusableComponents/input/Input";

const LoginPage = () => {
  const navigate = useNavigate();
  const [logIn, { isLoading, isSuccess: isLoggedIn }] = useLoginMutation();

  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(MY_ARTICLES_LIST.path, { replace: true });
    }
  }, [isLoggedIn]);

  const logInUser = (values: FormValues) => {
    const loginData: UserLogin = {
      username: values.username,
      password: values.password,
    };

    logIn(loginData);
  };

  return (
    <Layout>
      <StyledMain>
        <LoginFormContainer>
          <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={logInUser}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <BlockContainer spacing={"medium"}>
                  <H1>Log In</H1>
                  <BlockContainer spacing={"small"} fullWidth>
                    <Label>Username</Label>
                    <Field
                      component={Input}
                      name="username"
                      placeholder="Enter username"
                    />
                  </BlockContainer>
                  <BlockContainer spacing={"small"} fullWidth>
                    <Label>Password</Label>
                    <Field
                      component={Input}
                      type={"password"}
                      name="password"
                      placeholder="Enter password"
                    />
                  </BlockContainer>
                  <StyledButton disabled={isLoading} type={"submit"}>
                    Log In
                  </StyledButton>
                </BlockContainer>
              </Form>
            )}
          </Formik>
        </LoginFormContainer>
      </StyledMain>
    </Layout>
  );
};

export default LoginPage;

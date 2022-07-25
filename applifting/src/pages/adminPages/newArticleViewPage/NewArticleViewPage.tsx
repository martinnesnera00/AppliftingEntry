import React, { useEffect, useState } from "react";
import { Form, FormikProps, Formik, Field } from "formik";
import { useNavigate } from "react-router";

import { FormValues, articleSchema } from "./validationSchema";

import Layout from "../../../components/reusableComponents/layout/Layout";
import { useCreateArticleMutation } from "../../../slices/APISlice";
import { H1, Label } from "../../../components/styledComponents/Text";
import {
  InlineContainer,
  Main,
  BlockContainer,
} from "../../../components/styledComponents/Container";
import { NewArticle } from "../../../types/apiInputTypes";
import { useUploadImage } from "../../../hooks/FileHandlingHooks";
import { MY_ARTICLES_LIST } from "../../../routing/RouteConstants";
import {
  Button,
  UploadFileButton,
} from "../../../components/styledComponents/Button";
import { BigImage } from "../../../components/styledComponents/Image";
import { Input } from "../../../components/reusableComponents/input/Input";
import { Textarea } from "../../../components/reusableComponents/textarea/Textarea";

const NewArticleViewPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>();
  const [createArticle, { isLoading: isCreating, isSuccess: isCreated }] =
    useCreateArticleMutation();
  const { addNewImage, isUploadingImage } = useUploadImage(setImage);

  const initialValues: FormValues = { title: "", content: "", perex: "" };

  useEffect(() => {
    if (isCreated) {
      navigate(MY_ARTICLES_LIST.path, { replace: true });
    }
  }, [isCreated]);

  const createNewArticle = (values: FormValues) => {
    const newArticle: NewArticle = {
      title: values.title,
      imageId: image ? image : null,
      content: values.content,
      perex: values.perex,
    };

    createArticle(newArticle);
  };

  return (
    <Layout>
      <Main withRightMargin>
        <Formik
          validationSchema={articleSchema}
          initialValues={initialValues}
          onSubmit={createNewArticle}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <BlockContainer spacing={"medium"}>
                <InlineContainer>
                  <H1>Create new article</H1>
                  <Button
                    disabled={isCreating || isUploadingImage}
                    type="submit"
                  >
                    Publish Article
                  </Button>
                </InlineContainer>
                <BlockContainer spacing={"small"} fullWidth>
                  <Label>Article Title</Label>
                  <Field
                    component={Input}
                    name="title"
                    placeholder="Enter title"
                  />
                </BlockContainer>
                <BlockContainer spacing={"small"} fullWidth>
                  <Label>Perex</Label>
                  <Field
                    component={Input}
                    name="perex"
                    placeholder="Enter perex"
                  />
                </BlockContainer>
                <BlockContainer spacing={"small"} fullWidth>
                  <Label>Featured Image</Label>
                  {image && <BigImage imageId={image} />}
                  <UploadFileButton htmlFor={"file"}>
                    Upload picture
                    <input
                      hidden
                      id={"file"}
                      disabled={isUploadingImage || isCreating}
                      onChange={addNewImage}
                      type={"file"}
                      title={"Upload file"}
                      accept={"image/png, image/jpeg, image/jpg"}
                    />
                  </UploadFileButton>
                </BlockContainer>
                <BlockContainer spacing={"small"} fullWidth>
                  <Label>Content</Label>
                  <Field
                    component={Textarea}
                    name="content"
                    placeholder="Enter content"
                  />
                </BlockContainer>
              </BlockContainer>
            </Form>
          )}
        </Formik>
      </Main>
    </Layout>
  );
};

export default NewArticleViewPage;

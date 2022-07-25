import { useNavigate, useParams } from "react-router";
import { Field, Form, Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";

import { articleSchema, FormValues } from "./validationSchema";

import Layout from "../../../components/reusableComponents/layout/Layout";
import {
  useEditArticleMutation,
  useGetArticleQuery,
} from "../../../slices/APISlice";
import { H1, Label } from "../../../components/styledComponents/Text";
import {
  InlineContainer,
  Main,
  BlockContainer,
} from "../../../components/styledComponents/Container";
import { BigImage } from "../../../components/styledComponents/Image";
import { EditedArticle } from "../../../types/apiInputTypes";
import {
  useDeleteImage,
  useUploadImage,
} from "../../../hooks/FileHandlingHooks";
import { MY_ARTICLES_LIST } from "../../../routing/RouteConstants";
import {
  Button,
  DeleteFileButton,
  UploadFileButton,
} from "../../../components/styledComponents/Button";
import { LoadingWrapper } from "../../../components/reusableComponents/loadingWrapper/LoadingWrapper";
import { Input } from "../../../components/reusableComponents/input/Input";
import { Textarea } from "../../../components/reusableComponents/textarea/Textarea";

const EditArticleViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetArticleQuery(id);
  const [image, setImage] = useState<string | null | undefined>(data?.imageId);
  const { addNewImage, isUploadingImage } = useUploadImage(setImage);
  const { deleteExistingImage, isDeletingImage } = useDeleteImage(setImage);
  const [editArticle, { isLoading: isEditing, isSuccess: isEdited }] =
    useEditArticleMutation();

  const initialValues: FormValues = {
    title: data?.title ? data.title : "",
    perex: data?.perex ? data.perex : "",
    content: data?.content ? data.content : "",
  };

  useEffect(() => {
    if (isEdited) {
      navigate(MY_ARTICLES_LIST.path, { replace: true });
    }
  }, [isEdited]);

  const editExistingArticle = (values: FormValues) => {
    const editedArticle: EditedArticle = {
      articleId: data?.articleId ? data.articleId : null,
      title: values.title,
      imageId: image ? image : null,
      content: values.content,
      perex: values.perex,
    };

    editArticle(editedArticle);
  };

  return (
    <Layout>
      <Main withRightMargin>
        <Formik
          enableReinitialize
          validationSchema={articleSchema}
          initialValues={initialValues}
          onSubmit={editExistingArticle}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <BlockContainer spacing={"medium"}>
                <InlineContainer>
                  <H1>Edit article</H1>
                  <Button
                    disabled={
                      isEditing ||
                      isDeletingImage ||
                      isUploadingImage ||
                      isLoading
                    }
                    type="submit"
                  >
                    Publish Article
                  </Button>
                </InlineContainer>
                <LoadingWrapper isLoading={isLoading}>
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
                    <InlineContainer>
                      <UploadFileButton htmlFor={"file"}>
                        Upload new picture
                        <input
                          disabled={isUploadingImage || isLoading}
                          onChange={addNewImage}
                          hidden
                          id={"file"}
                          type={"file"}
                          title={"Upload file"}
                          accept={"image/png, image/jpeg, image/jpg"}
                        />
                      </UploadFileButton>
                      {image && (
                        <DeleteFileButton
                          disabled={isUploadingImage || isLoading}
                          onClick={() => deleteExistingImage(image)}
                          type={"button"}
                        >
                          Delete file
                        </DeleteFileButton>
                      )}
                    </InlineContainer>
                  </BlockContainer>
                  <BlockContainer spacing={"small"} fullWidth>
                    <Label>Content</Label>
                    <Field
                      name="content"
                      placeholder={"Markdown here"}
                      component={Textarea}
                    />
                  </BlockContainer>
                </LoadingWrapper>
              </BlockContainer>
            </Form>
          )}
        </Formik>
      </Main>
    </Layout>
  );
};

export default EditArticleViewPage;

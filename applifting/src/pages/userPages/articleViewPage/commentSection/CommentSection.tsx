import React, { useMemo } from "react";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";

import { commentSchema, FormValues } from "./validationSchema";
import {
  CommentSectionContainer,
  StyledForm,
  StyledSmallButton,
} from "./styled.CommentSection";

import { Comment as IComment } from "../../../../types/apiReturnTypes";
import { sortByDate } from "../../../../functions/ArrayHelpers";
import { H3 } from "../../../../components/styledComponents/Text";
import {
  InlineContainer,
  BlockContainer,
} from "../../../../components/styledComponents/Container";
import { ProfileImage } from "../../../../components/styledComponents/Image";
import { useCreateCommentMutation } from "../../../../slices/APISlice";
import { NewComment } from "../../../../types/apiInputTypes";
import { Comment } from "../comment/Comment";
import { Input } from "../../../../components/reusableComponents/input/Input";

interface Props {
  articleId: string | undefined;
  comments: IComment[] | undefined;
}

export const CommentSection: React.FC<Props> = (props) => {
  const [createComment, { isLoading: isCreatingComment }] =
    useCreateCommentMutation();
  const sortedComments = useMemo(
    () => sortByDate(props.comments, "desc"),
    [props.comments]
  );
  const commentCount = props.comments ? props.comments.length : 0;

  const initialValues: FormValues = { author: "", content: "" };

  const createNewComment = (values: FormValues, action: FormikHelpers<any>) => {
    action.resetForm();

    const comment: NewComment = {
      content: values.content,
      articleId: props.articleId ? props.articleId : null,
      author: values.author,
    };
    createComment(comment);
  };

  return (
    <CommentSectionContainer fullWidth spacing={"medium"}>
      <H3>{`Comments (${commentCount})`}</H3>
      <InlineContainer fullWidth>
        <ProfileImage imageId={null} />
        <Formik
          validationSchema={commentSchema}
          enableReinitialize
          initialValues={initialValues}
          onSubmit={createNewComment}
        >
          {(props: FormikProps<any>) => (
            <StyledForm>
              <BlockContainer spacing={"small"}>
                <Field
                  name="author"
                  placeholder={"Enter author"}
                  component={Input}
                />
                <Field
                  name="content"
                  placeholder={"Join the discussion..."}
                  component={Input}
                />
                <StyledSmallButton disabled={isCreatingComment} type="submit">
                  Send
                </StyledSmallButton>
              </BlockContainer>
            </StyledForm>
          )}
        </Formik>
      </InlineContainer>

      {sortedComments.map((comment, index) => (
        <Comment articleId={props.articleId} data={comment} key={index} />
      ))}
    </CommentSectionContainer>
  );
};

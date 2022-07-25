import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";

import { Comment as IComment } from "../../../../types/apiReturnTypes";
import {
  InlineContainer,
  BlockContainer,
} from "../../../../components/styledComponents/Container";
import {
  useDownVoteCommentMutation,
  useUpVoteCommentMutation,
} from "../../../../slices/APISlice";
import { ProfileImage } from "../../../../components/styledComponents/Image";
import { EditCommentState } from "../../../../types/apiInputTypes";
import { Text } from "../../../../components/styledComponents/Text";

interface Props {
  articleId: string | undefined;
  data: IComment;
}

export const Comment: React.FC<Props> = (props) => {
  const [upVote] = useUpVoteCommentMutation();
  const [downVote] = useDownVoteCommentMutation();
  const formattedDate = moment(props.data.createdAt).startOf("hours").fromNow();

  const changeCommentState = (state: "upVote" | "downVote") => {
    const commentState: EditCommentState = {
      commentId: props.data.commentId,
      articleId: props.articleId,
    };
    if (state === "upVote") {
      upVote(commentState);
    } else downVote(commentState);
  };

  return (
    <InlineContainer>
      <ProfileImage imageId={null} />
      <BlockContainer spacing={"small"}>
        <InlineContainer verticalAlign={"bottom"}>
          <Text size={"medium"} bold>
            {props.data.author}
          </Text>
          <Text size={"small"}>{formattedDate}</Text>
        </InlineContainer>
        <Text size={"medium"}>{props.data.content}</Text>
        <InlineContainer verticalAlign={"center"}>
          <div>{props.data.score}</div>
          <UpOutlined onClick={() => changeCommentState("upVote")}>
            Upvote
          </UpOutlined>
          <DownOutlined onClick={() => changeCommentState("downVote")}>
            Downvote
          </DownOutlined>
        </InlineContainer>
      </BlockContainer>
    </InlineContainer>
  );
};

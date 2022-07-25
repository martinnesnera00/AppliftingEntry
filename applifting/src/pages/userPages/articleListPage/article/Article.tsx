import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { H3, Text } from "../../../../components/styledComponents/Text";
import { Article as IArticle } from "../../../../types/apiReturnTypes";
import {
  InlineContainer,
  BlockContainer,
} from "../../../../components/styledComponents/Container";
import { MediumImage } from "../../../../components/styledComponents/Image";

interface Props {
  data: IArticle;
}

export const Article: React.FC<Props> = (props) => {
  const formattedDate = moment(props.data.createdAt).format("D.M.yyyy");

  return (
    <InlineContainer>
      <MediumImage imageId={props.data.imageId} />
      <BlockContainer spacing={"small"}>
        <H3>{props.data.title}</H3>
        <div>{formattedDate}</div>
        <Text size={"medium"}>{props.data.perex}</Text>
        <Link to={`/recent-articles/${props.data.articleId}`}>
          Read whole article
        </Link>
      </BlockContainer>
    </InlineContainer>
  );
};

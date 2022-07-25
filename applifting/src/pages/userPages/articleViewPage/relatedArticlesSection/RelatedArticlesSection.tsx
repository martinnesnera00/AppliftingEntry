import React from "react";
import { Link } from "react-router-dom";

import { H3, H4, Text } from "../../../../components/styledComponents/Text";
import { BlockContainer } from "../../../../components/styledComponents/Container";
import { useGetArticlesQuery } from "../../../../slices/APISlice";
import { findOtherArticlesThan } from "../../../../functions/ArrayHelpers";

interface Props {
  currentArticleId: string | undefined;
}

export const RelatedArticlesSection: React.FC<Props> = (props) => {
  const { data: articles = [] } = useGetArticlesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: findOtherArticlesThan(data?.items, props.currentArticleId, 4),
    }),
  });

  return (
    <BlockContainer spacing={"medium"}>
      <H3>Related articles</H3>
      {articles &&
        articles.map((item, index) => (
          <BlockContainer spacing={"small"} key={index}>
            <Link to={`/recent-articles/${item.articleId}`}>
              <H4>{item.title}</H4>
            </Link>
            <Text size={"small"}>{item.perex}</Text>
          </BlockContainer>
        ))}
    </BlockContainer>
  );
};

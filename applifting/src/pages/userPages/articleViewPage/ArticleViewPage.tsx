import { useParams } from "react-router";
import React from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";

import { CommentSection } from "./commentSection/CommentSection";
import { RelatedArticlesSection } from "./relatedArticlesSection/RelatedArticlesSection";

import Layout from "../../../components/reusableComponents/layout/Layout";
import { useGetArticleQuery } from "../../../slices/APISlice";
import { H1 } from "../../../components/styledComponents/Text";
import {
  Aside,
  Main,
  BlockContainer,
} from "../../../components/styledComponents/Container";
import { BigImage } from "../../../components/styledComponents/Image";
import { LoadingWrapper } from "../../../components/reusableComponents/loadingWrapper/LoadingWrapper";

const ArticleViewPage = () => {
  const { id } = useParams();
  const { data: article, isLoading } = useGetArticleQuery(id);

  const formattedDate = moment(article?.createdAt).format("D.M.yyyy");

  return (
    <Layout>
      <LoadingWrapper isLoading={isLoading}>
        <Main withRightMargin>
          <BlockContainer spacing={"medium"}>
            <H1>{article?.title}</H1>
            <div>{formattedDate}</div>
            <BigImage imageId={article?.imageId} />
            {article && <ReactMarkdown>{article.content}</ReactMarkdown>}
            <CommentSection
              articleId={article?.articleId}
              comments={article?.comments}
            />
          </BlockContainer>
        </Main>

        <Aside>
          <RelatedArticlesSection currentArticleId={article?.articleId} />
        </Aside>
      </LoadingWrapper>
    </Layout>
  );
};

export default ArticleViewPage;

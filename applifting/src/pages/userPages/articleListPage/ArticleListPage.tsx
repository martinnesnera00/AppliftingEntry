import { useMemo } from "react";

import { Article } from "./article/Article";

import Layout from "../../../components/reusableComponents/layout/Layout";
import { useGetArticlesQuery } from "../../../slices/APISlice";
import { H1 } from "../../../components/styledComponents/Text";
import {
  Main,
  BlockContainer,
} from "../../../components/styledComponents/Container";
import { LoadingWrapper } from "../../../components/reusableComponents/loadingWrapper/LoadingWrapper";
import { sortByDate } from "../../../functions/ArrayHelpers";

const ArticleListPage = () => {
  const { data, isLoading } = useGetArticlesQuery();
  const sortedArticles = useMemo(() => sortByDate(data?.items, "desc"), [data]);

  return (
    <Layout>
      <Main>
        <BlockContainer spacing={"big"}>
          <H1>Recent articles</H1>
          <LoadingWrapper isLoading={isLoading}>
            <BlockContainer spacing={"medium"}>
              {sortedArticles &&
                sortedArticles.map((article, index) => (
                  <Article key={index} data={article} />
                ))}
            </BlockContainer>
          </LoadingWrapper>
        </BlockContainer>
      </Main>
    </Layout>
  );
};

export default ArticleListPage;

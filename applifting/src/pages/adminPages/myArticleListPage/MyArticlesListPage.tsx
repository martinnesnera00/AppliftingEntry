import { useNavigate } from "react-router";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

import Layout from "../../../components/reusableComponents/layout/Layout";
import {
  useDeleteArticleMutation,
  useGetArticlesQuery,
} from "../../../slices/APISlice";
import { H1 } from "../../../components/styledComponents/Text";
import {
  InlineContainer,
  Main,
  BlockContainer,
} from "../../../components/styledComponents/Container";
import { Article } from "../../../types/apiReturnTypes";
import { LoadingWrapper } from "../../../components/reusableComponents/loadingWrapper/LoadingWrapper";

const MyArticlesListPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetArticlesQuery();
  const [deleteArticle] = useDeleteArticleMutation();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      ellipsis: true,
      width: 300,
    },
    {
      title: "Perex",
      dataIndex: "perex",
      ellipsis: true,
    },
    {
      title: "Actions",
      width: 100,
      render: (arg: any, article: Article) => (
        <InlineContainer>
          <EditOutlined
            onClick={() =>
              navigate(`/my-articles/${article.articleId}`, { replace: true })
            }
          >
            Edit
          </EditOutlined>
          <DeleteOutlined onClick={() => deleteArticle(article.articleId)}>
            Delete
          </DeleteOutlined>
        </InlineContainer>
      ),
    },
  ];

  return (
    <Layout>
      <LoadingWrapper isLoading={isLoading}>
        <Main>
          <BlockContainer spacing={"medium"}>
            <H1>My articles</H1>
            {data && (
              <Table
                rowKey={"articleId"}
                columns={columns}
                dataSource={data.items}
              />
            )}
          </BlockContainer>
        </Main>
      </LoadingWrapper>
    </Layout>
  );
};

export default MyArticlesListPage;

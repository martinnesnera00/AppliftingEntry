export interface AccessToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface Pagination {
  offset: number;
  limit: number;
  total: number;
}

export interface Article {
  articleId: string;
  title: string;
  perex: string;
  content: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
}

export interface Articles {
  items: Article[];
  pagination: Pagination;
}

export interface ArticleDetail extends Article {
  comments: Comment[];
}

export interface Comment {
  commentId: string;
  author: string;
  content: string;
  createdAt: string;
  score: number;
}

export interface ImageInfo {
  imageId: string;
  name: string;
}

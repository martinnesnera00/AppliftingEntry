export interface UserLogin {
  username: string;
  password: string;
}

export interface NewArticle {
  title: string;
  perex: string;
  content: string;
  imageId: string | null;
}

export interface EditedArticle {
  articleId: string | null;
  title: string;
  perex: string;
  content: string;
  imageId: string | null;
}

export interface NewComment {
  articleId: string | null;
  author: string;
  content: string;
}

export interface EditCommentState {
  articleId: string | undefined;
  commentId: string | undefined;
}

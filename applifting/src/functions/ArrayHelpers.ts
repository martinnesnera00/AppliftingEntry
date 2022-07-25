import { Article } from "../types/apiReturnTypes";

export const sortByDate = (
  array: Array<any> | undefined,
  type: "asc" | "desc"
) => {
  if (!array) return [];
  const newArray = array.slice();

  if (type === "desc")
    return newArray.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return newArray.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
};

export const findOtherArticlesThan = (
  array: Article[] | undefined,
  id: string | undefined,
  limit: number
) => {
  if (!array || !id) return [];

  if (!(limit > 0 && limit <= array.length)) return [];

  const newArray: Array<any> = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].articleId !== id) newArray.push(array[i]);

    if (limit === newArray.length) break;
  }

  return newArray;
};

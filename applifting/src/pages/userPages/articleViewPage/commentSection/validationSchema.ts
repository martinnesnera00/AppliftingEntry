import * as Yup from "yup";

export interface FormValues {
  author: string;
  content: string;
}

export const commentSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  author: Yup.string().required(),
  content: Yup.string().required(),
});

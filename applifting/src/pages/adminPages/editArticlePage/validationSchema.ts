import * as Yup from "yup";

export interface FormValues {
  title: string;
  content: string;
  perex: string;
}

export const articleSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  title: Yup.string().required(),
  perex: Yup.string().required(),
  content: Yup.string().required(),
});

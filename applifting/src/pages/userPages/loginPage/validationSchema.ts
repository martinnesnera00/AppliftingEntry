import * as Yup from "yup";

export interface FormValues {
  username: string;
  password: string;
}

export const loginSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

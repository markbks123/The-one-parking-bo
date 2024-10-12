import { FormikProps } from "formik";

export interface LoginFormKeysProps {
    username: string;
    password: string;
  }

  
  export interface LoginFormProps extends FormikProps<LoginFormKeysProps> {
    check:string
  }
  
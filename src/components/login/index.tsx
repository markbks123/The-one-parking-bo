import { Formik, FormikProps } from "formik";
import styles from "./login.module.css";
import { initialValues } from "./login.utils";
import { validationSchema } from "./login.validation";
import { LoginFormKeysProps } from "./login.types";
import LoginFrom from "./login.from";
import { useLoginPage } from "./login.hook";
const LoginPageContainer: React.FC = () => {
  const { handleSubmit } = useLoginPage();

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<LoginFormKeysProps>) => {
          return <LoginFrom {...props} />;
        }}
      </Formik>
    </div>
  );
};

export default LoginPageContainer;

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
      <div className={styles.wrap}>
        <h1>Login</h1>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<LoginFormKeysProps>) => {
            return <LoginFrom check={"s"} {...props} />;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPageContainer;

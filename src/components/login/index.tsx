import { Formik, FormikProps } from "formik";
import styles from "./login.module.css";
import { initialValues } from "./login.utils";
import { validationSchema } from "./login.validation";
import { LoginFormKeysProps } from "./login.types";
import LoginFrom from "./login.from";
import { useLoginPage } from "./login.hook";
const LoginPageContainer: React.FC = () => {
  const {} = useLoginPage();

  return (
    <div className={styles.container}>
      <h1>เข้าสู่ระบบ</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {(props: FormikProps<LoginFormKeysProps>) => {
          return <LoginFrom {...props} />;
        }}
      </Formik>
    </div>
  );
};

export default LoginPageContainer;

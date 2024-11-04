import { Formik, FormikProps } from "formik";
import styles from "./login.module.css";
import { initialValues } from "./login.utils";
import { validationSchema } from "./login.validation";
import { LoginFormKeysProps } from "./login.types";
import LoginFrom from "./login.from";
import { useLoginPage } from "./login.hook";
import Image from "next/image";
import LoadingScreen from "../loadingScreen/loading";
const LoginPageContainer: React.FC = () => {
  const { handleSubmit, loading } = useLoginPage();

  return (
    <div className={styles.container}>
      <Image src={"/images/logo_one.png"} width={150} height={150} alt={""} />

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
      {loading && <LoadingScreen />}
    </div>
  );
};

export default LoginPageContainer;

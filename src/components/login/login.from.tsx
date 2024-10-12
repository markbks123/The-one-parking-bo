import { Form } from "formik";
import { LoginFormProps } from "./login.types";
import Input from "../share/input/input";
import PasswordInput from "../share/input/passwordInput";
import styles from "./login.from.module.css";

const LoginForm = ({ values, errors, dirty, handleSubmit }: LoginFormProps) => {
  return (
    <Form className={styles.container}>
      <section>
        <Input
          label="username"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          iconName="loginUser"
          // className={styles.input}
          required
        />
        <PasswordInput
          label="password"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          iconName={"loginLock"}
          // className={styles.input}
          required
        />
        <button className="primary" type="submit">
          เข้าสู่ระบบ
        </button>
      </section>
    </Form>
  );
};

export default LoginForm;

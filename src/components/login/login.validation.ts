import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("user ไม่ถูกต้อง"),
  password: Yup.string().required("รหัสผ่านไม่ถูกต้อง"),
});

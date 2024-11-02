import * as Yup from "yup";

  export const validationSchema = Yup.object().shape({
    name: Yup.string().required("ชื่อแพ็คเกจห้ามว่าง"),
    days: Yup.string().required("จำนวนวันห้ามว่าง"),
    amount: Yup.string().required("ราคาห้ามว่าง"),
    startAt: Yup.date().required("เริ่มวันที่ห้ามว่าง"),
    expiredAt: Yup.date()
      .required("สิ้นสุดวันที่ห้ามว่าง")
      .min(Yup.ref("startAt"), "วันสิ้นสุดต้องไม่เป็นวันก่อนวันเริ่มต้น"),
  });
  
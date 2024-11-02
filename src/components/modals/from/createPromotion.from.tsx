import { Form } from "formik";
import {
  CreatePromotionFormKeysProps,
  CreatePromotionFormProps,
} from "./createPromotion.from.types";
import Input from "@/components/share/input/input";
import styles from "./createPromotion.from.module.css";
import DatePicker from "antd/es/date-picker";
import moment from "moment";
const CreatPromotionFrom = ({
  values,
  errors,
  dirty,
  setFieldValue,
  touched,
  closeModal,
  edit,
}: CreatePromotionFormProps) => {
  return (
    <Form className={styles.container}>
      {edit ? <h1>แก้ไขแพ็คเกจ</h1> : <h1>สร้างแพ็คเกจ</h1>}
      <section>
        <Input
          label="ชื่อแพ็คแก็จ"
          type="text"
          id="name"
          name="name"
          placeholder="ชื่อแพ็คแก็จ"
          className={styles.inputstyle}
        />

        <Input
          label="จำนวนวัน"
          type="number"
          id="days"
          name="days"
          placeholder="จำนวนวัน"
          className={styles.inputstyle}
         
        />
        <Input
          label="ราคา"
          type="number"
          id="amount"
          name="amount"
          placeholder="ราคา"
          className={styles.inputstyle}
       
        />
        <div className={styles.date_picker}>
          <label>เริ่มวันที่</label>
          <DatePicker
            value={values.startAt ? moment(values.startAt) : null}
            onChange={(date) =>
              setFieldValue("startAt", date ? date.toISOString() : null)
            }
            style={{ width: "100%" }}
          />
          {errors.startAt && touched.startAt ? (
            <div style={{ color: "red" }}>{errors.startAt}</div>
          ) : null}
        </div>
        <div className={styles.date_picker}>
          <label>สิ้นสุดวันที่</label>
          <DatePicker
            value={values.expiredAt ? moment(values.expiredAt) : null}
            onChange={(date) =>
              setFieldValue("expiredAt", date ? date.toISOString() : null)
            }
            style={{ width: "100%" }}
          />
          {errors.expiredAt && touched.expiredAt ? (
            <div style={{ color: "red" }}>{errors.expiredAt}</div>
          ) : null}
        </div>

        <div className={styles.button_div}>
          <button className={styles.buttonSubmit} type="submit">
            ตกลง
          </button>
          <button
            className={styles.buttonClose}
            type="button"
            onClick={closeModal}
          >
            ยกเลิก
          </button>
        </div>
      </section>
    </Form>
  );
};

export default CreatPromotionFrom;

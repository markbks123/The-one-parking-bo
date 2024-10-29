import { useField } from "formik";
import { CustomSelectProps } from "./customSelect.types";
import { FC } from "react";
import cx from "classnames";
import styles from "./customSelect.module.css";
import { Select } from "antd";

const CustomsSelect: FC<CustomSelectProps> = ({
  label = "",
  name = "",
  placeholder = "",
  size = "middle",
  className = "",
  required = false,
  disabled = false,
  options = [],
  onChange = () => {},
}) => {
  const [field, meta, helpers] = useField(name);
  const { onBlur } = field;
  const { value, error, touched } = meta;
  const { setValue } = helpers;

  const handleChange = (val: string | string[]) => {
    setValue(val);
    onChange(val);
  };

  return (
    <div className={cx(styles.container, className)}>
      {label && (
        <label className={cx("label", styles.label)} htmlFor={name}>
          {label}
          {required && <span className="error">*</span>}
        </label>
      )}
      <Select
        showSearch
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        id={name}
        className={styles.input}
        placeholder={placeholder}
        value={value || undefined}
        onChange={handleChange}
        onBlur={onBlur}
        data-state={touched && error ? "error" : ""}
        status={touched && error ? "error" : ""}
        disabled={disabled}
        size={size}
        options={options}
      />
      {meta.touched && meta.error && (
        <small className={styles.error}>{meta.error}</small>
      )}
    </div>
  );
};

export default CustomsSelect;

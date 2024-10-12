import { useField } from "formik";
import { InputProps } from "./input.types";
import styles from "./input.module.css";
import SvgIcon from "../svgIcon/svgIcon";
import cx from "classnames";


const Input = <T,>({
  name,
  className = "",
  label,
  required = false,
  iconName,
  customLabel,
  originalData,
  maxLength,
  ...props
}: InputProps<T>) => {
  const [field, meta] = useField(name);

  return (
    <div className={cx(styles.container, className)}>
      {iconName && (
        <div className={styles.icon}>
          <SvgIcon icon={iconName} width={24} height={24} />
        </div>
      )}
      {customLabel ? (
        customLabel
      ) : label ? (
        <label htmlFor={props.id || name}>
          {label} {required && <span>*</span>}
        </label>
      ) : null}
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.error : ""}
        autoComplete={props.autoComplete || "off"}
        maxLength={maxLength}
      />
      
      {meta.touched && meta.error && (
        <small className={styles.error}>{meta.error}</small>
      )}
    </div>
  );
};

export default Input;

import { InputProps } from "./input.types";
import styles from "./input.module.css";
import SvgIcon from "../svgIcon/svgIcon";
import cx from "classnames";
import { usePasswordInput } from "./passwordInput.hooks";

const PasswordInput = <T,>({
  name,
  className,
  label,
  required = false,
  iconName,
  ...props
}: InputProps<T>) => {
  const { handleClickHide, handleOnChange, isHide, meta, field } =
    usePasswordInput({
      name,
    });

  return (
    <div className={cx(styles.container, className)}>
      {iconName && (
        <div className={styles.password} onClick={handleClickHide}>
          <SvgIcon
            icon={
              iconName === "forgotPass" && isHide
                ? "forgotPass"
                : iconName === "forgotPass"
                ? "forgotClosePass"
                : iconName
            }
            width={24}
            height={24}
          />
        </div>
      )}
      {label && (
        <label htmlFor={props.id || name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        {...field}
        {...props}
        type={isHide ? "password" : "text"}
        className={meta.touched && meta.error ? styles.error : ""}
        onChange={handleOnChange}
      />
      {meta.touched && meta.error && (
        <small className={styles.error}>{meta.error}</small>
      )}
    </div>
  );
};

export default PasswordInput;

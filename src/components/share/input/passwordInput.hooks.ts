import { useState } from "react";
import { useField } from "formik";
import { UsePasswordInputProps } from "./input.types";

export const usePasswordInput = ({ name }: UsePasswordInputProps) => {
  const [field, meta] = useField(name);
  const [isHide, setIsHide] = useState<boolean>(true);

  const handleClickHide = () => {
    setIsHide(!isHide);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();
    const noSpaces = trimmedValue.replace(/\s/g, "");
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        name: field.name,
        value: noSpaces,
      },
    };
    field.onChange(newEvent);
  };

  return { handleClickHide, handleOnChange, isHide, meta, field };
};

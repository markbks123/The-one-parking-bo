import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    required?: boolean;
    className?: string;
    iconName?: string;
    customLabel?: ReactNode;
    decimalScale?: number;
    originalData?: T;
    allowMinus?: boolean;
  }

  export interface UsePasswordInputProps {
    name: string;
  }
  
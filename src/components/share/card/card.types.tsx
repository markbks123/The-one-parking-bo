import { ReactNode } from "react";

export interface CardProps {
  id: number;
  title: string;
  total: string;
  icons: ReactNode;
}
export interface itemCardProps {
  className: string;
  item: CardProps;
}

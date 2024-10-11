import { ReactNode } from "react";

export interface CardProps {
  id: number;
  title: string;
  total: number;
  icons: ReactNode;
  change: number;
}
export interface itemCardProps {
  className: string;
  item: CardProps;
}

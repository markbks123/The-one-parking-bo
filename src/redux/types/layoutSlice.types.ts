export interface LayoutState {
  header: boolean;
  main: boolean;
  footer: boolean;
  sidebar:boolean;
  notificationAntd: SetNotificationState | null;
}

export interface SetLayoutState {
  header: boolean;
  main: boolean;
  footer: boolean;
  sidebar:boolean;
}

export interface SetNotificationState {
  message: string;
  description: string;
  duration: number;
  type: "NORMAL" | "SUCCESS" | "ERROR" | "INFO" | "WARNING";
}

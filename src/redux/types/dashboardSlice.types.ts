export interface DashBoardState {
  error: string | null;
  loading: boolean;
  income: number;
  car_amount: number;
  graph:GraphResponse| null;
}

export interface IncomeRequest {
  month: number;
}

export interface IncomeResponse {
  income: number;
}

export interface GraphResponse {
  Jan: number;
  Feb: number;
  Mar: number;
  Apr: number;
  May: number;
  Jun: number;
  Jul: number;
  Aug: number;
  Sep: number;
  Oct: number;
  Nov: number;
  Dec: number;
}


export interface GraphRequest {
    year:string;
}
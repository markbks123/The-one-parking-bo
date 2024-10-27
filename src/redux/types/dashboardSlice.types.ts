export interface DashBoardState {
  error: string | null;
  loading: boolean;
  income: number;
  carAmount: number;
  graph:GraphResponse;
}

export interface IncomeRequest {
  month: number;
}

export interface IncomeResponse {
  income: number;
}

export interface GraphResponse {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
}


export interface GraphRequest {
    year:string;
}


export  interface CarResponse {
   carAmount: number
}
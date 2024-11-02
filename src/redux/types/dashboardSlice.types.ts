export interface DashBoardState {
  error: string | null;
  loading: boolean;
  income: number;
  carAmount: number;
  graph:GraphResponse;
  graphCar:GraphResponse  ;
  graphPeaktime:GraphPeaktimeResponse;
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

export interface GraphPeaktimeResponse {
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;
  "18": string;
  "19": string;
  "20": string;
  "21": string;
  "22": string;
  "23": string;
  "24": string;
  "00": string;
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
  "06": string;
  "07": string;
  "08": string;
  "09": string;
}
export interface GraphRequest {
    year:string;
}


export  interface CarResponse {
   carAmount: number
}
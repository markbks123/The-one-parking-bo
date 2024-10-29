import { DashBoardState } from "@/redux/types/dashboardSlice.types";


export const initialState:DashBoardState= {
    error: null,
    loading: false,
    income: 0,
    car_amount: 0,
    graph: null
}
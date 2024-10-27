import { GraphResponse } from "@/redux/types/dashboardSlice.types";


export interface GraphContainerProps {
 graph: GraphResponse;
 year: number; // Selected year
  handleYearChange: (year: number) => void; // Function to handle year change
}

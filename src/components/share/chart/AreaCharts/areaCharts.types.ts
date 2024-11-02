import { GraphPeaktimeResponse, GraphResponse } from "@/redux/types/dashboardSlice.types";


export interface GraphContainerProps {
 graph: GraphResponse;
 year: number; // Selected year
  handleYearChange: (year: number) => void; // Function to handle year change
}
export interface GraphCarContainerProps {
 graph:  GraphResponse;
 year: number; // Selected year
  handleYearChange: (year: number) => void; // Function to handle year change
}


export interface GraphTimeContainerProps {
 graph:  GraphPeaktimeResponse;
 year: number; // Selected year
  handleYearChange: (year: number) => void; // Function to handle year change
}

import React from "react";
import { ApexOptions } from "apexcharts";
import styles from "./areaCharts.module.css";
import dynamic from "next/dynamic";
import { GraphContainerProps } from "./areaCharts.types";
import YearSelector from "../../yearSelect/yearSelect";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// #008FFB
const AreaChart = ({ graph, year, handleYearChange }: GraphContainerProps) => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      stacked: false,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#00E396"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      shared: true,
      intersect: false,
     
    },
    title: {
      text: "รายได้",
      align: "left",
      style: {
        fontSize: "24px",
      },
    },
  };

  // Safely access graph properties or provide default values
  const incomeData = [
    graph.jan,
    graph.feb,
    graph.mar,
    graph.apr,
    graph.may,
    graph.jun,
    graph.jul,
    graph.aug,
    graph.sep,
    graph.oct,
    graph.nov,
    graph.dec,
  ];

  const series = [
    {
      name: "Income",
      data: incomeData,
    },
  ];
  console.log(graph, "incomeData");
  return (
    <div className={styles.container}>
      <YearSelector year={year} handleYearChange={handleYearChange} />
      {graph && (
        <Chart options={options} series={series} type="area" height={500} />
      )}
    </div>
  );
};

export default AreaChart;

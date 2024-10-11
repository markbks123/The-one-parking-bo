import React from "react";
import Chart from "react-apexcharts";

import { ApexOptions } from "apexcharts";
import styles from "./areaCharts.module.css";
const AreaChart: React.FC = () => {
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
    colors: ["#008FFB", "#00E396"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    title: {
      text: "",
      align: "left",
    },
  };

  const series = [
    {
      name: "Car",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "Income",
      data: [20, 30, 25, 40, 45, 50, 60],
    },
  ];

  return (
    <div className={styles.container}>
      <Chart options={options} series={series} type="area" height={500} />
    </div>
  );
};

export default AreaChart;

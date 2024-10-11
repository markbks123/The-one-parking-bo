// components/DonutChart.tsx

import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styles from "./donutCharts.module.css";
const DonutChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    colors: ["#FF4560", "#00E396", "#008FFB", "#775DD0"],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
  };

  const series = [44, 55, 41, 37];

  return (
    <div className={styles.container}>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;

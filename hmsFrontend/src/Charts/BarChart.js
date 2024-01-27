import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Occupied", "Vacant"],
  ["Jan", 1000, 400],
  ["Mar", 1170, 460],
  ["May", 660, 1120],
  ["Jul", 1030, 540],
  ["Sep", 1170, 460],
  ["Nov", 660, 120],
  //["2017", 1030, 540],
];

export const options = {
  chart: {
    title: "Room's Vacancy ",
    titleTextStyle: {
      fontSize: 18,
      bold: true,
    },
    colors:["#2b98d5","#51421"],
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
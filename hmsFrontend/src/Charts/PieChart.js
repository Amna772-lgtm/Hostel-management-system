import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Available", 65],
  ["Shortage", 35], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  is3D: false,
  colors:["#2b98d5","#e51421"],
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
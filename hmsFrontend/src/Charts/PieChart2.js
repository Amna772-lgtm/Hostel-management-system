import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Available", 65],
  ["Shortage", 35], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  is3D: true,
  colors:["rgb(231, 181, 63)","rgb(152, 19, 152)"],
};

export default function PieChart2() {
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
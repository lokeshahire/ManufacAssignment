import React from "react";
import ReactECharts from "echarts-for-react";
import wineData from "./wineData.json";
export const LineChart: React.FC = () => {
  const options = {
    xAxis: {
      name: "Flavanoids",
    },
    yAxis: {
      name: "Ash",
    },
    series: [
      {
        type: "line",
        data: wineData.map((d: any) => [d.Flavanoids, d.Ash]),
      },
    ],
  };

  return <ReactECharts option={options} />;
};

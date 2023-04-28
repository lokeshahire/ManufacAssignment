import React from "react";
import ReactECharts from "echarts-for-react";
import wineData from "./wineData.json";

interface ChartProps {
  option: any;
}

const Chart: React.FC<ChartProps> = ({ option }) => {
  return (
    <ReactECharts
      option={option}
      style={{ height: "100%", width: "100%", minHeight: 300, minWidth: 300 }}
    />
  );
};

export const LineChart: React.FC = () => {
  const option = {
    grid: { top: 30, right: 80, bottom: 24, left: 36 },
    xAxis: {
      name: "Flavanoids",
      type: "category",
      data: wineData.map((e) => e.Flavanoids),
    },
    yAxis: {
      name: "Ash",
      type: "value",
      data: wineData.map((e) => e.Ash),
    },
    series: [
      {
        data: wineData.map((e) => e.Ash),
        type: "line",
      },
    ],
  };

  return <ReactECharts option={option} />;
};

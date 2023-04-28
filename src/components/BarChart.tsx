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

export const BarChart: React.FC = () => {
  const alcoholCategories = Array.from(
    new Set(wineData.map((e: any) => e.Alcohol))
  );
  const minMagnesiumValues = alcoholCategories.map((alcohol: string) => {
    const alcoholData = wineData.filter((e: any) => e.Alcohol === alcohol);
    const magnesiumValues = alcoholData.map((e: any) => e.Magnesium);
    return Math.min(...magnesiumValues);
  });

  const option = {
    grid: { top: 30, right: 60, bottom: 24, left: 36 },

    xAxis: {
      type: "category",
      data: alcoholCategories,
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Magnesium",
    },
    series: [
      {
        type: "bar",
        data: minMagnesiumValues,
      },
    ],
  };

  return <ReactECharts option={option} />;
};

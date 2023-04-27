import React from "react";
import ReactECharts from "echarts-for-react";
import wineData from "./wineData.json";

export const BarChart: React.FC = () => {
  const alcoholCategories = Array.from(
    new Set(wineData.map((d: any) => d.Alcohol))
  );
  const minMagnesiumValues = alcoholCategories.map((alcohol: string) => {
    const alcoholData = wineData.filter((d: any) => d.Alcohol === alcohol);
    const magnesiumValues = alcoholData.map((d: any) => d.Magnesium);
    return Math.min(...magnesiumValues);
  });

  const options = {
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

  return <ReactECharts option={options} />;
};

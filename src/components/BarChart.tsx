import React from "react";
import ReactECharts from "echarts-for-react";
import wineData from "./wineData.json";
import "./Chart.css";
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
  const alcoholData = Array.from(new Set(wineData.map((e: any) => e.Alcohol)));
  const minMagValues = alcoholData.map((alcohol: string) => {
    const data = wineData.filter((e: any) => e.Alcohol === alcohol);
    const magValues = data.map((e: any) => e.Magnesium);
    return Math.min(...magValues);
  });

  const option = {
    grid: { top: 30, right: 60, bottom: 24, left: 36 },

    xAxis: {
      type: "category",
      data: alcoholData,
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Magnesium",
    },
    series: [
      {
        type: "bar",
        data: minMagValues,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Chart option={option} />
    </div>
  );
};

import Chart, { ChartTypeRegistry } from "chart.js/auto";
import { useEffect, useRef } from "react";

export interface ChartDataProps {
  type: keyof ChartTypeRegistry;
  labels: string[];
  data: any;
}

export function ChartData({ type, labels, data }: ChartDataProps) {
  const chartContainer: any = useRef(null);

  useEffect(() => {
    const container = chartContainer.current;
    const newCanva = document.createElement("canvas");
    newCanva.setAttribute("width", "100%");

    new Chart(newCanva, {
      type,
      data: {
        labels,
        datasets: [{ data, backgroundColor: "#c73c55" }],
      },
      options: {
        plugins: {
          legend: { display: false },
        },
      },
    });

    container.append(newCanva);

    return () => container.removeChild(container.children[0]);
  }, [data, labels, type]);

  return <div className="block h-full" ref={chartContainer}></div>;
}

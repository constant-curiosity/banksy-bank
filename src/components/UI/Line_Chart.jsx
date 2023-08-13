import { LineChart } from "@tremor/react";
//This is the overall LineChart component.
// You will have to make your custom Formatter
//This is for the Y-Axis of the chart.
//https://www.tremor.so/

export default function Line_Chart({
  data,
  index,
  colors,
  valueFormatter,
  categories,
  yAxisWidth,
  className,
  minValue,
  maxValue,
}) {
  return (
    <LineChart
      data={data}
      index={index}
      categories={categories}
      colors={colors}
      valueFormatter={valueFormatter}
      yAxisWidth={yAxisWidth}
      className={className}
      minValue={minValue}
    />
  );
}

export function valueFormatter(number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

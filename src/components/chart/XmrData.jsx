import { Card, Text, Metric, Flex, LineChart } from "@tremor/react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function XmxData({ sales, dataFormatter }) {
  console.log(sales);
  return (
    <Card>
      <Text>XMR Data</Text>
      <Flex>
        <Metric>24hr Prices</Metric>
        <BeakerIcon className="h-6 w-6 text-blue-500" />
      </Flex>
      <LineChart
        className="mt-6"
        data={sales}
        index="year"
        categories={["Export Growth Rate", "Import Growth Rate"]}
        colors={["emerald", "gray"]}
        // valueFormatter={dataFormatter}
        // yAxisWidth={40}
      />
    </Card>
  );
}

// className="mt-6"//
// data={chartdata}//
// index="year"//
// categories={["Export Growth Rate", "Import Growth Rate"]}//
// colors={["emerald", "gray"]}
// valueFormatter={dataFormatter}
// yAxisWidth={40}

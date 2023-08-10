import { useLoaderData, json } from "react-router-dom";
import { Helmet } from "react-helmet";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };
// export const options = {
//   responsive: true,
//   maintainAspectRatio: false, // Set this to false to allow custom aspect ratio
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: false,
//       text: "Chart.js Line Chart",
//     },
//   },
//   scales: {
//     y: {
//       beginAtZero: true,
//       // Specify the desired height of the chart in pixels
//       // Adjust this value as needed
//       height: 400,
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "",
//       // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

//Use loader data

export default function Crypto() {
  const sparkLine = useLoaderData();

  console.log(sparkLine, "Data Here");
  // const sparkLine = cryptoData.data.coin.sparkline;
  // const links = cryptoData.data.coin.links;

  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="border-2 border-gray-500 my-4 mx-4 relative h-[40rem] w-full overflow-hidden rounded-3xl sm:px-12 lg:max-w-[60rem] ">
          {/* <div className="border-2 border-gray-500"> */}
          {/* <Line options={options} data={data} /> */}{" "}
          {/* Add padding here */}
          {/* <Line options={options} data={data} /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export async function loader() {
  const xmr = "3mVx2FX_iJFp5";
  const options = {
    headers: {
      "x-access-token": "coinrankingc159eec14135dda16db1fdd3976ef9",
    },
  };
  const res = await fetch(
    `https://api.coinranking.com/v2/coin/${xmr}`,
    options
  );
  if (!res.ok) {
    json({ message: "Failed ", status: res.status });
  }
  const data = await res.json();
  const sparkLine = data.data.coin.sparkline;
  return sparkLine;

  // const data = await res.json();
  // const sparkLine = data.data.coin.sparkline;
  // return sparkLine;
}

// const data = await res.json();

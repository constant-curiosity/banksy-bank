import { useLoaderData, json } from "react-router-dom";
import { Helmet } from "react-helmet";
import XmrData from "../components/chart/XmrData";

// const sales = [
//   {
//     Time: "0",
//     Sales: 1000,
//   },
//   {
//     Time: "1",
//     Sales: 4000,
//   },
//   {
//     Time: "2",
//     Sales: 50000,
//   },
//   {
//     Time: "3",
//     Sales: 9000,
//   },
//   {
//     Time: "4",
//     Sales: 1000,
//   },
//   {
//     Time: "5",
//     Sales: 4000,
//   },
//   {
//     Time: "6",
//     Sales: 50000,
//   },
//   {
//     Time: "7",
//     Sales: 9000,
//   },
//   {
//     Time: "8",
//     Sales: 1000,
//   },
//   {
//     Time: "9",
//     Sales: 4000,
//   },
//   {
//     Time: "10",
//     Sales: 50000,
//   },
//   {
//     Time: "11",
//     Sales: 9000,
//   },
//   {
//     Time: "12",
//     Sales: 1000,
//   },
//   {
//     Time: "13",
//     Sales: 4000,
//   },
//   {
//     Time: "14",
//     Sales: 50000,
//   },
//   {
//     Time: "15",
//     Sales: 9000,
//   },
//   {
//     Time: "16",
//     Sales: 1000,
//   },
//   {
//     Time: "17",
//     Sales: 4000,
//   },
//   {
//     Time: "18",
//     Sales: 50000,
//   },
//   {
//     Time: "19",
//     Sales: 9000,
//   },
//   {
//     Time: "20",
//     Sales: 1000,
//   },
//   {
//     Time: "21",
//     Sales: 4000,
//   },
//   {
//     Time: "22",
//     Sales: 50000,
//   },
//   {
//     Time: "23",
//     Sales: 9000,
//   },
// ];
const sales = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
];

// const dataFormatter = (number) =>
//   `${Intl.NumberFormat("us").format(number).toString()}%`;

export default function Crypto() {
  const data = useLoaderData();
  const dayXMRValue = data.data.coin.sparkline;
  // console.log(dayXMRValue);
  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="border-2 border-gray-500 my-4 mx-4 relative h-[40rem] w-full overflow-hidden rounded-3xl sm:px-12 lg:max-w-[60rem] ">
          {/* <XmxData data={dayXMRValue} /> */}
          <XmrData sales={sales} />
          {/* dataFormatter={dataFormatter} */}
        </div>
      </div>
    </>
  );
}

export async function loader() {
  const xmr = "3mVx2FX_iJFp5";
  const options = {
    headers: {
      "x-access-token": import.meta.env.VITE_CRYPTO_API_KEY,
    },
  };
  const res = await fetch(
    `https://api.coinranking.com/v2/coin/${xmr}`,
    options
  );
  if (!res.ok) {
    throw json(
      { message: "Could not load crypto data." },
      { status: res.status }
    );
  } else {
    return res;
  }
}

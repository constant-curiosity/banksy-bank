import { Helmet } from "react-helmet";
import { useLoaderData, json } from "react-router-dom";
import { Card, Text, Metric, Flex } from "@tremor/react";
import Line_Chart, { valueFormatter } from "../components/UI/Line_Chart";
import CryptoLinks from "../components/Crypto/CryptoLinks";
import Image from "../components/UI/Image";

const utcArr = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00 UTC",
];

export default function Crypto() {
  const data = useLoaderData();
  console.log(data);
  const iconUrl = data.data.coin.iconUrl;
  const moneroLinks = data.data.coin.links;
  const Hr24XmrValue = data.data.coin.sparkline;
  const cryptoPrice = utcArr.map((time, i) => {
    return {
      time,
      price: Hr24XmrValue[i],
    };
  });

  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="border-2 border-gray-500 my-4 mx-4 relative h-[40rem] w-full overflow-hidden rounded-3xl sm:px-12 lg:max-w-[60rem] ">
          <Card className="mt-10">
            <Text>Monero XMR</Text>
            <Flex>
              <Metric>Daily</Metric>

              <Image className={"h-6 w-6"} src={iconUrl} alt={"Monero Icon"} />
            </Flex>
            <Line_Chart
              data={cryptoPrice}
              index={"time"}
              categories={["price"]}
              colors={["orange"]}
              valueFormatter={valueFormatter}
              yAxisWidth={50}
              className={"mt-6"}
              minValue={155}
            />
          </Card>
          <Card className="mt-5">
            <Text>Links:</Text>
            <Flex className="flex flex-wrap">
              {moneroLinks.map((link) => (
                <CryptoLinks
                  key={link.name}
                  name={link.name}
                  link={link.url}
                  target={"_blank"}
                  className={"mt-2 pr-4"}
                  color={["orange"]}
                />
              ))}
            </Flex>
          </Card>
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

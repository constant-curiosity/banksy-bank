import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

//Use loader data

export default function Crypto() {
  const cryptoData = useLoaderData();
  const sparkLine = cryptoData.data.coin.sparkline;
  const links = cryptoData.data.coin.links;
  console.log(sparkLine);
  console.log(links);

  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      {/* <h1>{sparkLine}</h1> */}
    </>
  );
}

export async function loader() {
  const xmr = "3mVx2FX_iJFp5";
  const options = {
    headers: {
      "x-access-token":
        "coinrankingc159eec14135dda16db18dab77de6799801841fdd3976ef9",
    },
  };
  const res = await fetch(
    `https://api.coinranking.com/v2/coin/${xmr}`,
    options
  );
  const data = await res.json();
  return data;
}

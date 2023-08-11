import { useLoaderData, json } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Crypto() {
  const data = useLoaderData();
  console.log(data.data.coin.sparkline);
  const env = JSON.stringify(import.meta.env.VITE_CRYPTO_API_KEY);
  console.log(env);

  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="border-2 border-gray-500 my-4 mx-4 relative h-[40rem] w-full overflow-hidden rounded-3xl sm:px-12 lg:max-w-[60rem] ">
          //This is where the chart will render
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

// const data = await res.json();
// const sparkLine = data.data.coin.sparkline;
// return sparkLine;
// const data = await res.json();

import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

//Use loader data

export default function Crypto() {
  // const cryptoData = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <h1>Crypto</h1>
    </>
  );
}

// export async function loader() {
// const res = await fetch(
//   "http://api.coinlayer.com/api/2023-08-05?access_key=832ffcc765bceedb3bb939f68d73c1d3&symbols=XMR"
// );
// const data = await res.json();
// console.log(data);
// console.log("Loading Crypto page data...");
// return data;
// }

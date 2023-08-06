import { Helmet } from "react-helmet";

export default function Crypto() {
  return (
    <>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <h1>Crypto</h1>
    </>
  );
}

export function loader() {
  console.log("loading...");
}

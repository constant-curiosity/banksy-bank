export default function Home() {
  return (
    <>
      <div>
        <h1>Home Outlet</h1>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";

// import bankLobby from "/home/machine/Banksy_Bank/public/bank_images/bank_Lobby.jpg";
// import blueCard from "/home/machine/Banksy_Bank/public/bank_images/blue_CC.jpg";
// import piggyBank from "/home/machine/Banksy_Bank/public/bank_images/blue_Pig_Bank.jpg";

// const imageArr = [bankLobby, blueCard, piggyBank];

// export default function Home() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((count) => count + 1);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);
//   const image = imageArr[count % imageArr.length];
//   return (
//     <>
//       <div id="banner" className="text-center container-fluid">
//         <img src={image} alt="Bank Images" />
//       </div>
//     </>
//   );
// }

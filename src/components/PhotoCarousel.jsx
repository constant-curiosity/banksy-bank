// import React, { useState, useEffect } from "react";
// import bankLobby from "../images/bank_Lobby.jpg";
// import blueCard from "../images/blue_Card.jpg";
// import piggyBank from "../images/piggyBank.jpg";

// const imageArr = [bankLobby, blueCard, piggyBank];

// export default function PhotoCarousel() {
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

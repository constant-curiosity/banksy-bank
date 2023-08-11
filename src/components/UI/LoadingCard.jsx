import Image from "./Image";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingCard({ children }) {
  return (
    <div
      aria-busy="true"
      className="h-screen flex flex-col justify-center relative"
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Banksy_Art/Girl_With_Baloon.jpg"
        alt="Loading..."
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="flex justify-center items-center absolute inset-0">
        <p className="mr-4 text-lg text-white">{children}</p>
        <LoadingSpinner children={children} />
      </div>
    </div>
  );
}

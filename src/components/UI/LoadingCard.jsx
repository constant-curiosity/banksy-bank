import Image from "./Image";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingCard({ children, image, className }) {
  return (
    <div
      aria-busy="true"
      className="h-screen flex flex-col justify-center relative"
    >
      {image}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="flex justify-center items-center absolute inset-0">
        <p className="mr-4 text-lg text-white">{children}</p>
        <LoadingSpinner children={children} />
      </div>
    </div>
  );
}

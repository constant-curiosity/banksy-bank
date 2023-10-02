import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer/Footer";
import LoadingCard from "../components/UI/LoadingCard";
import Image from "../components/UI/Image";

export default function RootLayout() {
  const loading = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {loading.state === "loading" ? (
          <LoadingCard
            children={"Loading..."}
            image={
              <Image
                src="/Banksy_Art/Girl_With_Baloon.jpg"
                alt="Loading..."
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            }
          />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}

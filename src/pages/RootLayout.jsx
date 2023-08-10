import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer/Footer";
import LoadingCard from "../components/UI/LoadingCard";

export default function RootLayout() {
  const loading = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {loading.state === "loading" ? (
          <LoadingCard children={"Loading..."} />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}

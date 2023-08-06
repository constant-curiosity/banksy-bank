import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

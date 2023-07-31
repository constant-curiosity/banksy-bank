import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

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

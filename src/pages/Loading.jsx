import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer/Footer";
import Image from "../components/UI/Image";
export default function LoadingPage() {
  return (
    <>
      <MainNavigation />
      <div>
        <Image
          src={"/Banksy_Art/Lifestyle_1.jpg"}
          alt={"Page Loading..."}
          className={
            "h-full min-h-screen w-full min-w-screen aspect-w-16 aspect-h-9"
          }
        />
      </div>
      <Footer />
    </>
  );
}

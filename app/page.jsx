import AboutUs from "./components/About-us";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="bg-black relative">
      <Navigation />
      <Header />
      <AboutUs />
    </div>
  );
}

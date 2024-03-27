// Code: Home page
import Articles from "./Articles";
import HeroSection from "./heroSection";
import Choose from "./WhyChoose";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Choose />
      <Articles />
    </div>
  );
}

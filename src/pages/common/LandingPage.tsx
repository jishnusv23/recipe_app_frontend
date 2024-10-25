
import HeroSection from "../../Components/Home/HeroSection";
import Header from "../../Components/common/Header";
import FeedbackSession from "../../Components/Home/FeedbackSession";
import Footer from "../../Components/common/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="pt-6">
          <HeroSection />      
          <FeedbackSession />
          <Footer />
      </div>
    </>
  );
};

export default LandingPage;

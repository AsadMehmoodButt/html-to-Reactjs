import Header from "./components/header";
import Banner from "./components/banner";
import OurPartner from "./components/ourPartner";
import About from "./components/about";
import Benefits from "./components/benefits";
import Features from "./components/features";
import PriceSection from "./components/priceSection";
import Accordion from "./components/accordion";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurPartner />
      <About />
      <Benefits />
      <Testimonial/>
      <Features/>
      <PriceSection/>
      <Accordion/>
      <Footer/>

   
    </>
  );
};

export default App;

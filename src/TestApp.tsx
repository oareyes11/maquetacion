import { Advice } from "./components/Advice";
import { Clients } from "./components/Clients";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { WhoWeAre } from "./components/WhoWeAre";
import { Meet } from "./components/Meet";
import { Footer } from "./components/Footer";

export const TestApp = () => {
  return (
    <>
      <Header/>
      <Advice/>
      <WhoWeAre/>
      <Clients />
      <Meet />
      <ContactUs/>
      <Footer />
    </>
  );
};

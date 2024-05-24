import SmoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";

import "../app.css";
import { Team } from "../components/Team";
import JsonData from "../_mock/data.json";
import { About } from "../components/about";
import { Header } from "../components/header";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";
import { Features } from "../components/features";
import { Services } from "../components/services";
// import { Navigation } from "../components/navigation";
import { Testimonials } from "../components/testimonials";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

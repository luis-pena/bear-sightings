import Theme from "../src/Theme";
import Head from "../src/Head";
import Navbar from "../src/Navbar";
import SectionHero from "../src/SectionHero";
import SectionScout from "../src/SectionScout";
import SectionSearch from "../src/SectionSearch";
import SectionResults from "../src/SectionResults";
import SectionRule from "../src/SectionRule";

import Footer from "../src/Footer";

const Index = () => (
  <Theme>
    <Head />
    <Navbar />
    <SectionHero />
    <SectionScout />
    <SectionSearch />
    <SectionRule />
    <SectionResults />
    <Footer />
  </Theme>
);

export default Index;

import Nav from "./components/Nav";

import {
  Hero,
  CustomerReviews,
  PopularProducts,
  Subscribe,
  SuperQuality,
  Services,
  Footer,
} from "./sections";
import SpecialOffer from "./sections/SpecialOffer";

const App = () => {
  return (
    <main className="">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b xl">
        <Hero />
      </section>
      <section className="padding max-container max-sm:mt-12" id="products">
        <PopularProducts />
      </section>
      <section className="padding max-container" id="about-us">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 max-container flex justify-center flex-wrap gap-9 ">
        <Services />
      </section>
      <SpecialOffer/> 
      <CustomerReviews/> 
      <Subscribe/>
        <Footer/>
    </main>
  );
};

export default App;

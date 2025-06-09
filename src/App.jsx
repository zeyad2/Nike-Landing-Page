import Nav from "./components/Nav";

import {
  Hero,
  CustomerReviews,
  PopularProducts,
  subscribe,
  SuperQuality,
  Services,
  Footer,
} from "./sections";

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
      <section className="padding-x py-10 max-container flex justify-center flex-wrap gap-9 "><Services/></section>
      <section className="padding">Offers</section>
      <section className="padding bg-pale-blue"> CustomerReviews </section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="padding bg-black padding-x padding-t pb-8 text-white-400">
        Footer{" "}
      </section>
    </main>
  );
};

export default App;

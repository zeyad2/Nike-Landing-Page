import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">
        Our
        <span className="text-coral-red"> Popular </span>
        Products
      </h2>

      <p className="text-slate-gray lg:max-w-lg mt-2">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="products mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            //replace with {...products}

          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

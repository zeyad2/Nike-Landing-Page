import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="padding max-container flex flex-col justify-center bg-gray-50">
      <div>
        <h3 className="text-4xl font-palanquin font-bold text-center">
          What Our <span className="text-coral-red">Customers </span> Say
        </h3>
        <p className=" info-text max-w-lg text-center justify-center m-auto mt-4">
          hear genuine stories from our satisfied customers about their
          exceptional experience with us.
        </p>
      </div>

      <div className="flex gap-10 justify-evenly mt-10 max-md:flex-col">
        {reviews.map((review) => (
          <div>
            <ReviewCard imgUrl={review.imgURL} {...review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

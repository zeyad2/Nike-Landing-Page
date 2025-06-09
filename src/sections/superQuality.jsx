import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //   <div className="">
    //     <h3 className="capitalize text-3xl font-montserrat font-bold mt-14">
    //       We provide you with{" "}
    //       <span className="text-coral-red">
    //         super <br /> quality{" "}
    //       </span>
    //       shoes
    //     </h3>

    //     <p className=" mt-4 text-slate-gray leading-normal font-montserrat">
    //       Ensuring premium comfort and style, our meticulously crafted footwear
    //       is designed to elevate your experience, providing you with unmatched
    //       quality, innovation, and a touch of elegance.
    //     </p>

    //     <p className="mt-12 mb-10 text-slate-gray font-montserrat">
    //       Our dedication to detail and excellence ensures your satisfaction
    //     </p>

    //     <Button  className="mt-10" label='View details' iconURL={arrowRight}/>
    //   </div>
    //   <div className="">
    //     <img src={shoe8} alt="" />
    //   </div>
    // </div>

    <div className="flex flex-col justify-between items-center lg:flex-row">
      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you with{" "}
          <span className="text-coral-red">
            super <br /> quality{" "}
          </span>
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="lg:max-w-lg mt-6 flex max-md:justify-center">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" />
      </div>
    </div>
  );
};

export default SuperQuality;

import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex max-container px-12 my-[150px] items-center max-xl:flex-col-reverse">
      <div className="w-full mr-10 flex justify-center">
        <img src={offer} width={770} height={687} alt="shoe 30% off" />
      </div>
      <div>
        <h2 className="text-4xl font-bold">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="info-text my-8">
          {" "}
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex max-xl:justify-center mb-12  gap-8">
            <Button label={'Shop Now'} iconURL={arrowRight}/>
            <Button label={'learn more'}
            backgroundColor="bg-white" 
            borderColor="border-slate-gray"
            textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

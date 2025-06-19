import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container padding flex justify-between max-md:flex-col max-md:justify-center"
      id="contact-us"
    >
      <div>
        <h3 className="text-4xl leading-[68px] capitalize font-palanquin font-bold lg:max-w-md  max-md:text-center ">
          Sign up for <span className="text-coral-red"> updates </span> &
          newsletter
        </h3>
      </div>
      <div className="flex w-[55%] max-md:w-full h-16 border border-slate-gray rounded-full px-5 py-2 mt-12">
        <input
          type="text"
          className="input"
          placeholder="subscribe@nike.com"
          id="emailInput"
        />
        <label htmlFor="emailInput"> </label>
        <Button label={"Sign Up"} />
      </div>
    </section>
  );
};

export default Subscribe;

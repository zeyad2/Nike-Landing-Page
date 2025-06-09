const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-3xl px-10 py-16 shadow-xl">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <div>
        <h3 className="mt-6 font-palanquin text-3xl font-bold">{label}</h3>
        <p className="mt-3  text-slate-gray ">{subtext}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

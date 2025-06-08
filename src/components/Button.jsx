const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <img src={iconURL} alt="arrow right icon ml-2 h-5 rounded-full h-5" />
    </button>
  );
};

export default Button;

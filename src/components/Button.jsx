const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red  text-white"
        }
        
        
        `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="" />}
    </button>
  );
};

export default Button;

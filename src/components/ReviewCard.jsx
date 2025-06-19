const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="shadow-3xl p-5 min-h-[350px]">
      <div className="m-auto">
        <img
          src={imgURL}
          className="rounded-full m-auto"
          width={150}
          height={150}
          alt="review image"
        />
      </div>
      <div>
        <h3 className="text-center mt-4 font-palanquin font-semibold text-">{customerName}</h3>
        <p className="m-auto info-text mt-4 px-5 text-center">{feedback}</p>
      </div>
      
    </div>
  );
};

export default ReviewCard;


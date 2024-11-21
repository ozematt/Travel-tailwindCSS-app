import navigation from "../assets/navigation.png";

type DestinationCardProps = {
  imgURL: string;
  place: string;
  price: string;
  days: string;
};

const DestinationCard = ({
  imgURL,
  place,
  price,
  days,
}: DestinationCardProps) => {
  return (
    <div className="shadow-lg rounded-b-2xl transition ease-in-out delay-155 hover:scale-110 max-sm:hover:scale-95 hover:shadow-2xl">
      <div
        key={place}
        className="w-[314px] h-[327px] rounded-t-2xl overflow-hidden"
      >
        <img src={imgURL} alt={place} />
      </div>
      <div className="h-[130px] w-full bg-white bottom-0 rounded-b-2xl font-poppins font-medium text-lg text-text-color">
        <div className="flex justify-between px-8 py-5">
          <p>{place}</p>
          <p>$ {price}k</p>
        </div>
        <div>
          <p className="flex px-8">
            <img src={navigation} alt="navigation arrow" className="pr-2" />{" "}
            {days} Days Trip
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

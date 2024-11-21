type CategoryCartProps = {
  imgURL: string;
  title: string;
  text: string;
};

const CategoryCart = ({ imgURL, title, text }: CategoryCartProps) => {
  return (
    <div className="w-[267px] h-[314px] hover:shadow-customMorph rounded-[40px] flex flex-col  items-center">
      <div className="mt-9">
        <img src={imgURL} alt="icon" />
      </div>
      <h4 className="font-poppins font-medium text-primary text-xl mt-5">
        {title}
      </h4>
      <p className="max-w-[170px] text-base text-center text-text-color mt-3">
        {text}
      </p>
    </div>
  );
};

export default CategoryCart;

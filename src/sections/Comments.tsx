import { testimonials } from "../constants";

const Comments = () => {
  return (
    <section className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[600px] xl:mt-[100px] w-full relative">
      <p className="font-poppins font-semibold text-lg uppercase text-text-color">
        Testimonials
      </p>
      <h2 className="font-volkhov capitalize max-w-[410px] font-bold text-5xl mt-3 leading-[60px]">
        What People Say About Us.
      </h2>
      <div className="mt-[80px] flex flex-wrap justify-center gap-[80px]">
        {testimonials.map((comment) => (
          <div className="relative transition ease-in-out delay-155 hover:scale-110 max-sm:hover:scale-95 hover:shadow-2xl">
            <img
              src={comment.avatar}
              alt="avatar"
              width={70}
              height={70}
              className="rounded-full absolute top-[-40px] left-[-30px]"
            />
            <div className="max-w-[505px] min-h-[224px] shadow-lg rounded-xl ">
              <p className="p-7 font-poppins text-text-color leading-[27px] max-w-[90%]">
                {" "}
                "{comment.comment}"
              </p>
              <p className="pl-7 font-poppins font-semibold text-text-color text-lg">
                {comment.name}
              </p>
              <p className="pl-7 font-poppins text-text-color pb-6">
                {comment.from}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;

import CommentCart from "../components/CommentCart";
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
          <CommentCart key={comment.name} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default Comments;

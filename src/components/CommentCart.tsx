type CommentCartProps = {
  name: string;
  from: string;
  avatar: string;
  comment: string;
};

const CommentCart = ({ name, from, avatar, comment }: CommentCartProps) => {
  return (
    <div className="relative transition ease-in-out delay-155 hover:scale-110 max-sm:hover:scale-95 hover:shadow-2xl">
      <img
        src={avatar}
        alt="avatar"
        width={70}
        height={70}
        className="rounded-full absolute top-[-40px] left-[-30px]"
      />
      <div className="max-w-[505px] min-h-[224px] shadow-lg rounded-xl ">
        <p className="p-7 font-poppins text-text-color leading-[27px] max-w-[90%]">
          {" "}
          "{comment}"
        </p>
        <p className="pl-7 font-poppins font-semibold text-text-color text-lg">
          {name}
        </p>
        <p className="pl-7 font-poppins text-text-color pb-6">{from}</p>
      </div>
    </div>
  );
};

export default CommentCart;

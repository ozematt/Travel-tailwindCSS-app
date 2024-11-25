import Button from "./Button";
import decoration from "../assets/Decore3.png";
import { useId, useState } from "react";
import { z } from "zod";

const usersSchema = z.array(
  z.object({
    id: z.string(),
    user: z.string(),
    password: z.string(),
  })
);
type Users = z.infer<typeof usersSchema>;

const SignUp = () => {
  const id = useId();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const validatedUsers = usersSchema.safeParse(users);
  if (!validatedUsers.success) {
    localStorage.removeItem("users");
    return;
  }
  console.log(validatedUsers.data.map((user) => user.user));

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const users = { id: id, user: userEmail, password: userPassword };
    console.log(users);

    // localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <section className="px-[34px] sm:px-[120px] mt-[80px] w-full">
      <div className="flex flex-col justify-center shadow-customMorph items-start max-w-[800px] min-h-[450px] rounded-xl  max-sm:p-[40px] p-[80px] mx-auto gap-10 relative dark:bg-gray-900 dark:shadow-none">
        {" "}
        <h2 className="font-volkhov font-bold text-5xl my-8 z-10 dark:text-stone-200">
          Make your account:
        </h2>
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-45 scale-50  bottom-[110px] left-[-100px] dark:opacity-50 opacity-20 z-[1]"
        />
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-90 scale-75  top-[7px] right-[-80px] dark:opacity-50 opacity-20 z-[1]"
        />
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-start justify-start gap-5 w-full z-10"
        >
          <input
            type="email"
            placeholder="Your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className=" bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          <input
            type="password"
            placeholder="Your password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />

          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

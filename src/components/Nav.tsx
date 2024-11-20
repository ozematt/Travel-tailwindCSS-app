import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-[115px] max-sm:px-[30px] py-[35px] w-full">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="logo" width={116} height={35} className="" />
        </a>
        <ul className="flex gap-12 font-openSans font-medium text-lg text-black max-xl:hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="hover:ring-1 ring-black rounded-md px-4 py-2"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="hover:ring-1 ring-black rounded-md px-4 py-2">
            <a href="">Login</a>
          </li>
          <li className="hover:ring-1 ring-black rounded-md px-4 py-2">
            <a href="">Sing up</a>
          </li>
        </ul>
        <div className="hidden max-xl:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

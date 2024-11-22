import { useState } from "react";
import logoDark from "../assets/Logo_dark.png";
import logoLight from "../assets/Logo_light.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import { navLinks } from "../constants";
import themeSwitch from "../assets/theme_switch.png";
import { getStoredTheme, saveTheme } from "../lib/storage";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme());

  return (
    <header className="px-[30px] sm:px-[115px] py-[35px] w-full">
      <nav className="flex justify-between items-center relative">
        <a href="/">
          <img
            src={theme === "light" ? logoDark : logoLight}
            alt="logo"
            width={116}
            height={35}
            className=""
          />
        </a>
        <ul className="flex gap-12 font-openSans font-medium text-lg text-text-color dark:text-gray-200 max-xl:hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="rounded-md px-5 py-3 hover:ring-1 ring-gray-400"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <img
          src={themeSwitch}
          alt="theme switch"
          width={40}
          height={40}
          className="drop-shadow-xl hover:scale-110 active:scale-100 max-xl:absolute right-[60px] top-[-12]"
          onClick={() =>
            handleThemeToggle(theme === "light" ? "dark" : "light")
          }
        />

        <div className="hidden max-xl:block">
          <img
            src={openMenu ? close : hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>

        {openMenu && (
          <div className="absolute top-10 right-0 mt-3 bg-white py-4 pr-5 z-20 rounded-xl">
            <ul className="space-y-4 w-[120px] text-right text-lg">
              {navLinks.map((link) => (
                <li key={link.label} className="hover:font-semibold">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

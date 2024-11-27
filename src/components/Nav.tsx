import { useEffect, useState } from "react";
import logoDark from "../assets/Logo_dark.png";
import logoLight from "../assets/Logo_light.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import hamburgerDark from "../assets/hamburger_dark.png";
import closeDark from "../assets/close_dark.png";
import { navLinks } from "../constants";
import themeSwitch from "../assets/theme_switch.png";
import { getStoredTheme, saveTheme } from "../lib/themeUtils";
import Auth from "./Auth";
import LogOut from "./LogOut";

const Nav = () => {
  //
  ////DATA
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme());
  const [userEmail, setUserEmail] = useState<string | null>(null);

  ////LOGIC
  //get logged user
  useEffect(() => {
    //read user email from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserEmail(parsedUser);
    }
  }, []);

  //get theme
  useEffect(() => {
    //read them from local storage
    const localStorageTheme = JSON.parse(
      localStorage.getItem("theme") || "light"
    );
    if (localStorageTheme === "dark") {
      saveTheme("dark"); //add class "dark" to html
    }
  }, []);

  //action on theme switch button
  const handleThemeToggle = (toggledTheme: string) => {
    setTheme(toggledTheme);
    saveTheme(toggledTheme);
  };

  ////UI
  return (
    <header className="px-[30px] sm:px-[115px] py-[35px] w-full max-container">
      <nav className="flex justify-between items-center relative z-10">
        <a href="/">
          <img
            src={theme === "light" ? logoDark : logoLight}
            alt="logo"
            width={116}
            height={35}
            className=""
          />
        </a>
        <ul className="flex gap-12 font-openSans font-medium text-lg text-text-color max-[1295px]:hidden dark:text-white">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="rounded-md px-5 py-3 hover:ring-1 ring-gray-400 dark:hover:ring-white"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          {userEmail ? (
            <>
              <LogOut />
              <p className=" py-3 opacity-50 text-sm leading-7 pl-10">
                Hello, {userEmail}!
              </p>
            </>
          ) : (
            <Auth />
          )}
        </ul>

        <img
          src={themeSwitch}
          alt="theme switch"
          width={50}
          height={50}
          className="drop-shadow-xl hover:scale-110 active:scale-100 max-[1295px]:absolute right-[60px] top-[-12]"
          onClick={() =>
            handleThemeToggle(theme === "light" ? "dark" : "light")
          }
        />

        <div className="hidden  max-[1295px]:block">
          <img
            src={openMenu ? close : hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setOpenMenu(!openMenu)}
            className="dark:hidden"
          />
          <img
            src={openMenu ? closeDark : hamburgerDark}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setOpenMenu(!openMenu)}
            className="hidden dark:block"
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

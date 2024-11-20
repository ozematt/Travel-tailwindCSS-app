import plane from "../assets/Plane.png";
import antene from "../assets/Antene.png";
import gear from "../assets/Gear.png";
import mic from "../assets/Mic.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#destination", label: "Destination" },
  { href: "#bookings", label: "Contact Us" },
  { href: "#login", label: "Login" },
  { href: "#signUp", label: "Sign up" },
] as const;

export const category = [
  {
    imgURL: { antene },
    title: "Calculate Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    imgURL: { plane },
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    imgURL: { mic },
    title: "Local Events",
    text: "Barton vanity itself do in it. Prefer to men it engrossed listening. ",
  },
  {
    imgURL: { gear },
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers",
  },
];

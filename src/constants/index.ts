import plane from "../assets/Plane.png";
import antene from "../assets/Antene.png";
import gear from "../assets/Gear.png";
import mic from "../assets/Mic.png";

import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";

import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";

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
    imgURL: antene,
    title: "Calculate Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    imgURL: plane,
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    imgURL: mic,
    title: "Local Events",
    text: "Barton vanity itself do in it. Prefer to men it engrossed listening. ",
  },
  {
    imgURL: gear,
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers",
  },
] as const;

export const places = [
  {
    imgURL: image1,
    place: "Rome, Italy",
    price: "5,42",
    days: "10",
  },
  {
    imgURL: image2,
    place: "London, UK",
    price: "4,2",
    days: "12",
  },
  {
    imgURL: image3,
    place: "Full Europe",
    price: "15",
    days: "28",
  },
] as const;

export const steps = [
  {
    icon: icon1,
    title: "Choose Destination",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: icon2,
    title: "Make Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: icon3,
    title: "Reach Airport on Selected Date",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
] as const;

export const testimonials = [
  {
    name: "Mike Taylor",
    from: "Lahore, Pakistan",
    avatar: avatar2,
    comment:
      "Friendly staff, seamless booking, and incredible destinations. Every detail was handled perfectly. Highly recommend!",
  },
  {
    name: "Laura Jason",
    from: "London, UK",
    avatar: avatar1,
    comment:
      "I had an amazing experience with this travel agency! Every detail was handled perfectly. Highly recommend for stress-free travel!",
  },
];

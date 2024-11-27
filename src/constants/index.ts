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

import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";

import social1 from "../assets/social1.png";
import social2 from "../assets/social2.png";
import social3 from "../assets/social3.png";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#destination", label: "Destination" },
  { href: "#contact-us", label: "Contact Us" },
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
] as const;

export const companies = [
  { name: "axon", imgURL: company1 },
  { name: "jetstar", imgURL: company2 },
  { name: "expedia", imgURL: company3 },
  { name: "qantas", imgURL: company4 },
  { name: "alitalia", imgURL: company5 },
] as const;

export const footerData = [
  {
    title: "Company",
    items: ["About", "Careers", "Mobile"],
  },
  {
    title: "Contact",
    items: ["Help/FAQ", "Press", "Affilates"],
  },
  {
    title: "More",
    items: ["Airlinefees", "Airline", "Low fare tips"],
  },
] as const;

export const socialIcon = [
  {
    title: "facebook",
    icon: social1,
  },
  {
    title: "instagram",
    icon: social2,
  },
  {
    title: "twitter",
    icon: social3,
  },
] as const;

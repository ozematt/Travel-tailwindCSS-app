import BookTrip from "../sections/BookTrip";
import Comments from "../sections/Comments";
import Companies from "../sections/Companies";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Subscribe from "../sections/Subscribe";
import TopDestination from "../sections/TopDestination";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <main className="max-container relative">
      <Dashboard />
      <Hero />
      <Services />
      <TopDestination />
      <BookTrip />
      <Comments />
      <Companies />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Main;

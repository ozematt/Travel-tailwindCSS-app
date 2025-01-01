import {
  BookTrip,
  Comments,
  Companies,
  Footer,
  Hero,
  Services,
  Subscribe,
  TopDestination,
} from "../sections";

import { Dashboard } from "./";

const Main = () => {
  //
  ////UI
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

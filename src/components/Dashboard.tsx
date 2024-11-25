import { Outlet } from "react-router";
import Nav from "./Nav";

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Dashboard;

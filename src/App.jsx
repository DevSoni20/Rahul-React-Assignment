import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

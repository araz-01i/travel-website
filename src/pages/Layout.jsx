import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Poup from "../components/Popup/Poup";
import { useState } from "react";

function Layout() {
    const [orderPopup, setOrderPopup] = useState(false);
  
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Outlet />
      <Footer />
      <Poup orderPopup={orderPopup} setOrderPoup={setOrderPopup} />
    </>
  );
}

export default Layout;

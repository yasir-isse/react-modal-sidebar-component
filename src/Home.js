import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { toggleSideBar, toggleModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={toggleSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={toggleModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;

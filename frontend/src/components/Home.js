import React from "react";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Home = () => {
  return (
    <>
      <div className="nav-background">
        <div className="headercontainer">
          <MainNav />
          <div className=" banner-outside">
            <div className=" banner">
              <h1>
                Get ready to rock the FIFA World <br />
                Cup Qatar 2022™
              </h1>
              <p> Your journey begins with us </p>
              <Link to="/">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

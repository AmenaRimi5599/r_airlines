import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { RiMapPinTimeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import Book from "./Book";
import MyTrip from "./MyTrip";
import CheckIn from "./CheckIn";
import FlightStatus from "./FlightStatus";

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
      <div className="headercontainer">
        <div className="homecontent2">
          <div className="mainsubnav">
            <div className="row subnav">
              <div className="col-sm-12 col-md-3" id="subnavleft">
                <IoAirplaneOutline size={27} color="white" /> <span>Book</span>
              </div>
              <div className="col-sm-12 col-md-3">
                <FaRegListAlt size={27} color="white" /> <span>My Trip</span>
              </div>
              <div className="col-sm-12 col-md-3">
                <BsCheckCircle size={27} color="white" /> <span>Check In</span>
              </div>
              <div className="col-sm-12 col-md-3" id="subnavright">
                <RiMapPinTimeLine size={27} color="white" />{" "}
                <span>Flight Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

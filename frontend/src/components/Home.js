import React, { useState } from "react";
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
  const [componentData, setComponentData] = useState("Book");
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
              <div
                className="col-sm-12 col-md-3"
                onClick={() => setComponentData("Book")}
              >
                <IoAirplaneOutline size={27} color="white" /> <span>Book</span>
              </div>
              <div
                className="col-sm-12 col-md-3"
                onClick={() => setComponentData("MyTrip")}
              >
                <FaRegListAlt size={27} color="white" /> <span>My Trip</span>
              </div>
              <div
                className="col-sm-12 col-md-3"
                onClick={() => setComponentData("CheckIn")}
              >
                <BsCheckCircle size={27} color="white" /> <span>Check In</span>
              </div>
              <div
                className="col-sm-12 col-md-3"
                onClick={() => setComponentData("FlightStatus")}
              >
                <RiMapPinTimeLine size={27} color="white" />{" "}
                <span>Flight Status</span>
              </div>
            </div>
          </div>
          {componentData === "Book" && <Book />}
          {componentData === "MyTrip" && <MyTrip />}
          {componentData === "CheckIn" && <CheckIn />}
          {componentData === "FlightStatus" && <FlightStatus />}
        </div>
      </div>
    </>
  );
};

export default Home;

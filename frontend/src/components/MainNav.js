import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import img from "../assets/img/logo1.png";

const MainNav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img src={img} alt="logo" className="logoposition" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Explore
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Book
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Experience
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Link to="help">Help</Link>
            <Link to="search">
              <FiSearch size={27} color="white" />
            </Link>
            <Link to="login" className="loginsignupicon">
              <HiOutlineUserCircle size={27} color="white" />
              <label>login | Sign in</label>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default MainNav;

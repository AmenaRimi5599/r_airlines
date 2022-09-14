import React, { useState } from "react";
import Flight from "./Flight";
import Stopover from "./Stopover";

const Book = () => {
  const [bookData, setBookData] = useState("Flight");
  return (
    <>
      <div className="booknav">
        <p>Just From $14</p>
        <div className="booknav2">
          <span onClick={() => setBookData("Flight")}>Flights</span>{" "}
          <label onClick={() => setBookData("Stopover")}>Qatar Stopover</label>
        </div>
      </div>
      {bookData === "Flight" && <Flight />}
      {bookData === "Stopover" && <Stopover />}
    </>
  );
};

export default Book;

import React from "react";

const Flight = () => {
  return (
    <>
      <table>
        <tr>
          <td id="fromtableid">From</td>
          <td id="totableid">To</td>
          <td id="triptableid">Trip</td>
          <td id="departtableid">Depart Return</td>
          <td id="passengertableid">Passenger/Class</td>
        </tr>
      </table>
      <div className="flightfooter">
        <span>+ Add promo code</span>
        <button className="btn btn-warning btn-lg">Show Flights</button>
      </div>
    </>
  );
};

export default Flight;

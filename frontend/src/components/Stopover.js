import React from "react";

function Stopover() {
  return (
    <>
      <label className="labelstopover">
        Explore Qatar during your journey with amazing stopover packages
        starting from USD 14 pp at 4-star and 5-star hotels.{" "}
        <a href="/">Qatar entry rules apply</a>.
      </label>
      <table>
        <tr>
          <td id="fromtableid">From</td>
          <td id="totableid">To</td>
          <td id="triptableid">Trip</td>
          <td id="departtableid">Depart Return</td>
          <td id="passengertableid">Passenger/Class</td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
          <td id="fromtableid2">
            <span>
              When would you like to add a stop in Doha during your journey?
            </span>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-label"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
              />
              <label class="form-check-label" for="inlineRadio1">
                1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-label"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
              />
              <label class="form-check-label" for="inlineRadio2">
                2
              </label>
            </div>
          </td>
          <td id="totableid2">
            <span>How many days would you like to stay in Qatar?</span>
            <br />
            <div>
              <button class="btn btn-white minus"></button>
              <input type="text" />
              <button class="btn btn-white plus"></button>
            </div>
          </td>
        </tr>
      </table>
      <div className="flightfooter">
        <span>+ Add promo code</span>
        <button className="btn btn-warning btn-lg">Show Flights</button>
      </div>
    </>
  );
}

export default Stopover;

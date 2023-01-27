import React, { useState, useEffect } from "react";
//import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./ViewFlight.css";
export default function ViewFlight() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const flightList = async () => {
      await axios
        .get("http://localhost:8080/getAllFlights")
        .then((response) => setFlights(response.data));
    };
    flightList();
    console.log(flights);
  }, []);

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Aeroplane</th>
              <th scope="col">Flight Number</th>
              <th scope="col">Source</th>
              <th scope="col">Destination</th>
              <th scope="col">Departure Date</th>
              <th scope="col">Departure Time</th>
              <th scope="col">Type</th>
              <th scope="col">Arrival Dat</th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Economy Fare</th>
              <th scope="col">Business Fare</th>
              <th scope="col">Economy Seats</th>
              <th scope="col">Business Seats</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => {
              return (
                <tr key={flight.aId}>
                  <th scope="row">{flight.airoplane.aeroplane_id}</th>
                  <td>{flight.flightNumber}</td>
                  <td>{flight.source}</td>
                  <td>{flight.destination}</td>
                  <td>{flight.departureDate}</td>
                  <td>{flight.departureTime}</td>
                  <td>{flight.type}</td>
                  <td>{flight.arrivalDate}</td>
                  <td>{flight.arrivalTime}</td>
                  <td>{flight.economyFare}</td>
                  <td>{flight.businessFare}</td>
                  <td>{flight.businessSeats}</td>
                  <td>{flight.economySeats}</td>
                  <td>{flight.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

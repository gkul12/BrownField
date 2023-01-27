import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Login from "./Login";
import SearchResult from "./SearchResult";
// import SeatPicker from 'react-seat-picker'

import "./site.css";

export default function Site() {
  const [flights, setFlights] = useState([]);
  const [flightNum, setFlightNum] = useState("");
  const [sResult, setSResult] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const onSourceChange = (e) => setSource(e.target.value);
  const onFlightNumChange = (e) => setFlightNum(e.target.value);
  const onDestinationChange = (e) => setDestination(e.target.value);
  const onDepartureDateChange = (e) => {
    setDepartureDate(e.target.value.toString());
  };
  const navigate = useNavigate();

  const onNavigateLoginClick = () => {
    navigate("/login");
  };
  const onNavigateSignupClick = () => {
    navigate("/signup");
  };
  const onNavigateTicketClick = (props) => {
    console.log("FlightNum : ", props);
    localStorage.setItem("flightNumber", props);
    navigate("/ticket");
  };

  useEffect(() => {
    const flightList = async () => {
      await axios
        .get("http://localhost:8080/getAllFlights")
        .then((response) => setFlights(response.data));
    };
    flightList();
    console.log(flights);
  }, []);

  const onSubmit = () => {
    axios
      .get("http://localhost:8080/serachFlight", {
        params: {
          source: source,
          destination: destination,
          departureDate: departureDate,
        },
      })
      .then((response) => {
        console.log("Resulted Data : ", response.data);

        setSResult(response.data);
        console.log("sResult = ", sResult);
        // localStorage.setItem("SearchResult", response.data);
      });
  };

  return (
    <>
      <div className="container-site">
        <div className=" row d-flex justify-content-between">
          <div className="col-lg-5">
            <div className="d-flex flex-column">
              <h2 className="brownFeild">
                {GiAirplaneDeparture}BrownField Airline
              </h2>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="d-flex">
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light btn-sm btn-sm">
                About
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light btn-sm btn-sm">
                Flights
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-light btn-sm btn-sm"
                onClick={onNavigateLoginClick}
              >
                Login
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-light btn-sm btn-sm"
                onClick={onNavigateSignupClick}
              >
                Signup
              </button>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div
          classname="img"
          style={{
            backgroundImage: 'url("/airplane.jpg")',
            height: "370px",
            width: "2200",
          }}
        >
          <h1 className="text-white fw-bold">Let the journey begin</h1>
          <div className="container-fluid">
            <div className="site-row">
              <div className="col-lg-8 bg-blue p-4 rounded-1">
                <div className="d-flex">
                  <div>
                    <label className="form-label mb-0 text-darkslategrey fs-8 fw-bold">
                      <GiAirplaneDeparture /> From
                    </label>
                    {/* <input className="form-control" placeholder="City" /> */}
                    <select
                      className="form-control"
                      onChange={onSourceChange}
                      onSelect={onSourceChange}
                      defaultValue="select source"
                      value={source}
                    >
                      <option disabled={true} value="">
                        --Choose Source--
                      </option>
                      {flights.map((flight) => (
                        <option
                          key={flight.flightnumber}
                          className="dropdown-item"
                        >
                          {flight.source}
                        </option>
                      ))}
                    </select>
                  </div>
                  &nbsp;&nbsp;
                  <div>
                    <label className="form-label mb-0 text-darkslategrey fs-8 fw-bold">
                      <GiAirplaneArrival /> To
                    </label>
                    {/* <input className="form-control" placeholder="City" /> */}
                    <select
                      className="form-control"
                      onChange={onDestinationChange}
                      onSelect={onDestinationChange}
                      defaultValue="select source"
                      value={destination}
                    >
                      <option disabled={true} value="">
                        --Choose Destination--
                      </option>
                      {flights.map((flight) => (
                        <option
                          key={flight.flightnumber}
                          className="dropdown-item"
                        >
                          {flight.destination}
                        </option>
                      ))}
                    </select>
                  </div>
                  &nbsp;&nbsp;
                  <div>
                    <label className="form-label mb-0 text-darkslategrey fs-8 fw-bold">
                      Depart
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={onDepartureDateChange}
                      onSelect={onDepartureDateChange}
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="d-flex align-items-center justify-content-between pt-2">
                    <button
                      className="btn btn-secondary  fw-bold text-white"
                      onClick={onSubmit}
                    >
                      <AiOutlineSearch />
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="accod">
        {sResult.map((result) => (
          <>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div class="search-container">
                  <div class="row">
                    <div
                      class="col-md col-6 col-sm-5"
                      key={result.flightNumber}
                    >
                      {result.departureTime}
                    </div>

                    <div class="col-md col-6 col-sm-5">
                      {result.arrivalTime}
                    </div>
                    <div class="col-md col-6 col-sm-5">
                      {result.flightNumber}
                    </div>
                    <div class="col-md col-6 col-sm-5">
                      {result.departureDate}
                    </div>
                    <div class="col-md col-6 col-sm-5">
                      {result.fareEconomy}
                    </div>

                    <div class="w-100"></div>

                    <div class="col-md col-6 col-sm-5">{result.source}</div>
                    <div class="col-md col-6 col-sm-5">
                      {result.destination}
                    </div>
                    <div class="col-md col-6 col-sm-5"> </div>
                    <div class="col-md col-6 col-sm-5">Day</div>
                    <div class="col-md col-6 col-sm-5">Onwards/-</div>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ minWidth: 1325, minHeight: 180 }}>
                  <Card variant="outlined">
                    <CardContent>
                      <div class="search-container">
                        <div class="row">
                          <div
                            class="col-md col-6 col-sm-5 border rounded-3"
                            id="economy"
                          >
                            Economy
                          </div>
                          <div
                            class="col-md col-6 col-sm-5 border rounded-3"
                            id="business"
                          >
                            Business
                          </div>

                          <div class="w-100"></div>

                          <div
                            class="col-md col-6 col-sm-5 border rounded-3"
                            id="economy"
                          >
                            <label className="label-1">
                              Economy Fare : {result.fareEconomy}
                            </label>
                            <br></br>
                            <label className="label-2">
                              Economy Seat : {result.economySeats}
                            </label>
                            <br></br>
                            <Button
                              size="small"
                              onClick={() => {
                                // setFlightNum();
                                onNavigateTicketClick(result.flightNumber);
                              }}
                            >
                              Book Now
                            </Button>
                          </div>
                          <div
                            class="col-md col-6 col-sm-5 border rounded-3"
                            id="business"
                          >
                            <label className="label-1">
                              Business Fare : {result.fareBusiness}
                            </label>
                            <br></br>
                            <label className="label-2">
                              Business Seat : {result.businessSeats}
                            </label>
                            <br></br>
                            <Button
                              size="small"
                              onClick={() => {
                                onNavigateTicketClick();
                                setFlightNum(result.flightNumber);
                              }}
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Box>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </div>
    </>
  );
}

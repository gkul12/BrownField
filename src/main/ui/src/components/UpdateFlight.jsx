import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { ColumnFlexBox, ErrorText, FlexBox } from "../helpers/components";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import "./AddFlight.css";

export default function UpdateFlight() {
  const [flights, setFlights] = useState([]);
  const [flight, setFlight] = useState([]);

  const [aId, setAId] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [type, setType] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [economyFare, setEconomyFare] = useState("");
  const [businessFare, setBusinessFare] = useState("");
  const [businessSeats, setBusinessSeats] = useState("");
  const [economySeats, setEconomySeats] = useState("");
  const [status, setStatus] = useState("");

  const onFlightNumberChange = (e) => {
    setFlightNumber(e.target.value);
    const fNumber = parseInt(e.target.value);
    console.log(fNumber);
    const obj = { flightNumber: fNumber };
    console.log(obj);
    const flightList = async () => {
      await axios
        .post("http://localhost:8080/getFlightById", obj)
        .then((response) => setFlight(response.data));
    };
    flightList();
    console.log("Flight : ");
    console.log(flight);
  };

  const onSourceChange = (e) => setSource(e.target.value);
  const onDestinationChange = (e) => {
    setDestination(e.target.value);
  };
  const onDepartureDateChange = (e) => setDepartureDate(e.target.value);
  const onDepartureTimeChange = (e) => setDepartureTime(e.target.value);
  const onTypeChange = (e) => setType(e.target.value);
  const onArrivalDateChange = (e) => setArrivalDate(e.target.value);
  const onArrivalTimeChange = (e) => setArrivalTime(e.target.value);
  const onEconomyFareChange = (e) => setEconomyFare(e.target.value);
  const onBusinessFareChange = (e) => setBusinessFare(e.target.value);
  const onBusinessSeatsChange = (e) => setBusinessSeats(e.target.value);
  const onEconomySeatsChange = (e) => {
    console.log(obj);
    setEconomySeats(e.target.value);
  };
  const onStatusChange = (e) => setStatus(e.target.value);

  const obj = {
    airoplane: flight.airoplane,
    flightNumber: flight.flightNumber,
    source: flight.source,
    destination: flight.destination,
    departureDate: flight.departureDate,
    departureTime: flight.departureTime,
    type: flight.type,
    arrivalDate: flight.arrivalDate,
    arrivalTime: flight.arrivalTime,
    economyFare: flight.economyFare,
    businessFare: flight.businessFare,
    businessSeats: flight.businessSeats,
    economySeats: flight.economySeats,
    status: status,
  };

  const onSubmit = () => {
    console.log(aId);
    //console.log("Aero = ", flight.airoplane);
    console.log("obj = ", obj);
    axios
      .post("http://localhost:8080/updateFlight", obj)
      .then(function (response) {
        console.log(response);
        //JSON.stringify(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const flightsList = async () => {
      await axios
        .get("http://localhost:8080/getAllFlights")

        .then((response) => {
          console.log(response.data);
          setFlights(response.data);
          setFlight(response.data[0]);
        });
    };
    flightsList();
    console.log("flights: ", flights);
  }, []);

  return (
    <>
      <div className="container-update">
        <fieldset>
          <legend>
            <h2>Update Flight</h2>
          </legend>
        </fieldset>
        <div className="row-flight">
          <div className="column-flight">
            <Formik initialValues={obj}>
              <Form>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Flight Number
                  </FormLabel>
                  <select
                    className="box"
                    onChange={onFlightNumberChange}
                    onSelect={onFlightNumberChange}
                    value={flightNumber}
                  >
                    {flights.map((flight) => (
                      <option
                        key={flight.flightNumber}
                        className="dropdown-item"
                      >
                        {flight.flightNumber}
                      </option>
                    ))}
                  </select>
                </ColumnFlexBox>
                {/* <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Aieroplane
                  </FormLabel>
                  <TextField
                    type="text"
                    onChange={onAIdChange}
                    value={flight.airoplane}
                  />
                </ColumnFlexBox> */}
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Destination
                  </FormLabel>
                  <TextField
                    type="text"
                    onChange={onDestinationChange}
                    value={flight.destination}
                  />
                </ColumnFlexBox>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Source
                  </FormLabel>
                  <TextField
                    type="text"
                    onChange={onSourceChange}
                    value={flight.source}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Departure Date
                  </FormLabel>
                  <TextField
                    type="text"
                    onChange={onDepartureDateChange}
                    value={flight.departureDate}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Departure Time
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onDepartureTimeChange}
                    value={flight.departureTime}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Type
                  </FormLabel>

                  <select
                    className="box"
                    onChange={onTypeChange}
                    onSelect={onTypeChange}
                    value={flight.type}
                  >
                    <option key={"International"} className="dropdown-item">
                      International
                    </option>
                    <option key={"Domestic"} className="dropdown-item">
                      Domestic
                    </option>
                  </select>
                </ColumnFlexBox>
              </Form>
            </Formik>
          </div>
          <div className="column-flight">
            <Formik>
              <Form>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Arrival Date
                  </FormLabel>
                  <TextField
                    type="text"
                    onChange={onArrivalDateChange}
                    value={flight.arrivalDate}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Arrival Time
                  </FormLabel>
                  <TextField
                    type="text"
                    onChange={onArrivalTimeChange}
                    value={flight.arrivalTime}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Economy Fare
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onEconomyFareChange}
                    value={flight.economyFare}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Business Fare
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onBusinessFareChange}
                    value={flight.businessFare}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Business Seats
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onBusinessSeatsChange}
                    value={flight.businessSeats}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Economy Seats
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onEconomySeatsChange}
                    value={flight.economySeats}
                  />
                </ColumnFlexBox>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Status
                  </FormLabel>

                  <select
                    className="box"
                    onChange={onStatusChange}
                    onSelect={onStatusChange}
                    value={status}
                  >
                    <option key={"On-Time"} className="dropdown-item">
                      On-Time
                    </option>
                    <option key={"Delayed"} className="dropdown-item">
                      Delayed
                    </option>
                    <option key={"Cancelled"} className="dropdown-item">
                      Cancelled
                    </option>
                  </select>
                </ColumnFlexBox>
              </Form>
            </Formik>

            <div>
              <Button
                id="button-flight"
                type="submit"
                variant="contained"
                onClick={onSubmit}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

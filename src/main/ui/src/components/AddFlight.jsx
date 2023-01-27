import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import { ColumnFlexBox, ErrorText } from "../helpers/components";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function AddFlight() {
  const [airplanes, setAirplanes] = useState([]);
  const [flights, setFlights] = useState([]);

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

  const onAIdChange = (e) => {
    setAId(e.target.value);
  };
  const onFlightNumberChange = (e) => setFlightNumber(e.target.value);
  const onSourceChange = (e) => setSource(e.target.value);
  const onDestinationChange = (e) => setDestination(e.target.value);
  const onDepartureDateChange = (e) => setDepartureDate(e.target.value);
  const onDepartureTimeChange = (e) => setDepartureTime(e.target.value);
  const onTypeChange = (e) => setType(e.target.value);
  const onArrivalDateChange = (e) => setArrivalDate(e.target.value);
  const onArrivalTimeChange = (e) => setArrivalTime(e.target.value);
  const onEconomyFareChange = (e) => setEconomyFare(e.target.value);
  const onBusinessFareChange = (e) => setBusinessFare(e.target.value);
  const onBusinessSeatsChange = (e) => setBusinessSeats(e.target.value);
  const onEconomySeatsChange = (e) => setEconomySeats(e.target.value);
  const onStatusChange = (e) => setStatus(e.target.value);

  useEffect(() => {
    const airplaneList = async () => {
      await axios
        .get("http://localhost:8080/getAllAirlines")
        .then((response) => setAirplanes(response.data));
    };
    airplaneList();
  }, []);

  useEffect(() => {
    const flightsList = async () => {
      await axios
        .get("http://localhost:8080/getAllAirports")
        .then((response) => setFlights(response.data));
    };
    flightsList();
    console.log(flights);
  }, []);

  const obj = {
    aId: aId,
    flightNumber: parseInt(flightNumber),
    source: source,
    destination: destination,
    departureDate: departureDate,
    departureTime: departureTime,
    type: type,
    arrivalDate: arrivalDate,
    arrivalTime: arrivalTime,
    economyFare: parseFloat(economyFare),
    businessFare: parseFloat(businessFare),
    businessSeats: parseInt(businessSeats),
    economySeats: parseInt(economySeats),
    status: status,
  };

  const onSubmit = () => {
    console.log(obj);
    axios
      .post("http://localhost:8080/addFlight", obj)
      .then(function (response) {
        console.log(response.data);
        //JSON.stringify(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-flight">
        <fieldset>
          <legend>
            <h2>Add Flight</h2>
          </legend>
        </fieldset>
        <div className="row-flight">
          <div className="column-flight">
            <Formik>
              <Form>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Flight Number
                  </FormLabel>
                  <TextField
                    className="textf"
                    // name="flightNumber"
                    type="text"
                    onChange={onFlightNumberChange}
                    value={flightNumber}
                  />
                </ColumnFlexBox>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Aieroplane
                  </FormLabel>
                  <select
                    className="box"
                    onChange={onAIdChange}
                    onSelect={onAIdChange}
                    value={aId}
                  >
                    <option disabled={true} value="">
                      --Choose Airplane--
                    </option>
                    {airplanes.map((airplane) => (
                      <option
                        key={airplane.aeroplane_id}
                        className="dropdown-item"
                      >
                        {airplane.aeroplane_id}
                      </option>
                    ))}
                  </select>
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Destination
                  </FormLabel>
                  <select
                    className="box"
                    onChange={onDestinationChange}
                    onSelect={onDestinationChange}
                    value={destination}
                  >
                    {flights.map((flight) => (
                      <option key={flight.code} className="dropdown-item">
                        {flight.code}({flight.airport})
                      </option>
                    ))}
                  </select>

                  <ErrorMessage name="destination" component={ErrorText} />
                </ColumnFlexBox>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Source
                  </FormLabel>
                  <select
                    className="box"
                    onChange={onSourceChange}
                    onSelect={onSourceChange}
                    defaultValue="select source"
                    value={source}
                  >
                    {flights.map((flight) => (
                      <option key={flight.code} className="dropdown-item">
                        {flight.code}({flight.airport})
                      </option>
                    ))}
                  </select>
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Departure Date
                  </FormLabel>
                  <TextField
                    type="date"
                    onChange={onDepartureDateChange}
                    value={departureDate}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Departure Time
                  </FormLabel>

                  <TextField
                    type="time"
                    onChange={onDepartureTimeChange}
                    value={departureTime}
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
                    value={type}
                  >
                    <option disabled={true} value="">
                      --Choose Type--
                    </option>
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
                    type="date"
                    onChange={onArrivalDateChange}
                    value={arrivalDate}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Arrival Time
                  </FormLabel>
                  <TextField
                    type="time"
                    onChange={onArrivalTimeChange}
                    value={arrivalTime}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Economy Fare
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onEconomyFareChange}
                    value={economyFare}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Business Fare
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onBusinessFareChange}
                    value={businessFare}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Business Seats
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onBusinessSeatsChange}
                    value={businessSeats}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Economy Seats
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onEconomySeatsChange}
                    value={economySeats}
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
                    <option disabled={true} value="">
                      --Choose Status--
                    </option>
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
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormControl } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { RiDeleteBin2Line } from "react-icons/ri";
import axios from "axios";
import PassengerTable from "./PassengerTable";

export default function TicketDetails() {
  //   //
  //   // const [flights, setFlights] = useState([]);
  //   const [directorsArray, setDirectorsArray] = useState(["director-0"]);

  //   const appendInput_director = (props) => {
  //     var newInput = `director-${directorsArray.length}`;
  //     //console.log(directorsArray.concat([newInput]));
  //     setDirectorsArray((prevState) => ({
  //       directorsArray: prevState.directorsArray.concat([newInput]),
  //     }));
  //   };
  const [sResult, setSResult] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const loggedInUser = localStorage.getItem("loggedInUser");
  const flightNumber = localStorage.getItem("flightNumber");
  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onGenderChange = (e) => setGender(e.target.value);

  var obj = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    flightNum: flightNumber,
  };

  const navigate = useNavigate();
  const onAddSubmit = () => {
    // tickets.push(obj);
    console.log(loggedInUser);
    const ticketList = async () => {
      await axios
        .post("http://localhost:8080/addTickets/" + loggedInUser, obj)
        .then((response) => setTickets(response.data));
    };
    ticketList();
    navigate("/ticket");
    // console.log(tickets.firstName);
    console.log(tickets);
  };

  useEffect(() => {
    const flights = async () => {
      await axios
        .post("http://localhost:8080/getFlightById", flightNumber)
        .then((response) => setSResult(response.data));
    };
    console.log("sResukts : ", flightNumber);
    flights();
  }, []);

  return (
    <div>
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
            </Accordion>
          </>
        ))}
      </div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <Grid id="grid-main" container spacing={6} item>
            <Grid sm={2} item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  size="small"
                  className="name"
                  onChange={onFirstNameChange}
                />
              </FormControl>
            </Grid>
            <Grid sm={2} item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  type="text"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  size="small"
                  className="name"
                  onChange={onLastNameChange}
                />
              </FormControl>
            </Grid>
            <Grid sm={2} item>
              <FormControl fullWidth margin="dense">
                <FormLabel>Male</FormLabel>
                <input
                  variant="outlined"
                  required
                  type="radio"
                  id="gender"
                  label="Gender"
                  name="gender"
                  size="small"
                  className="gender"
                  value="male"
                  onChange={onGenderChange}
                />
              </FormControl>
            </Grid>
            <Grid sm={2} item>
              <FormControl fullWidth margin="dense">
                <FormLabel>Female</FormLabel>
                <input
                  variant="outlined"
                  required
                  type="radio"
                  id="gender"
                  label="Gender"
                  name="gender"
                  size="small"
                  className="gender"
                  value="female"
                  onChange={onGenderChange}
                />
              </FormControl>
            </Grid>
            <Grid sm={2} item>
              <FormControl fullWidth margin="dense">
                <button type="submit" onClick={onAddSubmit}>
                  ADD
                </button>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin2Line } from "react-icons/ri";
import TicketDetails from "./TicketDetails";
import Seatbooking from "../components/Seatbooking"
export default function PassengerTable() {
  const [tickets, setTickets] = useState([]);
  const [selected, setSelected] = React.useState([]);
  
  const loggedInUser = localStorage.getItem("loggedInUser");

  const obj = { userId: loggedInUser };
  //   const onFirstNameChange = (e) => setFirstName(e.target.value);

  useEffect(() => {
    const ticketList = async () => {
      await axios
        .post("http://localhost:8080/getAllTickets/" + loggedInUser + localStorage.getItem("flightNumber"))
        .then((response) => setTickets(response.data));
    };
    ticketList();
    console.log("tickets : ", tickets);
  }, []);

  const deleteTicket = (id) => {
    console.log(id);
    
    axios
      .post("http://localhost:8080/deleteTicket/" + id +"/" + loggedInUser)
      .then(function (response) {
        alert("Deleted Successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const onNavigateAddClick = () => {
    navigate("/ticketDetails");
  };
  const onNavigateSeatClick = () => {
    navigate("/Seatbooking");
  };
  return (
    <div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>
                <button onClick={onNavigateAddClick}>Add</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => {
              return (
                <tr key={ticket.firstName}>
                  <td>{ticket.firstName}</td>
                  <td>{ticket.lastName}</td>
                  <td>{ticket.gender}</td>
                  <td>
                    <button
                      id="button-delete"
                      onClick={() => deleteTicket(ticket.id)}
                      //   setId

                    >
                      Delete{RiDeleteBin2Line}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={onNavigateSeatClick}>Proceed</button>
      </div>
    </div>
  );
}

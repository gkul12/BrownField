import React, { useState, useEffect } from "react";
//import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./ViewFlight.css";
import { RiDeleteBin2Line } from "react-icons/ri";
export default function DeleteAeroplanes() {
  const [aeroplanes, setAeroplanes] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const aeroplaneList = async () => {
      await axios
        .get("http://localhost:8080/getAllAirlines")
        .then((response) => setAeroplanes(response.data));
    };
    aeroplaneList();
    console.log(aeroplanes);
  }, []);

  const deleteAeroplane = (id) => {
    console.log(id);
    const obj = { aeroplane_id: id };
    console.log(obj);
    axios
      .post("http://localhost:8080/deleteAeroplane", obj)
      .then(function (response) {
        alert("Deleted Successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Aeroplane ID</th>
              <th>Business Class Seats</th>
              <th>Economy Class Seats</th>
            </tr>
          </thead>
          <tbody>
            {aeroplanes.map((aeroplane) => {
              return (
                <tr key={aeroplane.aeroplane_id}>
                  <td>{aeroplane.aeroplane_id}</td>
                  <td>{aeroplane.no_of_business_class_seats}</td>
                  <td>{aeroplane.no_of_economy_class_seats}</td>
                  <td>
                    <button
                      id="button-delete"
                      onClick={() => deleteAeroplane(aeroplane.aeroplane_id)}
                      setId
                    >
                      Delete{RiDeleteBin2Line}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

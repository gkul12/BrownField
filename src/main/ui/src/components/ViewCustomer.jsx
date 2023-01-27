import React, { useState, useEffect } from "react";
//import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./ViewFlight.css";
export default function ViewCustomer() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState();
  useEffect(() => {
    const flightList = async () => {
      await axios
        .get("http://localhost:8080/getAllUsers")
        .then((response) => setCustomers(response.data));
    };
    flightList();
    console.log("Customer : ", customers);
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
}
  return (
    <>
      <div className="table-container">
        <div>
        <label
                class="block  text-md font-medium mb-2 mt-2"
                for="search"
              >
                Search
              </label>
              <input
                class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="search"
                type="text"
                placeholder="Enter First Name"
                nChange={onSearchChange}
                value={search}
              />
        </div>

        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone Number</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <th scope="row">{customer.id}</th>
                  <td>{customer.email}</td>
                  <td>{customer.fisrtName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.dob}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

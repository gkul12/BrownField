import axios from "axios";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { ColumnFlexBox, FlexBox } from "../helpers/components";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import "./AddFlight.css";

export default function AddAeroplane() {
  const [aeroplane_id, setAeroplane_Id] = useState("");
  const [no_of_business_class_seats, setNo_of_business_class_seats] =
    useState("");
  const [no_of_economy_class_seats, setNo_of_economy_class_seats] =
    useState("");

  const onAeroplane_IdChange = (e) => {
    setAeroplane_Id(e.target.value);
  };
  const onNo_of_business_class_seatsChange = (e) =>
    setNo_of_business_class_seats(e.target.value);
  const onNo_of_economy_class_seatsChange = (e) =>
    setNo_of_economy_class_seats(e.target.value);

  const obj = {
    aeroplane_id: aeroplane_id,
    no_of_business_class_seats: no_of_business_class_seats,
    no_of_economy_class_seats: no_of_economy_class_seats,
  };

  const onSubmit = () => {
    console.log(obj);
    axios
      .post("http://localhost:8080/addAeroplaneDetails", obj)
      .then(function (response) {
        console.log(response);
        //JSON.stringify(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-flight">
        <Formik>
          <Form style={{ gap: "20px", padding: "50px 10%" }}>
            <fieldset>
              <legend>
                <h2>Add Aeroplane</h2>
              </legend>
            </fieldset>
            <div className="row-flight">
              
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Aeroplane Number
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onAeroplane_IdChange}
                    value={aeroplane_id}
                  />
                </ColumnFlexBox>
                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Number of Business Seats
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onNo_of_business_class_seatsChange}
                    value={no_of_business_class_seats}
                  />
                </ColumnFlexBox>

                <ColumnFlexBox>
                  <FormLabel id="feildlable" required>
                    Number of Economy Seats
                  </FormLabel>

                  <TextField
                    type="text"
                    onChange={onNo_of_economy_class_seatsChange}
                    value={no_of_economy_class_seats}
                  />
                </ColumnFlexBox>
              
            </div>
          </Form>
        </Formik>
        <div className="button-flight">
          <FlexBox style={{ gap: "20px"}}>
            <Button
              id="button-flight-1"
              type="submit"
              variant="contained"
              onClick={onSubmit}
            >
              Add
            </Button>
          </FlexBox>
        </div>
      </div>
    </>
  );
}

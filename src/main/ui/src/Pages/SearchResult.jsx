import React, { useState, useEffect } from "react";
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
import "./site.css";

export default function SearchResult() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const flightList = async () => {
      setResults(localStorage.getItem("SearchResult"));
    };
    flightList();
    console.log("results: ", results);
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <div class="search-container">
          <div class="row">
            <div class="col-md col-6 col-sm-5 border rounded-3" id="economy">
              Economy
            </div>
            <div class="col-md col-6 col-sm-5 border rounded-3" id="business">
              Business
            </div>

            <div class="w-100"></div>

            <div class="col-md col-6 col-sm-5 border rounded-3" id="economy">
              Economy Details
            </div>
            <div class="col-md col-6 col-sm-5 border rounded-3" id="business">
              Business Details
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="accod">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div class="search-container">
            <div class="row">
              <div class="col-md col-6 col-sm-5">
                {/* {props.name} */}
                {/* {results.map((r) => console.log(r))} */}
                {/* {results.forEach((e) => console.log(e))} */}
                {/* {result.flightNumber} */}
              </div>
              <div class="col-md col-6 col-sm-5">arrival time</div>
              <div class="col-md col-6 col-sm-5">Flight Number</div>
              <div class="col-md col-6 col-sm-5">Date</div>
              <div class="col-md col-6 col-sm-5">Price</div>

              <div class="w-100"></div>

              <div class="col-md col-6 col-sm-5">source</div>
              <div class="col-md col-6 col-sm-5">destination</div>
              <div class="col-md col-6 col-sm-5"> </div>
              <div class="col-md col-6 col-sm-5">Day</div>
              <div class="col-md col-6 col-sm-5">Onwards/-</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ minWidth: 1325, minHeight: 300 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

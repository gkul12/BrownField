import React  from "react";
import "./seats.css";

// import Grid from "@material-ui/core";
import Grid from '@mui/material/Grid';
// import Col from "react-bootstrap";
// import {Col} from 'react-bootstrap';


class Seatbooking extends React.Component {

  constructor() {
    super();
    var numberOfEconomySeats = [];

    for (var i = 1; i <= 21; i++) {
      numberOfEconomySeats.push(i);
    }
    this.state = {
      seat: numberOfEconomySeats,
      seatAvailable: [],

      seatReserved: [],
      seatSelected: [],
    };
    
  }
  

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
        //seatSelected: this.state.seatSelected.filter(res => res != seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        //seatSelected: this.state.seatSelected.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      });
    }
  }
  checktrue(row) {
    if (this.state.seatSelected.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmited() {
    this.setState({
      seatSelected: this.state.seatSelected.concat(this.state.seatReserved)
      
    });
    this.setState({
      seatReserved: []
    });
  }

  render() {
    return (
     
      <div>
        <header>
       <h1>Select Your Seat</h1>
       </header>
        <DrawGrid container
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          selected={this.state.seatSelected}
          onClickData={this.onClickData.bind(this)}
          checktrue={this.checktrue.bind(this)}
          handleSubmited={this.handleSubmited.bind(this)}
        />
      </div>
    );
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
     
      <Grid container >
        <Grid item xs={4}>
         
          <div xs={15}>
            
            
            <table className="grid" align="center"  >
              <tbody >
                <tr >
                  {this.props.seat.map(row => (
                    <td
                      className={
                        this.props.selected.indexOf(row) > -1
                          ? "reserved"
                          : this.props.reserved.indexOf(row) > -1
                          ? "selected"
                          : "available"
                      }
                      key={row}
                      onClick={
                        this.props.checktrue(row)
                          ? e => this.onClickSeat(row)
                          : null
                      }
                    >
                      {row}{"  "}
                    </td>
                  ))}
                </tr>
              </tbody>
              
            </table>
            
       
            <button
              
              className="btn btn-secondary btnmargin"
              onClick={() => this.props.handleSubmited()}
            >
              Confirm Booking
            </button>
            
          </div>
        </Grid>
      </Grid>
  
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
export default Seatbooking;

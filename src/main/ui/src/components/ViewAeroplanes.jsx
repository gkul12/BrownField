import React, {useState, useEffect} from "react";
//import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./ViewFlight.css";
export default function ViewAeroplanes() {  
    const [aeroplanes, setAeroplanes] = useState([]);

    useEffect(() => {
        const aeroplaneList = async () => {
          await axios.get("http://localhost:8080/getAllAirlines")
          .then(
            response => setAeroplanes(response.data))
        }
        aeroplaneList();
        console.log(aeroplanes);
      }, []);
      
    return(
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
            {
                aeroplanes.map((aeroplane)=>{
                    return(
                        <tr key={aeroplane.aeroplane_id}>
                            <td>{aeroplane.aeroplane_id}</td>
                            <td>{aeroplane.no_of_business_class_seats}</td>
                            <td>{aeroplane.no_of_economy_class_seats}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    </>
    )

}
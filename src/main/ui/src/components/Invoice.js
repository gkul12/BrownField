import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

class Invoice extends React.Component {
    printDocument() {
          //get html
          const pdfTable = document.getElementById('divToPrint');
          //html to pdf format
          var html = htmlToPdfmake(pdfTable.innerHTML);
        
          const documentDefinition = { content: html };
          pdfMake.vfs = pdfFonts.pdfMake.vfs;
          pdfMake.createPdf(documentDefinition).open();
        
    }
 
  render() {
   
    return (
    <div className="App cont mt-5">


            <div class="row d-flex justify-content-center">
                <div class="col-md-2">
                    <div class="d-flex flex-row p-2">
                        <button class="btn btn-secondary"  onClick={this.printDocument}>Export To PDF</button>
                    </div>
                </div>
            </div>



    <div id="divToPrint" className="m-3">
    
    <div class="row d-flex justify-content-center">
   
      <div class="col-md-8">
          <div class="card">
              <div class="d-flex flex-row p-2">
                  <div class="d-flex flex-column "><h4>Tax Invoice </h4></div>
                  
              </div>
    
             
              <hr />

              <div class="table-responsive p-2">
              <b>Passenger Details</b>
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                              <td>Passenere Name</td>
                              <td>Flight No</td>
                              <td>Seat-No</td>
                           
                          </tr>
                          <tr class="content">

                              <td>Aayushi</td>
                              <td>uncd123</td>
                              <td>30E</td>
        
        
                          </tr>
                      </tbody>
                  </table>
                  <hr />
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                              <td>To</td>
                              <td>From</td>
                          </tr>
                          <tr class="content">
                              <td class="font-weight-bold">city name <br />airport name <br />INDIA</td>
                              <td class="font-weight-bold">city name <br /> airport name<br />INDIA</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <hr />
              <div class="products p-2">
              <b>Baggage Details</b>
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                           
                              <td>Type</td>
                            
                              <td>Check-in Baggage</td>
                              
                              <td>Cabin Baggage</td>
                              </tr>
                          <tr class="content">
                           
                              <td>Adult</td>
                         
                              <td>15 kg</td>
                              <td>01 small handbag</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <hr />
              <div class="products p-2">
                <b>Payment Details</b>
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                  
                        
                              <td>Base Fare</td>
                              <td>Taxes & Fees</td>
                              <td>Convenience Fee</td>
                              <td class="text-center">Total Amount</td>
                          </tr>
                          <tr class="content">

                              <td>4,000</td>
                              <td>2,500</td>
                              <td>219</td>
        
                              <td class="text-center">Rs 42,500</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <hr />
              
          </div>
      </div>
  </div>
      </div>
      
      
    </div>
 )
};
}
export default Invoice;
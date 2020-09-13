import React, { Component } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default class Invoice2 extends Component {
  handlePdf = () => {
    const input = document.getElementById("page");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      //   const pdf = new jsPDF("p", "px", "a4");
      const pdf = new jsPDF("p", "mm");
      //var width = pdf.internal.pageSize.getWidth();
      //var height = pdf.internal.pageSize.getHeight();

      //   pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("test.pdf");
    });
  };

  render() {
    const hrStyle = {
      border: "5px solid rgb(23, 162, 184)",
    };

    const subtotal = [0, ...this.props.inputs.totals];
    const add = (a, b) => a + b;
    const sum = subtotal.reduce(add);

    const tax = sum * 0.1;
    const total = sum + tax;

    return (
      <React.Fragment>
        <div className="col-12 col-lg-6" id="page" width="320" height="480">
          <div className="container-fluid bg-info text-white">
            <div className="row">
              <div className="col text-left m-2">
                <p>Your Company Name</p>
                <h2>Invoice</h2>
              </div>
              <div className="col text-right">
                <p>22 Yusen St</p>
                <br />
                <p>borburn</p>
                <br />
                <p>WSN</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <h5>Billed To</h5>
                <p>{this.props.inputs.company}</p>
                <p>{this.props.inputs.address}</p>
                <p>{this.props.inputs.zip}</p>
              </div>
              <div className="col-4">
                <div>
                  <h5>Invoice number</h5>
                  <p>Za{Math.floor(Math.random() * 100 + 1)}</p>
                </div>
                <div>
                  <h5>Date</h5>
                  <p>{this.props.inputs.date}</p>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <h5>Invoice Totals</h5>
                  <p>${total}</p>
                </div>
              </div>
            </div>
          </div>
          <hr style={hrStyle} />
          <div className="Invoices">
            <table className="table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.props.inputs.invoices.map((invoice, index) => {
                  return (
                    <tr key={index}>
                      <td>{invoice.description}</td>
                      <td>{invoice.unit}</td>
                      <td>{invoice.quantity}</td>
                      <td>{invoice.quantity * invoice.unit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="col-12 text-right">
            <h5 className="m-2">
              Subtotal<span className="m-2">${sum}</span>
            </h5>
            <p>
              Tax(10%)<span className="m-2">${tax.toFixed(2)}</span>
            </p>
            <h2>
              Total<span className="m-2">${total}</span>
            </h2>
          </div>
        </div>
        <button
          onClick={this.handlePdf}
          className="btn btn-primary btn-lg mx-auto"
        >
          Generate PDF
        </button>
      </React.Fragment>
    );
  }
}

import React, { useEffect, useState } from "react";
import generateInvoice from "./services/invoiceGenerator";
import axios from "axios";

const Invoice = () => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    const getInvoice = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/nithyaroslin/pdf/invoice"
        );
        console.log(response.data);
        setInvoice(response.data);
      } catch (err) {
        console.log("error : " + { err });
      }
    };
    getInvoice();
  }, []);

  return (
    <div>
      <div>
        <div className="container mb-2 mt-2 p-2">
          <p>PDF - hardcoded Invoice template</p>
          <button
            className="btn btn-primary"
            onClick={() => generateInvoice(invoice)}
          >
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

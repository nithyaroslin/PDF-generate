import React from "react";
import "./App.css";
import Posts from "./Posts";
import Invoice from "./Invoice";
import CalculatedInvoice from "./CalculatedInvoice";
//import Invoice2 from "./Invoice2";

function App() {
  return (
    <div className="App">
      <Posts />
      <Invoice />
      {/* <Invoice2 inputs={inputs} /> */}
      <CalculatedInvoice />
    </div>
  );
}

export default App;

// const inputs = {
//   company: "Test Dealer Company",
//   address: "99 Test Drive, Karnataka",
//   zip: "562162",
//   date: "05-07-2020",
//   totals: [105, 75, 125],
//   invoices: [
//     {
//       description: "Ruled Notebook",
//       unit: 10.5,
//       quantity: 10,
//     },
//     {
//       description: "Camlin HB pencils",
//       unit: 2.5,
//       quantity: 30,
//     },
//     {
//       description: "Apsara Erasers",
//       unit: 5.0,
//       quantity: 25,
//     },
//   ],
// };

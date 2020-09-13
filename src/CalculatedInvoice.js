import React from "react";
//import React, { useEffect, useState } from "react";
import generateCalculatedInvoice from "./services/generateCalculatedInvoice";
//import axios from "axios";

const CalculatedInvoice = () => {
  const basePrintData = {
    addressSender: {
      person: "XXX Office Supplies",
      street: "123 Memory Lane",
      city: "Chennai",
      email: "support@xxxOffSupp.com",
      phone: "+91 (44) 78956612",
    },
    address: {
      company: "Lucky Store",
      person: "Vinodh Kumar ",
      street: "Radha Nagar",
      city: "600044 Chennai",
    },
    personalInfo: {
      website: "https://XXXOfficeSupplies.com",
      bank: {
        person: "Karthick Raju",
        name: "ICICI Bank",
        IBAN: "ICIC12 3456 7890 1234 5678 90",
      },
      taxoffice: {
        name: "FA Treptow-Köpenick",
        number: "St-Nr 12/123/12345",
      },
    },
    label: {
      invoicenumber: "Invoice No.",
      invoice: "Invoice for",
      tableItems: "Items",
      tableQty: "Qty",
      tableSinglePrice: "Price(In Rs)",
      tableSingleTotal: "Total(In Rs)",
      totalGrand: "Grand Total",
      contact: "Contactdetails",
      bank: "ICICI Bank",
      taxinfo: "Steuernummer",
    },
  };

  const longPrintData = {
    invoice: {
      number: "2018-15738",
      location: "Chennai",
      date: "28.06.2018",
      subject: "XXX Office Supplies",
      total: " 6.724,00",
      text:
        "Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\naliquid ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.\n" +
        "\n" +
        "Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n" +
        "nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie",
    },
    items: {
      [0]: {
        title: "Templating",
        description:
          "predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.",
        amount: " 1.200,00",
        qty: "2",
        total: " 2.400,00",
      },
      [1]: {
        title: "Design",
        description:
          "outwork digital screen UX in different cases for utilities",
        amount: " 876,00",
        qty: "0.5",
        total: " 438,00",
      },
      [2]: {
        title: "Security",
        description:
          "develop a 100% secure workflow mechanism by shutting down your PC",
        amount: " 12,00",
        qty: "1",
        total: " 12,00",
      },
      [3]: {
        title:
          "Capability Training Closure Business Rules Appliance Regulatory",
        description:
          "setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.",
        amount: " 256,00",
        qty: "2",
        total: " 512,00",
      },
      [4]: {
        title: "Templating",
        description:
          "predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.",
        amount: " 1.200,00",
        qty: "2",
        total: " 2.400,00",
      },
      [5]: {
        title: "Design",
        description:
          "outwork digital screen UX in different cases for utilities",
        amount: " 876,00",
        qty: "0.5",
        total: " 438,00",
      },
      [6]: {
        title: "Security",
        description:
          "develop a 100% secure workflow mechanism by shutting down your PC",
        amount: " 12,00",
        qty: "1",
        total: " 12,00",
      },
      [7]: {
        title:
          "Capability Training Closure Business Rules Appliance Regulatory",
        description:
          "setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.",
        amount: " 256,00",
        qty: "2",
        total: " 512,00",
      },
    },
  };
  return (
    <div>
      <div>
        <div className="container mb-2 mt-2 p-2">
          <p>PDF - Calculated Invoice template</p>
          <button
            className="btn btn-primary"
            onClick={() =>
              generateCalculatedInvoice(
                Object.assign(basePrintData, longPrintData)
              )
            }
          >
            Generate Calculated Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatedInvoice;

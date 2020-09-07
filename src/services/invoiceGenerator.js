// services/generateInvoice.js

import jsPDF from "jspdf";
//import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns";

// define a generatePDF function that accepts a posts argument
const generateInvoice = (invoice) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // doc.setFont("WorkSans");

  // <><>><><>><>><><><><><>>><><<><><><><>
  // SETTINGS
  // <><>><><>><>><><><><><>>><><<><><><><>0

  const fontSizes = {
    TitleFontSize: 14,
    SubTitleFontSize: 12,
    NormalFontSize: 10,
    SmallFontSize: 9,
  };

  const lineSpacing = 12;

  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  const pageCenterX = pageWidth / 2;

  doc.setFontSize(fontSizes.TitleFontSize);
  doc.setTextColor(135, 152, 184);
  doc.text(150, 20, "[INVOICE]");

  doc.setTextColor(0);
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.text(20, 20, "[Company Name]");

  doc.text(20, 25, "[Street Address]");
  doc.text(150, 25, "DATE 4/5/2017");
  doc.text(20, 30, "[City, ST ZIP]");
  doc.text(150, 30, "INVOICE # [123456]");
  doc.text(20, 35, "Phone: [000-000-0000]");
  doc.text(150, 35, "CUSTOMER ID [123]");
  doc.text(20, 40, "Fax: [000-000-0000]");
  doc.text(20, 45, "Website:");

  doc.text(20, 55, "BILL TO:");
  doc.text(20, 60, "[Name]");
  doc.text(20, 65, "[Company Name]");
  doc.text(20, 70, "[Street Address]");
  doc.text(20, 75, "[City, ST ZIP]");
  doc.text(20, 80, "[Phone]");

  doc.text(150, 55, "SHIP TO:");
  doc.text(150, 60, "[Name]");
  doc.text(150, 65, "[Company Name]");
  doc.text(150, 70, "[Street Address]");
  doc.text(150, 75, "[City, ST ZIP]");
  doc.text(150, 80, "[Phone]");

  const salesTableColumn = [
    "SALESPERSON",
    "P.O. #",
    "SHIP DATE",
    "SHIP VIA",
    "F.O.B.",
    "TERMS",
  ];

  const salesTableRows = [];

  const salesRowData = [
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
    "Column 6",
  ];

  salesTableRows.push(salesRowData);

  doc.autoTable(salesTableColumn, salesTableRows, { startY: 90 });

  const itemsTableColumn = [
    "ITEM #",
    "DESCRIPTION",
    "QTY",
    "UNIT PRICE",
    "TAX",
    "TOTAL",
  ];

  const itemsTableRows = [];

  const itemsRowData1 = [
    "[23423423]",
    "Product XYZ",
    "15",
    "150.00",
    "x",
    "2,250.00",
  ];

  const itemsRowData2 = [
    "[45645645]",
    "Product ABC",
    "1",
    "75.00",
    "x",
    "75.00",
  ];

  const itemsRowDataEmpty = [" ", " ", " ", " ", " ", "-"];

  itemsTableRows.push(itemsRowData1);
  itemsTableRows.push(itemsRowData2);

  for (let i = itemsTableRows.length; i < 10; i++) {
    itemsTableRows.push(itemsRowDataEmpty);
  }
  doc.autoTable(itemsTableColumn, itemsTableRows, { startY: 110 });

  doc.text(140, 200, "SUBTOTAL");
  doc.text(140, 205, "TAXABLE");
  doc.text(140, 210, "TAX RATE");
  doc.text(140, 215, "TAX");
  doc.text(140, 220, "S & H");
  doc.text(140, 225, "OTHER");
  doc.text(140, 230, "TOTAL");

  doc.text(180, 200, "2,325.00", null, null, "right");
  doc.text(180, 205, "2,325.00", null, null, "right");
  doc.text(180, 210, "6.875%", null, null, "right");
  doc.text(180, 215, "159.84", null, null, "right");
  doc.text(180, 220, "-", null, null, "right");
  doc.text(180, 225, "-", null, null, "right");
  doc.text(180, 230, "$ 2,484.84", null, null, "right");

  doc.setLineWidth(0.5);
  doc.line(140, 226, 180, 226);

  doc.text(160, 240, "Make all checks payable to", null, null, "center");
  doc.text(160, 245, "[Your Company Name]", null, null, "center");

  doc.rect(20, 200, 90, 40);
  doc.setFillColor(135, 152, 184);
  doc.rect(20, 200, 90, 10, "F");

  doc.text(21, 205, "Other Comments or Special Instructions");
  doc.text(21, 215, "1. Total payment due in 30 days ");
  doc.text(21, 220, "2. Please include the invoice number on your check");

  // Footer text
  doc.text(
    105,
    270,
    "If you have any questions about this invoice, please contact",
    null,
    null,
    "center"
  );
  doc.text(105, 275, "[Name, Phone #, E-mail]", null, null, "center");
  doc.text(105, 280, "Thank You For Your Business!", null, null, "center");

  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // post title. and margin-top + margin-left
  // doc.text("Closed posts within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`invoice_${dateStr}.pdf`);
};

export default generateInvoice;

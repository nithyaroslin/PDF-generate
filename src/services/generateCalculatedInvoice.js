import jsPDF from "jspdf";
import addressSender from "./pdf/addressSender";
import addressCustomer from "./pdf/addressCustomer";
import heading from "./pdf/heading";
import table from "./pdf/table";
import totals from "./pdf/totals";
import text from "./pdf/text";
import footer from "./pdf/footer";

const generateCalculatedInvoice = (printData) => {
  // initialize jsPDF
  const doc = new jsPDF("p", "pt");

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

  let startY = 130; // bit more then 45mm

  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  const pageCenterX = pageWidth / 2;

  // Sender's address

  startY = addressSender(
    doc,
    printData.addressSender,
    startY,
    fontSizes.NormalFontSize,
    lineSpacing
  );

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Customer address

  startY += 10;
  startY = addressCustomer(
    doc,
    printData.address,
    startY,
    fontSizes.NormalFontSize,
    lineSpacing
  );

  // <><>><><>><>><><><><><>>><><<><><><><>
  // INVOICE DATA
  // <><>><><>><>><><><><><>>><><<><><><><>

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Invoicenumber, -date and subject

  startY = heading(doc, printData, startY, fontSizes, lineSpacing);

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Table with items

  startY = table(doc, printData, startY, fontSizes.NormalFontSize, lineSpacing);

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Totals

  startY = totals(
    doc,
    printData,
    startY,
    fontSizes.NormalFontSize,
    lineSpacing
  );

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Text

  startY = text(
    doc,
    printData.invoice.text,
    startY,
    fontSizes.NormalFontSize,
    lineSpacing
  );

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Footer

  footer(doc, printData, fontSizes.SmallFontSize, lineSpacing);

  // <><>><><>><>><><><><><>>><><<><><><><>
  // REPEATED PAGE COMPONENTS
  // <><>><><>><>><><><><><>>><><<><><><><>

  const pageNr = doc.internal.getNumberOfPages();

  // <><>><><>><>><><><><><>>><><<><><><><>
  // Fold Marks

  const foldX = 12;
  const foldMarksY = [288, 411, 585];
  let n = 0;

  while (n < pageNr) {
    n++;

    doc.setPage(n);

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(0.5);

    foldMarksY.map((valueY) => {
      doc.line(foldX, valueY, foldX + 23, valueY);
    });
  }
  // <><>><><>><>><><><><><>>><><<><><><><>
  // Page Numbers

  if (pageNr > 1) {
    n = 0;
    doc.setFontSize(fontSizes.SmallFontSize);

    while (n < pageNr) {
      n++;

      doc.setPage(n);

      doc.text(n + " / " + pageNr, pageCenterX, pageHeight - 20, "center");
    }
  }

  // <><>><><>><>><><><><><>>><><<><><><><>
  // PRINT
  // <><>><><>><>><><><><><>>><><<><><><><>

  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // post title. and margin-top + margin-left
  // doc.text("Closed posts within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`Calculated_Invoice_${dateStr}.pdf`);
};

export default generateCalculatedInvoice;

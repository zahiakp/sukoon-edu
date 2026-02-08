import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit"; // Use the browser-compatible fontkit

export async function fillThanksNote(name: string, amount: string) {
  try {
    // Fetch the PDF template
    const templateUrl = "/pdf/Thanks Letter temp.pdf"; // Path to your template PDF in the public folder
    const response = await fetch(templateUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    const templateBytes = await response.arrayBuffer();

    // Load a PDFDocument from the template
    const pdfDoc = await PDFDocument.load(templateBytes);

    pdfDoc.registerFontkit(fontkit);

    // Fetch the regular font (e.g., Roboto-Regular.ttf)
    const regularFontUrl = "/font/DarkerGrotesque-Regular.ttf"; // Path to your regular font file
    const regularFontResponse = await fetch(regularFontUrl);

    if (!regularFontResponse.ok) {
      throw new Error(
        `Failed to fetch regular font: ${regularFontResponse.statusText}`,
      );
    }

    const regularFontBytes = await regularFontResponse.arrayBuffer();

    // Embed the regular font
    const regularFont = await pdfDoc.embedFont(regularFontBytes);

    // Fetch the bold font (e.g., Roboto-Bold.ttf)
    const boldFontUrl = "/font/DarkerGrotesque-SemiBold.ttf"; // Path to your bold font file
    const boldFontResponse = await fetch(boldFontUrl);

    if (!boldFontResponse.ok) {
      throw new Error(
        `Failed to fetch bold font: ${boldFontResponse.statusText}`,
      );
    }

    const boldFontBytes = await boldFontResponse.arrayBuffer();

    // Embed the bold font
    const boldFont = await pdfDoc.embedFont(boldFontBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Draw the details on the PDF using the custom font

    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const { width } = firstPage.getSize();
    const dateWidth = regularFont.widthOfTextAtSize(today, 15.13);

    // Draw Date (Right Aligned)
    firstPage.drawText(`${today}`, {
      x: width - 80 - dateWidth,
      y: 655,
      size: 15.13,
      font: regularFont,
      color: rgb(0, 0, 0),
    });

    // Greeting (Mixed Weight)
    const dearText = "Dear ";
    const dearWidth = regularFont.widthOfTextAtSize(dearText, 18);

    firstPage.drawText(dearText, {
      x: 80,
      y: 615,
      size: 18,
      font: regularFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(`${name},`, {
      x: 80 + dearWidth,
      y: 615,
      size: 18,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    // Thanks Content
    const paragraphs = [
      `Warm greetings from Sukoon Edu Foundation.`,
      `We sincerely thank you for your generous contribution of ${amount}/- rupees to Sukoon Edu Foundation. Your support and trust in our mission are deeply valued and appreciated.`,
      `Your contribution enables us to continue our efforts to provide educational opportunities, nutrition support, and essential learning resources to children from economically and socially marginalised backgrounds. Through your generosity, we are able to make a tangible difference in the lives of children and families who need it the most.`,
      `Your belief in our vision strengthens our commitment to build a future where every child has the right to dream, learn, and achieve their full potential. We are grateful to have supporters like you who stand with us in this journey of hope, dignity, and transformation.`,
      `We assure you that your support is utilised with transparency, responsibility, and care. We look forward to your continued association and support in the days ahead.`,
      `With heartfelt thanks and warm regards,`,
    ];

    const MARGIN_LEFT = 80;
    const MARGIN_RIGHT = 80;
    const DRAW_WIDTH = width - MARGIN_LEFT - MARGIN_RIGHT;
    const FONT_SIZE = 15;
    const LINE_HEIGHT = 16;
    let currentY = 590;

    const amountText = `${amount}/-`;

    for (let pIdx = 0; pIdx < paragraphs.length; pIdx++) {
      const text = paragraphs[pIdx];
      const words = text.split(" ");
      let currentLine: string[] = [];
      let currentLineWidth = 0;

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const isBoldWord = word === amountText;
        const wordFont = isBoldWord ? boldFont : regularFont;
        const wordWidth = wordFont.widthOfTextAtSize(word + " ", FONT_SIZE);

        if (
          currentLineWidth + wordWidth > DRAW_WIDTH &&
          currentLine.length > 0
        ) {
          // Justify and draw full line
          let actualLineWidth = 0;
          for (const w of currentLine) {
            const wIsBold = w === amountText;
            const wFont = wIsBold ? boldFont : regularFont;
            actualLineWidth += wFont.widthOfTextAtSize(w, FONT_SIZE);
          }
          // Add space widths
          actualLineWidth +=
            regularFont.widthOfTextAtSize(" ", FONT_SIZE) *
            (currentLine.length - 1);

          const totalGap = DRAW_WIDTH - actualLineWidth;
          const gapCount = currentLine.length - 1;

          if (gapCount > 0 && pIdx < paragraphs.length - 1) {
            // Only justify if not last paragraph or if we want last line left-aligned
            let xOffset = MARGIN_LEFT;
            const extraSpace = totalGap / gapCount;
            for (let j = 0; j < currentLine.length; j++) {
              const w = currentLine[j];
              const wIsBold = w === amountText;
              const wFont = wIsBold ? boldFont : regularFont;
              firstPage.drawText(w, {
                x: xOffset,
                y: currentY,
                size: FONT_SIZE,
                font: wFont,
                color: rgb(0, 0, 0),
              });
              xOffset +=
                wFont.widthOfTextAtSize(w, FONT_SIZE) +
                regularFont.widthOfTextAtSize(" ", FONT_SIZE) +
                extraSpace;
            }
          } else {
            // Last line of paragraph or only 1 word: Left align
            let xOffset = MARGIN_LEFT;
            for (let j = 0; j < currentLine.length; j++) {
              const w = currentLine[j];
              const wIsBold = w === amountText;
              const wFont = wIsBold ? boldFont : regularFont;
              firstPage.drawText(w, {
                x: xOffset,
                y: currentY,
                size: FONT_SIZE,
                font: wFont,
                color: rgb(0, 0, 0),
              });
              xOffset +=
                wFont.widthOfTextAtSize(w, FONT_SIZE) +
                regularFont.widthOfTextAtSize(" ", FONT_SIZE);
            }
          }

          currentY -= LINE_HEIGHT;
          currentLine = [word];
          // Reset currentLineWidth for the first word of the next line
          const nextIsBold = word === amountText;
          const nextFont = nextIsBold ? boldFont : regularFont;
          currentLineWidth = nextFont.widthOfTextAtSize(word + " ", FONT_SIZE);
        } else {
          currentLine.push(word);
          currentLineWidth += wordWidth;
        }
      }

      // Draw the last line of the paragraph (Left Aligned)
      if (currentLine.length > 0) {
        let xOffset = MARGIN_LEFT;
        for (let j = 0; j < currentLine.length; j++) {
          const w = currentLine[j];
          const wIsBold = w === amountText;
          const wFont = wIsBold ? boldFont : regularFont;
          firstPage.drawText(w, {
            x: xOffset,
            y: currentY,
            size: FONT_SIZE,
            font: wFont,
            color: rgb(0, 0, 0),
          });
          xOffset +=
            wFont.widthOfTextAtSize(w, FONT_SIZE) +
            regularFont.widthOfTextAtSize(" ", FONT_SIZE);
        }
        currentY -= LINE_HEIGHT;
      }
      currentY -= 10; // Extra space between paragraphs
    }

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // Create a link element to download the PDF
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `ThanksNote_${name}.pdf`;
    link.click();

    console.log("PDF filled and downloaded successfully!");
  } catch (error) {
    console.error("Error in fillPdfTemplate:", error);
  }
}

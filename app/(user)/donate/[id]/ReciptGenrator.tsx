import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'; // Use the browser-compatible fontkit

export async function fillPdfTemplate(data:any) {
    try {
        // Fetch the PDF template
        const templateUrl = '/pdf/Payment Receipt.pdf'; // Path to your template PDF in the public folder
        const response = await fetch(templateUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        }

        const templateBytes = await response.arrayBuffer();

        // Load a PDFDocument from the template
        const pdfDoc = await PDFDocument.load(templateBytes);

        pdfDoc.registerFontkit(fontkit);

        // Fetch the regular font (e.g., Roboto-Regular.ttf)
        const regularFontUrl = '/font/DarkerGrotesque-Regular.ttf'; // Path to your regular font file
        const regularFontResponse = await fetch(regularFontUrl);

        if (!regularFontResponse.ok) {
            throw new Error(`Failed to fetch regular font: ${regularFontResponse.statusText}`);
        }

        const regularFontBytes = await regularFontResponse.arrayBuffer();

        // Embed the regular font
        const regularFont = await pdfDoc.embedFont(regularFontBytes);

        // Fetch the bold font (e.g., Roboto-Bold.ttf)
        const boldFontUrl = '/font/DarkerGrotesque-SemiBold.ttf'; // Path to your bold font file
        const boldFontResponse = await fetch(boldFontUrl);

        if (!boldFontResponse.ok) {
            throw new Error(`Failed to fetch bold font: ${boldFontResponse.statusText}`);
        }

        const boldFontBytes = await boldFontResponse.arrayBuffer();

        // Embed the bold font
        const boldFont = await pdfDoc.embedFont(boldFontBytes);

        // Get the first page of the document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // Draw the details on the PDF using the custom font


        const repitLabelWidth = regularFont.widthOfTextAtSize('Receipt No: ', 15.13);
        const dateLabelWidth = regularFont.widthOfTextAtSize('Date: ', 15.13);

        firstPage.drawText(`Receipt No: `, {
            x: 86,
            y: 635,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });
        
        firstPage.drawText(`${data.receiptNo}`, {
            x: 86 + repitLabelWidth,
            y: 635,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Date: `, {
            x: 86,
            y: 615,
            size: 15.13,
            font:regularFont ,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.date}`, {
            x: 86 + dateLabelWidth,
            y: 615,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

// ----------------------donor details----------------------------------

const nameLabelWidth = regularFont.widthOfTextAtSize('Name: ', 15.13);
const phoneLabelWidth = regularFont.widthOfTextAtSize('Mobile No: ', 15.13);
const emailLabelWidth = regularFont.widthOfTextAtSize('Email: ', 15.13);
const pancardLabelWidth = regularFont.widthOfTextAtSize('Pan Card No: ', 15.13);

        firstPage.drawText(`Name: `, {
            x: 86,
            y: 538,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });


        firstPage.drawText(`${data.name}`, {
            x: 86 + nameLabelWidth,
            y: 538,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Mobile No: `, {
            x: 86,
            y: 521,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.phone}`, {
            x: 86 + phoneLabelWidth,
            y: 521,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Email: `, {
            x: 86,
            y: 502,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.email}`, {
            x: 86 + emailLabelWidth,
            y: 502,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Pan Card No: `, {
            x: 86,
            y: 484,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.pancard}`, {
            x: 86 + pancardLabelWidth,
            y: 484,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

// ----------------------transaction details----------------------------------

const merchantIdLabelWidth = regularFont.widthOfTextAtSize('Merchant ID: ', 15.13);
const transactionIdLabelWidth = regularFont.widthOfTextAtSize('Transaction ID: ', 15.13);
const amountLabelWidth = regularFont.widthOfTextAtSize('Amount: ', 15.13);
const currencyLabelWidth = regularFont.widthOfTextAtSize('Currency: ', 15.13);
const modeOfPaymentLabelWidth = regularFont.widthOfTextAtSize('Payment mode: ', 15.13);
const paymentStatusLabelWidth = regularFont.widthOfTextAtSize('Payment Status: ', 15.13);


        firstPage.drawText(`Merchant ID: `, {
            x: 86,
            y: 417,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.merchantId}`, {
            x: 86 + merchantIdLabelWidth,
            y: 417,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Transaction ID: `, {
            x: 86,
            y: 398,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.transactionId}`, {
            x: 86 + transactionIdLabelWidth,
            y: 398,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Amount: `, {
            x: 86,
            y: 379,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${(data.amount / 100).toFixed(2)}`, {
            x: 86 + amountLabelWidth,
            y: 379,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Currency: `, {
            x: 86,
            y: 360,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.currency}`, {
            x: 86 + currencyLabelWidth,
            y: 360,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Payment mode: `, {
            x: 86,
            y: 341,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`${data.modeOfPayment}`, {
            x: 86 + modeOfPaymentLabelWidth,
            y: 341,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Payment Status: `, {
            x: 86,
            y: 322,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(`${data.paymentStatus}`, {
            x: 86 + paymentStatusLabelWidth,
            y: 322,
            size: 15.13,
            font: boldFont,
            color: rgb(0, 0, 0),
        });


        const { width } = firstPage.getSize();
        const text = `We've received your payment of ${data.amount} INR`;
        const textWidth = regularFont.widthOfTextAtSize(text, 15.13);
        const x = (width - textWidth) / 2;

        firstPage.drawText(text, {
            x,
            y: 162,
            size: 15.13,
            font: regularFont,
            color: rgb(0, 0, 0),
        });

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save();

        // Create a Blob from the PDF bytes
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Create a link element to download the PDF
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'payment_receipt.pdf';
        link.click();

        console.log('PDF filled and downloaded successfully!');
    } catch (error) {
        console.error('Error in fillPdfTemplate:', error);
    }
}
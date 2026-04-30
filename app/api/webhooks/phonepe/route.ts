import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import axios from "axios";
import { API_KEY, ROOT_URL } from "@/components/data/func";

// PhonePe Credentials
const SALT_KEY = "5368e0ab-2b33-40d4-b3c5-76ca3f2dd929";
const SALT_INDEX = 1;

/**
 * PhonePe Webhook Listener
 * Documentation: https://developer.phonepe.com/payment-gateway/backend-sdk/nodejs-be-sdk/api-reference-node-js/webhook-handling#nav-request
 */
export async function POST(req: NextRequest) {
  try {
    const xVerify = req.headers.get("x-verify");
    const body = await req.json();

    if (!xVerify || !body.response) {
      console.error("Missing X-VERIFY header or response payload");
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // 1. Verify Signature
    const stringToVerify = body.response + SALT_KEY;
    const sha256 = crypto
      .createHash("sha256")
      .update(stringToVerify)
      .digest("hex");
    const checksum = `${sha256}###${SALT_INDEX}`;

    if (checksum !== xVerify) {
      console.error("Webhook signature mismatch", {
        received: xVerify,
        calculated: checksum,
      });
      return NextResponse.json(
        { error: "Signature mismatch" },
        { status: 401 },
      );
    }

    // 2. Decode Payload
    const decodedPayload = Buffer.from(body.response, "base64").toString(
      "utf-8",
    );
    const paymentData = JSON.parse(decodedPayload);

    console.log("PhonePe Webhook Received:", paymentData);

    // 3. Update Database (PHP Backend)
    // Map PhonePe webhook data to our uploadTransaction format
    let isSuccess = false;
    let data: any = null;

    // Handle Modern (PgV2/Standard Checkout) Structure
    if (
      paymentData.type === "PG_ORDER_COMPLETED" ||
      paymentData.type === "CHECKOUT_ORDER_COMPLETED"
    ) {
      isSuccess = paymentData.payload.state === "COMPLETED";
      data = paymentData.payload;
    }
    // Handle Legacy/Alternative Structure
    else if (paymentData.success && paymentData.code === "PAYMENT_SUCCESS") {
      isSuccess = true;
      data = paymentData.data;
    }

    if (isSuccess && data) {
      const details = {
        name: "Anonymous (Webhook)",
        email: "N/A",
        phone: "N/A",
        pancard: "N/A",
        receiptNo: "REC-WH-" + Date.now(),
        amount: (data.amount / 100).toFixed(2),
        transactionId:
          data.transactionId || data.merchantTransactionId || data.orderId,
        merchantId: data.merchantId,
        modeOfPayment: data.paymentInstrument?.type || "N/A",
        paymentStatus: data.state || "COMPLETED",
        currency: "INR",
        type: "webhook",
      };

      // Call PHP backend
      await uploadToBackend(details);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error processing PhonePe webhook:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

async function uploadToBackend(values: any) {
  const data = JSON.stringify({
    name: values.name,
    phone: values.phone,
    receiptNo: values.receiptNo,
    amount: values.amount,
    email: values.email,
    pancard: values.pancard,
    transactionId: values.transactionId,
    merchantId: values.merchantId,
    paymentStatus: values.paymentStatus,
    modeOfPayment: values.modeOfPayment,
    curreny: values.currency || "INR",
    type: values.type,
    date: new Date().toISOString(),
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${ROOT_URL}transactions/actions.php?api=${API_KEY}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("PHP Backend Update:", response.data);
  } catch (error: any) {
    console.error("Failed to update PHP backend via webhook:", error.message);
  }
}

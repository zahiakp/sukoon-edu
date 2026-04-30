import crypto from "crypto";
import axios from "axios";

const SALT_KEY = "5368e0ab-2b33-40d4-b3c5-76ca3f2dd929";
const SALT_INDEX = 1;
const WEBHOOK_URL = "http://localhost:3000/api/webhooks/phonepe";

async function testWebhook() {
  console.log("Starting Webhook Test...");

  const payload = {
    success: true,
    code: "PAYMENT_SUCCESS",
    message: "Payment successfully completed",
    data: {
      merchantId: "M228XR6AHKBZ0",
      transactionId: "MTETST" + Date.now(),
      amount: 50000, // 500.00
      state: "COMPLETED",
      responseCode: "SUCCESS",
      paymentInstrument: {
        type: "UPI",
        utr: "TESTUTR123456",
      },
    },
  };

  const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");

  const stringToVerify = base64Payload + SALT_KEY;
  const sha256 = crypto
    .createHash("sha256")
    .update(stringToVerify)
    .digest("hex");
  const xVerify = `${sha256}###${SALT_INDEX}`;

  const body = {
    response: base64Payload,
  };

  try {
    console.log("Sending POST to:", WEBHOOK_URL);
    console.log("X-VERIFY:", xVerify);

    const response = await axios.post(WEBHOOK_URL, body, {
      headers: {
        "Content-Type": "application/json",
        "x-verify": xVerify,
      },
    });

    console.log("Response Status:", response.status);
    console.log("Response Body:", response.data);

    if (response.data.success) {
      console.log("✅ Webhook test passed!");
    } else {
      console.log("❌ Webhook test failed!");
    }
  } catch (error: any) {
    console.error(
      "❌ Error sending webhook:",
      error.response?.data || error.message,
    );
  }
}

testWebhook();

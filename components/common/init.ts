"use server";

import axios from "axios";
import crypto from "crypto";

export async function initPayment(amount: number) {
  const merchantTransactionId = "M" + Date.now();
  const data: any = {
    merchantId: "M228XR6AHKBZ0",
    merchantTransactionId: merchantTransactionId,
    merchantUserId: "MUID" + "123",
    amount: amount * 100,
    redirectUrl: `https://mysukoon.in/donate/${merchantTransactionId}`,
    callbackUrl: `https://mysukoon.in/donate`,
    redirectMode: "REDIRECT",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };
// M228XR6AHKBZ0
// 5368e0ab-2b33-40d4-b3c5-76ca3f2dd929
  const payload = JSON.stringify(data);

  const payloadMain = Buffer.from(payload).toString("base64");
  const keyIndex = 1;
  const SALT_KEY: string = "5368e0ab-2b33-40d4-b3c5-76ca3f2dd929";
  const string = payloadMain + "/pg/v1/pay" + SALT_KEY;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;
  const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
  // const dev_url: string =
  //   "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

  const headers: any = {
    accept: "application/json",
    "Content-Type": "application/json",
    "X-VERIFY": checksum,
  };

  const options = {
    method: "POST",
    url: prod_URL,
    headers: headers,
    data: {
      request: payloadMain,
    },
  };
  const resp: any = await axios
    .request(options)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error: any) {
      console.error(error);
      return null;
    });
  return resp;
}
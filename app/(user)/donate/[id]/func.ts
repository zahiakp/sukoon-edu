import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";

export async function CheckPaymentStatus(transactionId: any) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("transactionId", transactionId); // Join categories into a comma-separated string

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${ROOT_URL}paymentStatus.php`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    console.error("Error:", error.message);
    return { success: false, message: error.message }; // Return error message
  }
}


export async function getTransactionIdCount(transactionId:any) {
  const URL: string = `${ROOT_URL}transactions/actions.php?api=${API_KEY}&action=getTransactionIdCount&transactionId=${transactionId}`;
  
  
  try {
    const response = await axios.get(URL);

    if (response.status === 200) {
      return response.data;
      
    } else {
      console.error("Failed to get transactionId Count", response.statusText);
      return null; 
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}


export async function uploadTransaction(values: any) {
  // const URL: string = `${ROOT_URL}transactions/actions.php?api=${API_KEY}`;
  // console.log('values', values);

  // try {
  //   const response = await axios.post(
  //     URL,
  //     JSON.stringify({
  //       name: values.name,
  //       phone: values.phone,
  //       email: values.email,
  //       pancard: values.pancard,
  //       receiptNo: values.receiptNo,
  //       amount: values.amount,
  //       transactionId: values.transactionId,
  //       merchantId: values.merchantId,
  //       paymentStatus: values.paymentStatus,
  //       modeOfPayment: values.modeOfPayment,
  //       curreny: values.curreny,
  //     })
  //   );

  //   if (response.status === 201) {
  //     const data = response.data;
  //     console.log("Transaction Added");
  //     return { success: true, data };
  //   } else {
  //     const data = response.data;
  //     console.log("Failed to Add Transaction");
  //     return { success: false, data };
  //   }
  // } catch (error: any) {
  //   console.log(error.message);
  //   return { success: false, message: error.message };
  // }

console.log(values);


  const axios = require('axios');
  let data = JSON.stringify({
        "name": values?.name,
  "phone": values?.phone,
  "receiptNo": values?.receiptNo,
  "amount": values?.amount,
        "email": values?.email,
        "pancard": values?.pancard,
        "transactionId": values?.transactionId,
        "merchantId": values?.merchantId,
        "paymentStatus": values?.paymentStatus,
        "modeOfPayment": values?.modeOfPayment,
        "curreny": values?.curreny || 'INR',
        "type": values?.type,
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${ROOT_URL}transactions/actions.php?api=${API_KEY}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Error:", error.message);
    return { success: false, message: error.message };
  }
  

}

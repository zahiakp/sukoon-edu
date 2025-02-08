import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";

// export async function CheckPaymentStatus(
//   transactionId: string,
// ) {
//   const URL: string = `${ROOT_URL}paymentStatus.php`;
// const formData = {

// }
//   try {
//     const response = await axios.post(
//       URL,
//       JSON.stringify({
//         transactionId
//       })
//     );

//     if (response.data.success === 'success') {
//       const data = response.data;
//       console.log("Payment status fetched successfully");
//       return data;
//     } else {
//       const data = response.data;
//       console.log("Failed to fetch payment status");
//       return data;
//     }
//   } catch (error: any) {
//     console.log(error.message);
//     return false;
//   }
// }
// export async function CheckPaymentStatus(
//   transactionId: string,
// ) {
//   const axios = require('axios');
//   const FormData = require('form-data');
//   let data = new FormData();
//   data.append('transactionId', transactionId);
  
//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'http://localhost/sukoonedu-backend/paymentStatus.php',
//     headers: { 
//       ...data.getHeaders()
//     },
//     data : data
//   };
  
//   axios.request(config)
//   .then((response:any) => {
//     // console.log(JSON.stringify(response.data));
//     return response.data;
//   })
//   .catch((error:any) => {
//     console.log(error);
//   });
// }


export async function CheckPaymentStatus(transactionId:any) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("transactionId", transactionId); // Join categories into a comma-separated string

  const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
  };

  try {
      const response = await fetch(`${ROOT_URL}paymentStatus.php`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result); 
    return result
  } catch (error: any) {
      console.error("Error:", error.message);
      return { success: false, message: error.message }; // Return error message
  }
}
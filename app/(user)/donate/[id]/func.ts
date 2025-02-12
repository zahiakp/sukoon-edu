import { ROOT_URL } from "@/components/data/func";

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

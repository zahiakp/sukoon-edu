import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";

export async function sendEmail(
    name: string,
    contact: any,
    email: string,
    message: string
  ) {
    const URL: string = `${ROOT_URL}email.php?api=${API_KEY}`;
    try{
        const response = await axios.post(
            URL,
            JSON.stringify({
              name,contact,email,message,to:"connect@mysukoon.in",from:"no-replay-connect@mysukoon.in"
            })
          );
          if (response.status === 201) {
            const data = response.data;
            console.log("Mail Sended");
            return true;
          } else {
            const data = response.data;
            console.log("Failed to send mail:",data);
            return false;
          }
    } catch (error: any) {
        console.log(error.message);
        return false;
      }
  }

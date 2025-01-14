// "use server";

// import { API_KEY, ROOT_URL } from "../../components/data/const";


// export async function sendEmail(
//   name: string,
//   contact: any,
//   email: string,
//   message: string
// ) {
//   const URL: string = `${ROOT_URL}guest/contact/sendmail.php`;
//   const formData = new FormData();
//   formData.append("api", API_KEY);
//   formData.append("name", name);
//   formData.append("contact", contact);
//   formData.append("email", email);
//   formData.append("message", message);
//   const resp = await fetch(URL, {
//     method: "POST",
//     body: formData,
//   });
//   const data = await resp.json();
//   return data;
// }

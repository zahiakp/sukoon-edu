import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";
import Cookies from 'js-cookie'
export async function applyForm(
  invId: any,
  name: string,
  place: string,
  contact: any,
  email: string,
  message: string,
  cv: any
) {
  const URL: string = `${ROOT_URL}guest/involvements/apply.php?api=${API_KEY}`;
  const token = Cookies.get("token");

  try {
    const response = await axios.post(
      URL,
      JSON.stringify({
        involvement_id: invId,
        name: name,
        place: place,
        contact: contact,
        email: email,
        message: message,
        cv: cv,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      const data = response.data;
      console.log("News Added", data);
      return true;
    } else {
      const data = response.data;
      console.log("Failed to Add news", data);
      return false;
    }
  } catch (error: any) {
    console.log("Error");
    return error;
  }
}

export async function uploadCV(file: any, folder: string) {
  const URL: string = `${ROOT_URL}admin/upload.php?api=${API_KEY}`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const resp = await fetch(URL, {
    method: "POST",
    body: formData,
  });
  const data = await resp.json();
  return data;
}

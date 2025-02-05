import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";

export async function uploadCV(file: any) {
  const URL: string = `${ROOT_URL}upload.php?api=${API_KEY}`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", 'CVs');

  const resp = await fetch(URL, {
    method: "POST",
    body: formData,
  });
  const data = await resp.json();
  if (data.success) {
    return data;
  } else {
    return false;
  }
}
export async function uploadApplication(
  values: any,filename: string,invId: any
) {
  const URL: string = `${ROOT_URL}applications/actions.php?api=${API_KEY}`;

  try {
    const response = await axios.post(
      URL,
      JSON.stringify({
        name:values.name,
        place:values.place,
        cv:filename,
        email:values.email,
        contact:values.contact,
        comment:values.message,
        invId:invId
      })
    );

    if (response.status === 201) {
      console.log("Application Added");
      return true;
    } else {
      console.log("Failed to Add Application");
      return false;
    }
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
}
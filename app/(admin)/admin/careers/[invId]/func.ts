import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";

export async function getApplicationsbyInvid(
    id:string
) {
  const URL: string = `${ROOT_URL}applications/actions.php?api=${API_KEY}&invId=${id}`;
  
  try {
    const response = await axios.get(URL);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Failed to get career ${id} :`, response.statusText);
      return null; 
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
"use server";
import { ROOT_URL } from "@/components/data/func";
import axios from "axios";
import { cookies } from "next/headers";

export async function getInvolvementsGuest(id?: any) {
  const idQ: string = id ? `?id=${id}` : "";
  const URL: string = `${ROOT_URL}guest/involvements/actions.php${idQ}`;

  const cookiestore = cookies();
  const token = (await cookiestore).get("token")?.value;

  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error: any) {
    console.log(error);
    return [];
  }
}

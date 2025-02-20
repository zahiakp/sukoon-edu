import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";

export async function uploadFile(file: any,folder:any) {
  const URL: string = `${ROOT_URL}upload.php?api=${API_KEY}`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

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
export async function uploadAdmissionForm(
  values: any,
) {
  const axios = require('axios');
  let data = JSON.stringify({
        name: values.name,
        dob: values.dob,
        guardianName: values.guardianName,
        phone: values.phone,
        gender: values.gender,
        email: values.email,
        address: values.address,
        recentshcool: values.recentshcool,
        schooladdress: values.schooladdress,
        passingyear: values.passingyear,
        examcenter: values.examcenter,
        centerState: values.centerState,
        photo: values.photo,
        marksheet: values.marksheet,
        certificate: values.certificate,
      })

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${ROOT_URL}admission/actions.php?api=${API_KEY}`,
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

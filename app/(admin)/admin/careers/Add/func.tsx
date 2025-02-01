
import { API_KEY, ROOT_URL } from "@/components/data/func";
import axios from "axios";


export async function uploadcareer(
  title: string,
  body: string,
  type: string,
) {
  const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}`;

  try {
    const response = await axios.post(
      URL,
      JSON.stringify({
        title,body,type
      })
    );

    if (response.status === 201) {
      const data = response.data;
      console.log("Career Added");
      return true;
    } else {
      const data = response.data;
      console.log("Failed to Add Career");
      return false;
    }
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
}




export async function updateCareer(
  id:string,
  title: string,
  body: string,
  type: string,
) {
  const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&id=${id}`;

  try {
    const response = await axios.put(
      URL,
      JSON.stringify({
        title,body,type
      })
    );

    if (response.status === 200) {
      const data = response.data;
      console.log("Career Updated");
      return true;
    } else {
      const data = response.data;
      console.log("Failed to Update Career");
      return false;
    }
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
}
// export async function uploadImage(file: any,folder:string) {
//   const URL: string = `${ROOT_URL}admin/upload.php?api=${API_KEY}`;
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("folder", folder);

//   const resp = await fetch(URL, {
//     method: "POST",
//     body: formData,
//   });
//   const data = await resp.json();
//   return data;
// }




export async function getCareer(
    quary:any
) {
  const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&${quary}`;
  
  try {
    const response = await axios.get(URL);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to get Career:", response.statusText);
      return null; 
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}


export async function getCareerbyId(
    id:string
) {
  const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&id=${id}`;
  
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

export async function getCareerbyCategory(
  category:string
) {
const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&category=${category}`;

try {
  const response = await axios.get(URL);

  if (response.status === 200) {
    return response.data;
  } else {
    console.error(`Failed to get ${category} Careers :`, response.statusText);
    return null; 
  }
} catch (error) {
  console.error("Error:", error);
  return null;
}
}

export async function getCareerbyCount(
  count:string
) {
const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&count=${count}`;

try {
  const response = await axios.get(URL);

  if (response.status === 200) {
    return response.data;
  } else {
    console.error(`Failed to get ${count} Career:`, response.statusText);
    return null; 
  }
} catch (error) {
  console.error("Error:", error);
  return null;
}
}

export async function getCareerbyCategorywithCount(
  count:string,category:string
) {
const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&count=${count}&category=${category}`;

try {
  const response = await axios.get(URL);

  if (response.status === 200) {
    return response.data;
  } else {
    console.error(`Failed to get ${count} Career:`, response.statusText);
    return null; 
  }
} catch (error) {
  console.error("Error:", error);
  return null;
}
}


export async function getCareersasNewArray(
) {
const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&action=catbasedarray`;

try {
  const response = await axios.get(URL);

  if (response.status === 200) {
    return response.data;
  } else {
    console.error(`Failed to get Career:`, response.statusText);
    return null; 
  }
} catch (error) {
  console.error("Error:", error);
  return null;
}
}




export async function deleteCareer(
    id:string
) {
  const URL: string = `${ROOT_URL}careers/actions.php?api=${API_KEY}&id=${id}`;
  
  try {
    const response = await axios.delete(URL);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to delete Career:", response.statusText);
      return null; 
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
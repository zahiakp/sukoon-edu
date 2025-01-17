import React from "react";
import UploadForm from "./demoform";
// import dynamic from "next/dynamic";
// import UploadForm from "./UploadForm";
// import UploadForm from "./Form";
import dynamic from "next/dynamic";
import AdminLayout from "@/components/Layout/AdminLayout";
function page() {
const UploadForm = dynamic(() => import('./Form'));

  return (
    <AdminLayout>
        {/* <UploadForm /> */}
        <UploadForm/>
    </AdminLayout>
  );
}

export default page;

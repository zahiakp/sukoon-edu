import React from "react";
import { decodeId } from "@/components/common/decode";
import dynamic from "next/dynamic";
import AdminLayout from "@/components/Layout/AdminLayout";
import { getCareerbyId } from "../../Add/func";
async function page({ params }: { params: any }) {
  const UploadForm = dynamic(() => import('./Form'));
  const ids = decodeId(params?.id);
  const ThisCareer = await getCareerbyId(ids);
  return (
    <AdminLayout>
      <div className="flex justify-center">
        <UploadForm data={ThisCareer?.data} />
      </div>
    </AdminLayout>
  );
}

export default page;

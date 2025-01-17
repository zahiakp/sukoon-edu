import React from "react";
import { getArticlebyId } from "../../Add/func";
import { decodeId } from "@/components/common/decode";
import dynamic from "next/dynamic";
import AdminLayout from "@/components/Layout/AdminLayout";
async function page({ params }: { params: any }) {
  const UploadForm = dynamic(() => import('./Form'));
  const ids = decodeId(params?.id);
  const ThisArticle = await getArticlebyId(ids);
  return (
    <AdminLayout>
      <div className="flex justify-center">
        <UploadForm data={ThisArticle?.data} />
      </div>
    </AdminLayout>
  );
}

export default page;

import React from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import Content from "./Content";
export const dynamic = "force-dynamic";

async function page() {

  return (
    <>
      <AdminLayout>
        <Content/>
     </AdminLayout>
    </>
  );
}

export default page;

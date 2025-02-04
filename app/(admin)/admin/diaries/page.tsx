import React from "react";
import Content from "./Content";
import AdminLayout from "@/components/Layout/AdminLayout";
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

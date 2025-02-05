"use client";
import { decodeId } from "@/components/common/decode";
import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";
import dynamic from "next/dynamic";
import Content from "./Content";
import { useParams } from "next/navigation";

function Page() {
    const params = useParams();
  const invId = params.invId ? decodeId(params.invId as string) : null;
//   const Content = dynamic(() => import("./Content"), { ssr: false });

  return (
    <AdminLayout>
      <Content invId={invId} />
    </AdminLayout>
  );
}

export default Page;

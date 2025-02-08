"use client";
import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import Link from "next/link";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Spinner from "@/components/common/Spinner";
import { decodeId, encodeId } from "@/components/common/decode";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { getApplicationsbyInvid } from "./func";
import Empty from "@/components/common/Empty";

interface Application {
  id: string;
  name: string;
  place: string;
  contact: string;
}

function Content({ invId }: { invId: any }) {
  const [applications, setApplications] = useState<Application[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApplicationsbyInvid(invId);
        console.log(data?.data);

        setApplications(data?.data);
      } catch (err) {
        setError("Failed to fetch applications");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [invId]);

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  console.log("invId", invId);

  return (
    <>
      <main className="w-full flex justify-between">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-zinc-900 text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href="/admin">Dashboard</Link>
                </li>
                <li>
                  <Link href="/admin/careers">Careers</Link>
                </li>
                <li>Applications</li>
              </ul>
            </div>
            <h1 className="text-3xl font-[200] flex items-center gap-2">
              Applications{" "}
            </h1>
          </div>
        </div>
      </main>
      {applications && applications.length > 0 ?
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
        {applications?.map((item: Application) => (
          <div
            key={item.id}
            className="p-5 border flex gap-5 rounded-xl bg-white hover:border-blue-500 duration-300 cursor-pointer hover:scale-[1.01]"
          >
            <div className="bg-blue-50 rounded-xl">
              <img src="\svg\pdf-file.svg" alt="" className="h-32" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-blue-700">{item.name}</h1>
              <p className="">{item.place}</p>
              <p className="font-bold">{item.contact}</p>
              <div>
                <div className="flex items-center gap-[6px] mt-2">
                  <Link href={'#'}
                    // href={`/admin/careers/${encodeId(item.id)}`}
                    className="bg-green-500 hover:bg-primary-600 flex items-center gap-2 text-white px-3 pr-4 py-1 rounded-lg"
                  >
                    {/* <CgArrowsExpandUpRight /> */}
                    View
                  </Link>
                  <Link href={'#'}
                    // href={`/admin/careers/${encodeId(item.id)}`}
                    className="bg-blue-500 hover:bg-primary-600 flex items-center gap-2 text-white px-3 pr-4 py-1 rounded-lg"
                  >
                    {/* <CgArrowsExpandUpRight /> */}
                    Download
                  </Link>
                  {/* <Link
                    data-tip="Edit"
                    href={`/admin/careers/Edit/${encodeId(item.id)}`}
                    className="tooltip h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center cursor-pointer"
                  >
                    <TbEdit className="text-lg text-white" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>: <div className="mt-10">
      <Empty error={"Application not found"}/></div> }
    </>
  );
}

export default Content;

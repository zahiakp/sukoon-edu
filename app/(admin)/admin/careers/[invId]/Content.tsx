"use client";
import React, { useEffect, useState } from "react";
import { TbEdit} from "react-icons/tb";
import Link from "next/link";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Spinner from "@/components/common/Spinner";
import { decodeId, encodeId } from "@/components/common/decode";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { getApplicationsbyInvid } from "./func";

interface Application {
  id: string;
  name: string;
  place: string;
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
        setError('Failed to fetch applications');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [invId]);

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;


  console.log('invId',invId);
  

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
        {applications?.map((item: Application) => (
          <div
            key={item.id}
            className="p-5 border rounded-lg bg-white hover:border-lime-500 duration-300 cursor-pointer hover:scale-[1.01]"
          ><div className="">
            <img src="\svg\pdf-file.svg" alt="" className="h-52 !-m-8"/>
          </div>
            
            <h1 className="text-2xl font-bold text-lime-700">
              {item.name}
            </h1>
            <div>
              <div className="flex items-center gap-[6px] mt-2">
                <Link
                  href={`/admin/careers/${encodeId(item.id)}`}
                  className="bg-green-500 hover:bg-primary-600 flex items-center gap-2 text-white px-3 pr-4 py-1 rounded-lg"
                >
                  <CgArrowsExpandUpRight />
                  CV
                </Link>
                <Link
                  data-tip="Edit"
                  href={`/admin/careers/Edit/${encodeId(item.id)}`}
                  className="tooltip h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center cursor-pointer"
                >
                  <TbEdit className="text-lg text-white" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;
"use client";
import React, { useEffect, useState } from "react";
import { TbEdit, TbPhotoUp } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { RiAddCircleFill } from "react-icons/ri";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Spinner from "@/components/common/Spinner";
import Empty from "@/components/common/Empty";
import { getRelativeTime } from "@/components/common/DateConvert";
import { MdEditDocument } from "react-icons/md";
import { encodeId } from "@/components/common/decode";
import { ROOT_URL } from "@/components/data/func";
import { getCareer } from "./Add/func";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import DeleteItem from "./Add/Delete";

function Content() {
  const [imageView, setImageView] = useState<any>(false);

  const Categories = [
    { label: "General", value: "General" },
    { label: "Education", value: "Education" },
    { label: "Health", value: "Health" },
    { label: "Culture", value: "Culture" },
    { label: "Commerce", value: "Commerce" },
    { label: "Agriculture", value: "Agriculture" },
    { label: "Living", value: "Living" },
  ];

  // ==============================================================

  const [news, setNews] = useState<any>("loading");
    const [totalRecords, setTotalRecords] = useState<any>("loading");
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
  
    useEffect(() => {
      fetchNews();
    }, [first, rows, selectedCategory]);
  
    const fetchNews = async () => {
      const page = first / rows + 1;
      const query = new URLSearchParams({
        page: page?.toString(),
        limit: rows?.toString(),
        search: searchQuery,
        category: selectedCategory, // Updated to match backend filter
      }).toString();
  
      const data = await getCareer(query);
      if (data.success) {
        setNews(data.data);
        setTotalRecords(data.total);
      }
    };
  
    const onPageChange = (e: PaginatorPageChangeEvent) => {
      setFirst(e.first);
      setRows(e.rows);
    };
  
    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        fetchNews();
      }
    };
  
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedCategory(value);
      // console.log(value);
  
      setFirst(0); // Reset pagination when changing category
    };





  return (
    <>
      <main className="w-full flex justify-between">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-zinc-900 text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href="/admin">Dashbord</Link>
                </li>
                <li>Careers</li>
              </ul>
            </div>
            <h1 className="text-3xl font-[200] flex items-center gap-2">
            Careers{" "}
              {totalRecords !== "loading" && (
                <span className="text-base ml-2 text-zinc-700 p-[6px] px-5 rounded-3xl bg-zinc-200/80">{`${totalRecords} Items`}</span>
              )}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-den">
          
          <div className="p-[8px] px-4 bg-white shadow-md rounded-lg flex items-center  gap-3">
            <input
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="outline-none "
              type="search"
              placeholder="Search"
            />
            <div>
              <IoSearchOutline className="text-xl" />
            </div>
          </div>{" "}
          <Link
            href={"/admin/careers/Add"}
            className="gap-2 cursor-pointer p-[8px] px-4 bg-zinc-800 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-md text-white w-fit shadow-lg flex items-center"
          >
            <RiAddCircleFill />
            Create New
          </Link>
        </div>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
        {news === "loading" ? (
          <Spinner />
        ) : news.length !== 0 ? (
          <>
            
            {news.map((item: any, index: number) => (
             <div
             key={item.id}
             className="p-5 border rounded-lg bg-white hover:border-lime-500 duration-300 cursor-pointer hover:scale-[1.01]"
           >
             <div
               className="text-xs px-2 py-1 bg-lime-100
                                   text-lime-800 inline-block rounded my-1 "
             >
               {item.type}
             </div>
             <h1 className="text-2xl font-bold text-lime-700">
               {item.title}
             </h1>
             {/* <p className="text-gray-500">
               {inv.description.substring(0, 50)}...
             </p> */}
             <article
                 className="line-clamp-2 mb-3"
                 dangerouslySetInnerHTML={{ __html: item.body.substring(0, 50) }}
               ></article>
             <div>
              <div className="flex items-center gap-[6px] mt-2">
               <Link
              //  href={``}
                 href={`/admin/careers/${encodeId(item.id)}`}
                 className=" bg-green-500 hover:bg-primary-600 flex items-center gap-2 text-white px-3 pr-4 py-1 rounded-lg"
               > <CgArrowsExpandUpRight />
                 Entries
               </Link>
               <Link data-tip="Edit" href={`/admin/careers/Edit/${encodeId(item?.id)}`}
                                   className="tooltip h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center cursor-pointer"
                                 >
                                   <TbEdit className="text-lg text-white " />
                                 </Link>
                                 <DeleteItem id={item?.id} fetch={fetchNews} />
               </div>
             </div>
           </div>
            ))}
            {totalRecords > 10 && <div className="card  mt-2">
            <Paginator
                first={first}
                rows={rows}
                totalRecords={totalRecords}
                rowsPerPageOptions={[10,20,40]}
                // onPageChange={onPageChange}
            />
        </div>}
          </>
        ) : (
          <div className="mt-10">
            <Empty />
          </div>
        )}
      </div>
      {imageView && (
        <dialog id="my_modal_3" className="modal modal-open">
          <div className="modal-box w-fit p-0 relative">
            <form method="dialog absolute top-3 right-3">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setImageView(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-white bg-black/30 hover:bg-black/50"
              >
                ✕
              </button>
            </form>
            <img
              src={`${ROOT_URL}uploads/news/${imageView}`}
              className="w-[1500px] h-auto"
            />
          </div>
        </dialog>
      )}
    </>
  );
}

export default Content;

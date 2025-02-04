"use client";
import React, { useEffect, useState } from "react";
import DeleteItem from "./Add/Delete";
import { TbEdit, TbPhotoUp } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { RiAddCircleFill } from "react-icons/ri";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { getArticle } from "./Add/func";
import Spinner from "@/components/common/Spinner";
import Empty from "@/components/common/Empty";
import { getRelativeTime } from "@/components/common/DateConvert";
import { MdEditDocument } from "react-icons/md";
import { encodeId } from "@/components/common/decode";
import { ROOT_URL } from "@/components/data/func";

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

    const data = await getArticle(query);

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
                <li>Diaries</li>
              </ul>
            </div>
            <h1 className="text-3xl font-[200] flex items-center gap-2">
            Diaries{" "}
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
            href={"/admin/diaries/Add"}
            className="gap-2 cursor-pointer p-[8px] px-4 bg-zinc-800 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-md text-white w-fit shadow-lg flex items-center"
          >
            <RiAddCircleFill />
            Create New
          </Link>
        </div>
      </main>
      <div className="flex flex-col gap-2 mt-10">
        {news === "loading" ? (
          <Spinner />
        ) : news.length !== 0 ? (
          <>
            <div className="grid grid-cols-9 pl-1 uppercase font-semibold text-zinc-600 text-sm text-center">
              <p>No</p>
              <p className="col-span-4">Title</p>
              <p className="col-span-2">Date</p>
              <p className="col-span-2">Actions</p>
            </div>
            {news.map((item: any, index: number) => (
              <div
                key={index}
                className="p-5 border border-zinc-100 bg-white shadow-sm duration-200 rounded-xl grid grid-cols-9 gap-5 items-center"
              >
                <p className="pl-5 font-bold">{item?.id}</p>
                <p className="col-span-4 line-clamp-2">{item?.title}</p>
                <p className="col-span-2 text-center">
                  {getRelativeTime(item?.date)}
                </p>
                <div className="col-span-2 flex items-center gap-2 justify-center">
                  {item?.image !== "" && (
                    <div
                      data-tip="View Image"
                      onClick={() => setImageView(item?.image)}
                      className="tooltip h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center cursor-pointer"
                    >
                      <TbPhotoUp className="text-xl text-zinc-600 " />
                    </div>
                  )}
                  <Link
                    data-tip="Edit"
                    href={`/admin/diaries/Edit/${encodeId(item?.id)}`}
                    className="tooltip h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center cursor-pointer"
                  >
                    <TbEdit className="text-xl text-blue-600 " />
                  </Link>
                  {/* <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center cursor-pointer">
                      <MdDeleteOutline className="text-xl text-red-500 " />
                    </div> */}
                  <DeleteItem id={item?.id} fetch={fetchNews}/>
                </div>
              </div>
            ))}
            {totalRecords > 10 && <div className="card  mt-2">
            <Paginator
                first={first}
                rows={rows}
                totalRecords={totalRecords}
                rowsPerPageOptions={[10,20,40]}
                onPageChange={onPageChange}
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

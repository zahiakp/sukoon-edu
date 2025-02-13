"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { TbEdit, TbPhotoUp } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import { encodeId } from "@/components/common/decode";
import { ROOT_URL } from "@/components/data/func";
import Spinner from "@/components/common/Spinner";
import Empty from "@/components/common/Empty";
import { getRelativeTime } from "@/components/common/DateConvert";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { getTransactions } from "./func";
import DeleteItem from "./Delete";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SideBar } from "./SideBar";
import AddModal from "./AddModal";
// import { SideBar } from "./SideBar";

// Lazy load Paginator to reduce initial bundle size
const Paginator = dynamic(() => import("primereact/paginator").then((mod) => mod.Paginator), {
  ssr: false,
});

function Content() {
  const [imageView, setImageView] = useState<string | false>(false);
  const [news, setNews] = useState<any[] | "loading">("loading");
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [visibleRight,setVisibleRight] = useState<any>(false)
const [showAddModal,setShowAddModal] = useState(false)


  // Debounce search input
  const debouncedFetchNews = useMemo(() => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(fetchNews, 300); // 300ms debounce
    };
  }, [first, rows, selectedCategory, searchQuery]);

  const fetchNews = useCallback(async () => {
    try {
      const page = first / rows + 1;
      const query = new URLSearchParams({
        page: page.toString(),
        limit: rows.toString(),
        search: searchQuery,
        category: selectedCategory,
      }).toString();

      const data = await getTransactions(query);
      if (data.success) {
        setNews(data.data);
        setTotalRecords(data.total);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setNews([]);
    }
  }, [first, rows, searchQuery, selectedCategory]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const onPageChange = useCallback((e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
  }, []);

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchNews();
    }
  }, [fetchNews]);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setFirst(0); // Reset pagination when changing category
  }, []);

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
                <li>Transactions</li>
              </ul>
            </div>
            <h1 className="text-3xl font-[200] flex items-center gap-2">
            Transactions{" "}
              {totalRecords !== 0 && (
                <span className="text-base ml-2 text-zinc-700 p-[6px] px-5 rounded-3xl bg-zinc-200/80">
                  {`${totalRecords} Items`}
                </span>
              )}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <div className="p-[8px] px-4 bg-white shadow-md rounded-lg flex items-center gap-3">
            <input
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="outline-none"
              type="search"
              placeholder="Search"
              aria-label="Search diaries"
            />
            <IoSearchOutline className="text-xl" />
          </div>
          <button
          onClick={()=>setShowAddModal(true)}
            className="gap-2 cursor-pointer font-semibold p-[8px] px-4 bg-blue-600 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-xl text-white w-fit shadow-lg flex items-center"
          >
            <RiAddCircleFill />
            Add New
          </button>
        </div>
      </main>
      <div className="flex flex-col gap-2 mt-10">
        {news === "loading" ? (
          <Spinner />
        ) : news.length !== 0 ? (
          <>
            <div className="grid grid-cols-12 pl-1 uppercase font-semibold text-zinc-600 text-sm text-center">
              <p>No</p>
              <p className="col-span-3">Donor Name</p>
              <p className="col-span-2">Transaction Id</p>
              <p className="col-span-2">Amount</p>
              <p className="col-span-2">Date</p>
              <p className="col-span-2">Actions</p>
            </div>
            {news.map((item: any, index: number) => (
              <div
                key={item.id}
                className="p-5 border border-zinc-100 bg-white shadow-sm duration-200 rounded-xl grid grid-cols-12 gap-5 items-center"
              >
                <p className="pl-5 font-bold">{item.id}</p>
                <p className="col-span-3 line-clamp-1">{item.name}</p>
                <p className="col-span-2 line-clamp-1">{item.transactionId}</p>
                <p className="pl-5 col-span-2 bg-green-500 mx-auto w-fit px-4 py-1 rounded-3xl text-white font-bold">₹ {item.amount}</p>
                <p className="col-span-2 text-center">{getRelativeTime(item.date)}</p>
                <div className="col-span-2 flex items-center gap-2 justify-center">
                  
                  
                  {/* <Link
                    aria-label="Edit"
                    href={`/admin/diaries/Edit/${encodeId(item.id)}`}
                    className="tooltip h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center cursor-pointer"
                  >
                    <TbEdit className="text-xl text-blue-600" />
                  </Link> */}
                  <button aria-label="View Details"
                                        onClick={() => setVisibleRight(item)}
                                        className="tooltip h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center cursor-pointer"
                                      >
                                        <LuSquareArrowOutUpRight className="text-xl text-zinc-600" />
                                      </button>
                  {/* <DeleteItem id={item.id} fetch={fetchNews} /> */}
                </div>
              </div>
            ))}
            {totalRecords > 10 && (
              <div className="card mt-2">
                <Paginator
                  first={first}
                  rows={rows}
                  totalRecords={totalRecords}
                  rowsPerPageOptions={[10, 20, 40]}
                  onPageChange={onPageChange}
                />
              </div>
            )}
          </>
        ) : (
          <div className="mt-10">
            <Empty />
          </div>
        )}
      </div>
      <AddModal setVisible={setShowAddModal} visible={showAddModal} fetch={fetchNews}/>
      <SideBar setVisibleRight={setVisibleRight} visibleRight={visibleRight} trans={visibleRight}/>
    </>
    
  );
}

export default Content;
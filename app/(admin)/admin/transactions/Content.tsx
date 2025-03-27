"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { TbEdit, TbPhotoUp } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { RiAddCircleFill, RiFileExcel2Fill } from "react-icons/ri";
import { encodeId } from "@/components/common/decode";
import { ROOT_URL } from "@/components/data/func";
import Spinner from "@/components/common/Spinner";
import Empty from "@/components/common/Empty";
import { getRelativeTime } from "@/components/common/DateConvert";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { formatIndianNumber, getFiltedData, getPeroidBasedData, getTransactions } from "./func";
import DeleteItem from "./Delete";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SideBar } from "./SideBar";
import * as XLSX from "xlsx";
import AddModal from "./AddModal";
import { showMessage } from "@/components/common/CusToast";
// import { SideBar } from "./SideBar";

// Lazy load Paginator to reduce initial bundle size
const Paginator = dynamic(() => import("primereact/paginator").then((mod) => mod.Paginator), {
  ssr: false,
});

function Content() {
  const [imageView, setImageView] = useState<string | false>(false);
  const [news, setNews] = useState<any[] | "loading">("loading");
  const [data, setData] = useState<any[] | "loading">("loading");
  const [periodData, setPeriodData] = useState<any[] | "loading">("loading");

  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("last Week");
  const [visibleRight,setVisibleRight] = useState<any>(false)
const [showAddModal,setShowAddModal] = useState(false)
const [exporting, setExporting] = useState(false)

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

  const fetchFilterdData = useCallback(async () => {
    try {

      const data = await getFiltedData(selectedCategory);
      if (data.success) {
        setData(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setData([]);
    }
  }, [selectedCategory]);

  async function fetchPeriodBasedData() {
    try {
        const data = await getPeroidBasedData(selectedCategory);
        if (data.success) {
            return data.data; // Return the data instead of setting it
        }
        return []; // Return empty array if no success
    } catch (error) {
        console.error("Failed to fetch period-based data:", error);
        return [];
    }
}



  useEffect(() => {
    fetchNews();
    fetchFilterdData();
  }, [fetchNews,fetchFilterdData]);

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
    setPeriodData("loading"); // Reset period data when changing category
    fetchPeriodBasedData(); // Fetch new period data
    setFirst(0); // Reset pagination when changing category
  }, []);


  
  
  async function exportToExcel(fileName = 'data.xlsx') {
    setExporting(true);
    try {
        // Fetch period-based data first and get the result
        const periodData = await fetchPeriodBasedData();
  
        // Verify if the data is fetched correctly
        if (!Array.isArray(periodData) || periodData.length === 0) {
          showMessage("No valid data available for export.", "error")
            throw new Error('No valid data available for export.');
        }
  
        // Check if XLSX is available
        if (typeof XLSX === 'undefined') {
            throw new Error('XLSX library is not loaded.');
        }
  
        // Create a new workbook and convert the data to a worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(periodData);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
        // Generate the Excel file and trigger a download
        XLSX.writeFile(workbook, fileName);
    } catch (error) {
        console.error('Error exporting to Excel:', error);
    } finally {
        setExporting(false);
    }
}
  



  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" >
    <div className="flex gap-3 flex-col" >
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col gap-3"> <p>Time Period</p>
                                    <select
                                      onChange={handleCategoryChange}
                                      value={selectedCategory}
                                      className="select select-bordered select-sm w-full max-w-xs"
                                    >
                                      {/* <option value="">All Categories</option> */}
                                      {["Today", "last Week", "last Month", "last 6 Month", "last Year"].map((item: any, index: number) => (
                                        <option key={index} value={item}>{item}</option>
                                      ))}
                                    </select>
                                </div>
                                <button onClick={() => exportToExcel(`Transactions.${selectedCategory}(${new Date().toISOString().split('T')[0]}).xlsx`)} className="py-2 px-5 bg-green-500 rounded-lg text-white flex justify-center items-center gap-2 hover:bg-green-600 duration-300 font-semibold">
                                            <RiFileExcel2Fill />
                                            Export {selectedCategory} data
                                            </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md" >
                    <div className="flex items-center justify-between mb-4" >
                        <h3 className="text-zinc-400" >Total Donation</h3>
                        <span className="text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded text-sm" ><span className="font-semibold">{data !== "loading" && data.reduce((acc, item) => acc + item.count, 0)}</span> items</span>
                    </div>
                    <p className="text-3xl font-bold text-zinc-700" >₹{data !== "loading"  && formatIndianNumber(data.reduce((acc, item) => acc + item.total_amount, 0))}</p>
                    <p className="text-sm text-zinc-400 mt-2" >got {selectedCategory}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md" >
                    <div className="flex items-center justify-between mb-4" >
                        <h3 className="text-zinc-400" >Autopay Donation</h3>
                        <span className="text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded text-sm" ><span className="font-semibold">{data !== "loading" && data.find((item) => item.type === "auto")?.count}</span> items</span>
                    </div>
                    <p className="text-3xl font-bold text-zinc-700" >₹{data !== "loading" && formatIndianNumber(data.find((item) => item.type === "auto")?.total_amount||0)}</p>
                    <p className="text-sm text-zinc-400 mt-2" >got {selectedCategory}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md" >
                    <div className="flex items-center justify-between mb-4" >
                        <h3 className="text-zinc-400" >Manual Donation</h3>
                        <span className="text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded text-sm" ><span className="font-semibold">{data !== "loading" && data.find((item) => item.type === "manual")?.count}</span> items</span>
                    </div>
                    <p className="text-3xl font-bold text-zinc-700" >₹{data !== "loading" && formatIndianNumber(data.find((item) => item.type === "manual")?.total_amount||0)}</p>
                    <p className="text-sm text-zinc-400 mt-2" >got {selectedCategory}</p>
                </div>

                
            </div>
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
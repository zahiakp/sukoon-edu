'use client'
import { getArticle } from '@/app/(admin)/admin/articles/Add/func';
import Empty from '@/components/common/Empty';
import NewsCard from '@/components/common/NewsCard'
import Spinner from '@/components/common/Spinner'
import Link from 'next/link';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { decodeId, encodeId } from '@/components/common/decode';
function Forms() {
    const [news, setNews] = useState<any>("loading");
      const [totalRecords, setTotalRecords] = useState<any>("loading");
      const [first, setFirst] = useState<number>(0);
      const [rows, setRows] = useState<number>(9);
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


      const items: any = [
        {
          id: "1",
          type: "VOLUNTEERING",
          title: "Food Coordinator",
          description: "Experience the magic of 'Food on Wheels,' where ev...",
        },{
          id: "2",
          type: "VOLUNTEERING",
          title: "Food Maker",
          description: "Experience the magic of 'Food on Wheels,' where ev...",
        },{
          id: "3",
          type: "VOLUNTEERING",
          title: "Food supply",
          description: "Experience the magic of 'Food on Wheels,' where ev...",
        },
      ];
  return (
    <div className='w-[90%] max-w-[1200px] mx-auto my-20'>
    {items.length > 0 ? 
          <div className="grid lg:grid-cols-3 gap-6 py-4">
               {items.map((inv: any,i:number) => (
                
              <div data-aos="fade-up" data-aos-delay={(i+2)*100}
                  key={inv.id}
                  className="p-5 border rounded-lg hover:border-lime-500 duration-300 cursor-pointer hover:scale-[1.01]"
                >
                  <div
                    className="text-xs px-2 py-1 bg-lime-100
                                        text-lime-800 inline-block rounded my-1 "
                  >
                    {inv.type}
                  </div>
                  <h1 className="text-2xl font-bold text-lime-700">
                    {inv.title}
                  </h1>
                  {/* <p className="text-gray-500">
                    {inv.description.substring(0, 50)}...
                  </p> */}
                  <article
                      className="line-clamp-2 mb-3"
                      dangerouslySetInnerHTML={{ __html: inv.description.substring(0, 50) }}
                    ></article>
                  <div>
                    <Link
                      href={`/join/${encodeId(inv.id)}`}
                      className="inline-block bg-lime-500 hover:bg-primary-600 text-white px-5 py-1 rounded mt-2"
                    >
                      Apply
                    </Link>
                  </div>
                </div>)
              
               )}
          </div>
           : <div className="mt-5"><Empty /></div>}</div>
  )
}

export default Forms

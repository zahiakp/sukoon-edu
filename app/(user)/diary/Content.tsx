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
function Content() {
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
  return (
    <main className="flex flex-col w-full justify-center my-20">
      {news === "loading" ? (
          <Spinner />
        ) : news.length !== 0 ? (
        <><div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
        
          
            {news.map((item: any, index: number) => (
              <Link key={index} href={`/diary/${encodeId(item.id)}`}>
                <NewsCard data={item} />
              </Link>
            ))}
            
          
        </div>
        {totalRecords > 9 && <div className="card  mt-2">
                    <Paginator
                        first={first}
                        rows={rows}
                        totalRecords={totalRecords}
                        rowsPerPageOptions={[9,20,40]}
                        onPageChange={onPageChange}
                    />
                </div>}</> ) : (
          <div className="mt-10 w-[90%] max-w-[1200px]">
            <Empty />
          </div> 
        )}
      
    </main>
  )
}

export default Content

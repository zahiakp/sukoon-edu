'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import Empty from '@/components/common/Empty';
import Spinner from '@/components/common/Spinner';
import { encodeId } from '@/components/common/decode';
import { getCareer } from '@/app/(admin)/admin/careers/Add/func';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface NewsItem {
  id: string;
  type: string;
  title: string;
  body: string;
}

const NewsCard = React.memo(({ inv,i }: { inv: NewsItem,i:number }) => {
  // Validate inv.id and encodeId(inv.id)
  const href = inv.id ? `/join/${encodeId(inv.id)}` : '#';

  // Validate inv.description
  const description = inv.body || ''; // Fallback to empty string if undefined
  const truncatedDescription = description.substring(0, 50); // Safely call substring

  return (
    <Link href={href} className='p-5 border rounded-lg hover:border-lime-500 duration-300 cursor-pointer hover:scale-[1.01]'>
      <div
                  key={inv.id}
                  className=""
                >
                  <div
                    className="text-xs px-2 py-1 bg-lime-100
                                        text-lime-800 inline-block rounded my-1 "
                  >
                    {inv.type}
                  </div>
                  <h1 className="text-2xl font-bold text-lime-600">
                    {inv.title}
                  </h1>
                  {/* <p className="text-gray-500">
                    {inv.body.substring(0, 50)}...
                  </p> */}
                  <article
                      className="line-clamp-2 mb-3"
                      dangerouslySetInnerHTML={{ __html: inv.body.substring(0, 150)}}
                    ></article>
                  <div>
                    <Link
                    // href={`#`}
                      href={`/join/${encodeId(inv.id)}`}
                      className="inline-block bg-lime-600 hover:bg-primary-600 text-white px-3 py-1 rounded mt-2"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
    </Link>
  );
});

NewsCard.displayName = 'NewsCard';

function Forms() {
  const [news, setNews] = useState<NewsItem[] | "loading">("loading");
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const fetchNews = useCallback(async () => {
    const page = first / rows + 1;
    const query = new URLSearchParams({
      page: page.toString(),
      limit: rows.toString(),
      search: searchQuery,
      category: selectedCategory,
    }).toString();

    try {
      const data = await getCareer(query);
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

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  return (
    <div className='w-[90%] max-w-[1200px] mx-auto my-20'>
      {news === "loading" ? (
        <Spinner />
      ) : news.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((inv,i) => (
            <NewsCard key={inv.id} inv={inv} i={i}/>
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
        </div>
      ) : (
        <div className="mt-10">
          <Empty />
        </div>
      )}
    </div>
  );
}

export default Forms;
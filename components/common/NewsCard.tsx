import React from "react";
import { getRelativeTime } from "./DateConvert";
import { ROOT_URL } from "../data/func";
import Link from "next/link";
import { encodeId } from "./decode";

function NewsCard({ data }: { data: any }) {
  return (
    <Link href={`/diary/${encodeId(data.id)}`}>
      <div className="flex flex-col mb-10">
        <div className="h-48 w-full overflow-hidden rounded-xl bg-zinc-100 col-span-3 relative">
          <img
            src={
              data.image != ""
                ? `${ROOT_URL}uploads/diaries/${data.image}`
                : "/prism thumb.jpg"
            }
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-2 ">
          <p className="text-sm text-zinc-400 mt-3">
            {getRelativeTime(data?.date)}
          </p>
          <h6 className="text-xl font-bold mt-1 line-clamp-2">{data.title}</h6>
          <article
            className="mt-2 line-clamp-[3]"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;

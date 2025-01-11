import React from "react";

function SDGs() {
  return (
    <div className="bg-lime-100 py-1 relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto p-4 flex flex-col items-center">
        <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex items-center"><img src="/svg/sdg1.svg" alt="" /></div>
          <div className="flex items-center"><img src="/image/SDGs.png" alt="" className="md:h-40"/></div>
        </div>
      </div>
    </div>
  );
}

export default SDGs;

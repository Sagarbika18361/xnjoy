import * as React from "react";

export function CardSkeleton() {
  return (
    <div className=" shadow-md rounded-[20px] animate-pulse">
      <div className="relative p-4 rounded bg-gray-300">
        <div className="flex gap-2 md:gap-3 items-start lg:items-start">
          <div className="w-50 h-50 aspect-square lg:w-100 lg:h-100 rounded-full shadow-lg bg-gray-200 overflow-hidden" />
          <div className="ml-2 h-[200px] flex-1"></div>
        </div>
      </div>

      <div className="mt-2">
        <div className="w-full h-3 bg-gray-200 rounded-md"></div>
        <div className="flex justify-between">
          <div className="w-2/3 flex gap-4">
          <div className="w-1/3 h-3 bg-gray-200 rounded-md mt-2"></div>
          <div className="w-1/3 h-3 bg-gray-200 rounded-md mt-2"></div>
          </div>
          <div className="w-1/3 h-3 bg-gray-200 rounded-md mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default function CardSkeletons({ count = 10 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
}

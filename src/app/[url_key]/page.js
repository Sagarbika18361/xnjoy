
import React from "react";
import VideoPlayer from "../_components/VideoPlayer";
import RelatedVideosList from "./_components/RelatedVideosList";


export default function page({ params }) {
  const url = decodeURIComponent(params.url_key);

  return (
    <main className="mt-10">
      <section className="w-full grid grid-cols-4">
        <div className="col-span-3">
          <VideoPlayer link={url} />
        </div>
      </section>
      <section>
       <RelatedVideosList/>
      </section>
    </main>
  );
}

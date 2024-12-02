import React from "react";
import "./AnimeText.css";
export default function AnimeText({text}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="animate-charcter text-xl sm:text-4xl font-semibold mb-10 sm:mb-6">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
}

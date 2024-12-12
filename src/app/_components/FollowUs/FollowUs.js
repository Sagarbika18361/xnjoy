import Image from "next/image";
import React from "react";

export default function FollowUs() {
  return (
    <>
      <h2 className="text-center">Follow Us on here to get <br/><b>Free Secret Key</b></h2>
      <div className="w-full px-10 flex justify-center gap-4 my-6">
        <a href="https://www.instagram.com/playterabox" target="_blank">
          <Image
            src={"/instagram.png"}
            height={80}
            width={80}
            className="cursor-pointer"
            alt="instagram"
          />
        </a>
        <a href="https://t.me/+0j2ycLQv89NhY2Y1" target="_blank">
          <Image
            src={"/telegram.svg"}
            height={80}
            width={80}
            className="cursor-pointer"
            alt="telegram"
          />
        </a>
      </div>
    </>
  );
}

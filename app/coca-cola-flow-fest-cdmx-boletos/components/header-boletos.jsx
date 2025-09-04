import React from "react";
import { TbLocation } from "react-icons/tb";

export default function HeaderBoletos() {
  return (
    <header>
      <div className="bg-black py-2">
        <div className="max-w-[75rem] px-5 mx-auto flex gap-1 items-center text-white">
          <TbLocation />
          <p>Todo México</p>
        </div>
      </div>

      <div className="bg-[#ff1a37] py-5 px-5 ">
        <div className="max-w-[75rem] mx-auto">
          <h1>Logo</h1>
        </div>
      </div>
    </header>
  );
}

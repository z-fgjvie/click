import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#ff1a37] py-5 px-5">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <h1>Logo</h1>
        </div>

        <nav>
          <ul className="text-white flex items-center gap-5 text-[1.0625rem]">
            <li className="hover:underline underline-offset-2">
              <Link href="/ingresa">Ingresa</Link>
            </li>
            <li className="hover:underline underline-offset-2">
              <Link href="/registro">Regístrate</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

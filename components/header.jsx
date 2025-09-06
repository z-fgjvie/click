"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#ff1a37] py-4 px-5">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/logo-clickboletosp.png"
            alt="logo click boletos"
            width="90"
            height="90"
            onClick={() => router.push("/")}
          />
        </div>

        {/* <nav>
          <ul className="text-white flex items-center gap-5 text-[1.0625rem]">
            <li className="hover:underline underline-offset-2">
              <Link href="/ingresa">Ingresa</Link>
            </li>
            <li className="hover:underline underline-offset-2">
              <Link href="/registro">Regístrate</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

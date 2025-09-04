import Link from "next/link";
import React from "react";
import { PiStarFill } from "react-icons/pi";

export default function HeroBoletos() {
  return (
    <section className="bg-[url(/hero-boletos.jpeg)] bg-center bg-no-repeat bg-cover h-[27rem] relative after:absolute after:inset-0 after:bg-black/60 px-5">
      <div className="max-w-[75rem] mx-auto flex flex-col justify-between h-full text-white relative z-10">
        <ul className="flex items-center gap-2 mt-7 lg:mt-5 md:text-base text-sm">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/coca-cola-flow-fest-cdmx-boletos">
              Boletos para Coca-Cola Flow Fest CDMX
            </Link>
          </li>
        </ul>

        <div className="mb-12 md:mb-14">
          <p className="md:text-xl  mb-2">
            Del 22 al 23 de noviembre del 2025 / Autódromo Hermanos Rodríguez
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-shadow-md">
            Boletos para Coca-Cola Flow Fest CDMX
          </h1>

          <div className="border border-white w-fit px-3 py-2 flex items-center gap-2">
            <PiStarFill className="text-yellow-400" />
            <p className="font-semibold">5.0</p>
          </div>
        </div>
      </div>
    </section>
  );
}

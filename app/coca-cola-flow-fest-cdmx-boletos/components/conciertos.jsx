"use client";
import { dataEventos } from "@/data/dataEventos";
import { FaCircle } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { useRouter } from "next/navigation";

export default function Conciertos() {
  const router = useRouter();

  return (
    <section className="py-14  bg-[#f6f6f6]">
      <div className="max-w-[75rem] mx-auto ">
        <div className="mb-10 px-5">
          <div className="w-[5rem] bg-black h-1 mb-2" />
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl uppercase font-bold">
              Conciertos
            </h2>
            <FaCircle className="text-black text-[0.5rem]" />
            <p className="text-2xl md:text-3xl">12 resultados</p>
          </div>
        </div>

        <div className="shadow-lg bg-white rounded-md px-5 py-8">
          <h3 className="mb-8 text-xl font-semibold">Conciertos en México</h3>

          <div>
            {dataEventos.map((evento) => (
              <div
                key={evento.id}
                className="flex items-center justify-between gap-3  border-b border-gray-200 py-6"
              >
                <div className="flex md:items-center gap-7">
                  <div className="flex flex-col items-center text-xl">
                    <p>{evento.fecha}</p>
                    <p>{evento.numeroFecha}</p>
                  </div>

                  <div>
                    <p className="text-[#747474] ">{evento.headerEvento}</p>
                    <h4 className="font-semibold ">{evento.name}</h4>
                    <p className="text-[#747474]">{evento.location}</p>
                  </div>
                </div>

                <div>
                  <button
                    className="md:flex items-center font-semibold tracking-wide cursor-pointer hover:bg-red-600 gap-2 bg-[#ff1a37] text-white px-5 py-3 rounded-md transition-all duration-200 ease-in-out hidden"
                    onClick={() =>
                      router.push(
                        `/coca-cola-flow-fest-cdmx-boletos/${evento.slug}`
                      )
                    }
                  >
                    Buscar Boletos <GoChevronRight className="text-2xl " />
                  </button>
                  <button
                    className="flex items-center justify-center font-semibold tracking-wide cursor-pointer  gap-2 bg-[#ff1a37] text-white md:hidden w-10 h-10 rounded-full"
                    onClick={() =>
                      router.push(
                        `/coca-cola-flow-fest-cdmx-boletos/${evento.slug}`
                      )
                    }
                  >
                    <GoChevronRight className="text-2xl " />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

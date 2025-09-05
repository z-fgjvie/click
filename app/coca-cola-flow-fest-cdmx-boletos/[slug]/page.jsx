"use client";
import { dataEventos } from "@/data/dataEventos";
import { formatearDinero } from "@/lib/formatPrice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";
import Footer from "@/components/footer";
import { useReservaStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

export default function EventoEspecifico({ params }) {
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(false);
  const { setReserva } = useReservaStore();
  const { slug } = React.use(params);
  const event = dataEventos.find((ev) => ev.slug === slug);
  const router = useRouter();

  const aumentarCantidad = (e) => {
    setCantidad((prev) => (prev < 10 ? prev + 1 : 10));
  };

  const disminuirCantidad = (e) => {
    setCantidad((prev) => (prev > 2 ? prev - 1 : 1));
  };

  const handleBuscarBoletos = (ticket) => {
    // Guardas en zustand lo que necesitas para el checkout
    setReserva({
      slug: event.slug,
      name: event.name,
      locationTicket: event.locationTicket,
      headerEventoCompleto: event.headerEventoCompleto,
      ticket: ticket, // objeto con phase, section, price
      cantidad,
      total: ticket.price * cantidad,
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(
        `/coca-cola-flow-fest-cdmx-boletos/confirmacion/${event.slug}`
      );
    }, 3000);
  };

  if (!event) {
    <h2 className="text-center text-2xl font-semibold mt-10">
      Evento no encontrado
    </h2>;
  }

  return (
    <>
      {loading && <Loading />}
      <section>
        <div className="bg-[#121212] px-5">
          <div className="max-w-[75rem] mx-auto pt-5 pb-8">
            <div className="flex items-center justify-between">
              <p className="mb-3 text-white">Logo</p>
              <div className="flex items-center gap-1 text-white">
                <Image
                  src="/bandera.png"
                  alt="bandera"
                  width="20"
                  height="20"
                />
                <p>MX</p>
              </div>
            </div>
            <ul className="flex items-center gap-2 mt-7 lg:mt-5 md:text-base text-sm text-white mb-6">
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

            <div className="flex md:flex-row flex-col gap-4 md:items-center">
              <Image
                src="/coca-fest.webp"
                alt="imagen de coca cola fest"
                width="140"
                height="140"
              />
              <div className="text-white">
                <h1 className="text-lg font-semibold mb-2 md:mb-1 text-[#ff1a37]">
                  {event.name}
                </h1>
                <p className="flex items-center gap-2 mb-1">
                  <CiCalendar className="md:text-lg" />
                  {event.headerEventoCompleto}
                </p>
                <p className="flex items-center gap-2">
                  <CiLocationOn className="md:text-lg" />
                  {event.locationTicket}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid  md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-5 items-center">
            <div>
              <Image
                src="/nodisponible.gif"
                alt="ilustracion"
                width="600"
                height="600"
                className="mx-auto md:flex hidden"
              />
            </div>

            <div className="shadow-lg px-6 pt-4 md:pt-12 pb-10 h-[24rem] md:h-[29rem]">
              <h2 className="text-center text-2xl font-semibold mb-10">
                Buscar Boletos
              </h2>
              {event.tickets.map((ticket) => (
                <div key={ticket.id}>
                  <div className="border-b  border-gray-100 pb-5">
                    <div className="flex justify-between items-center">
                      <div className="grid grid-cols-[auto_1fr] gap-3">
                        <div>
                          <FaCircle className="text-[#ff1a37] mt-1" />
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-[1.0625rem] font-semibold">
                            {ticket.phase}
                          </p>
                          <p>{formatearDinero(ticket.price)} cada uno</p>
                        </div>
                      </div>

                      <div className="flex shadow-sm rounded-full pl-2 pr-1 w-fit py-1 gap-3 border border-gray-100">
                        <button onClick={disminuirCantidad}>
                          <AiOutlineMinus className="text-2xl text-[#ff1a37]" />
                        </button>
                        <input
                          type="text"
                          value={cantidad}
                          readOnly
                          className="w-[1.9rem] bg-gray-50 text-center rounded-md outline-none"
                        />
                        <button onClick={aumentarCantidad}>
                          <AiFillPlusCircle className="text-4xl text-[#ff1a37]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 mb-8">
                    <p className="mt-4 flex items-center text-[1.0625rem] gap-[.4rem]">
                      <IoTicketOutline className="text-xl" />x{cantidad}
                    </p>

                    <p className="mt-4 text-gray-500">Limite de boletos: 10</p>
                  </div>

                  <button
                    className="bg-[#ff1a37] font-semibold w-full py-[0.625rem] text-white rounded-sm text-[1.0625rem] cursor-pointer hover:bg-red-600 transition-all duration-200 ease-in-out"
                    onClick={() => handleBuscarBoletos(ticket)}
                  >
                    Buscar boletos
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

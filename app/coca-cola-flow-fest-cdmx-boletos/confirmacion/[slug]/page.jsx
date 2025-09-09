"use client";
import Footer from "@/components/footer";
import { formatearDinero } from "@/lib/formatPrice";
import { useReservaStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

export default function PageConfirmacionSlug() {
  const { reserva } = useReservaStore();
  const router = useRouter();

  if (!reserva) {
    return (
      <div className="text-center text-white py-10">
        <p>No hay reserva seleccionada.</p>
      </div>
    );
  }

  // Número de WhatsApp (mejor si lo pones en process.env)
  const numero = "5213319673903";

  // Mensaje que quieres enviar
  const mensaje = `
🎟️ *Reserva de Boletos*

📌 Evento: ${reserva.name}
📅 Fecha: ${reserva.ticket.phase}
🎫 Sección: ${reserva.ticket.section}
👥 Cantidad: ${reserva.cantidad}
💰 Precio unitario: $${reserva.ticket.price} MXN
💵 Total: $${reserva.total} MXN

✅ Quiero confirmar mi compra de boletos 🙌
`;

  // URL de WhatsApp
  const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <>
      <section>
        <div className="bg-[#121212] px-5">
          <div className="max-w-[75rem] mx-auto pt-5 pb-8">
            <div className="flex items-center justify-between">
              <Image
                src="/logo-clickboletosp.png"
                alt="logo click boletos"
                width="90"
                height="90"
              />
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
            <ul className="flex items-center gap-2 mt-7 lg:mt-5 md:text-base text-sm text-white mb-8 md:mb-6">
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
                  {reserva.name}
                </h1>
                <p className="flex items-center gap-2 mb-1">
                  <CiCalendar className="md:text-lg" />
                  {reserva.headerEventoCompleto}
                </p>
                <p className="flex items-center gap-2">
                  <CiLocationOn className="md:text-lg" />
                  {reserva.locationTicket}
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

            <div className="shadow-lg px-6 pt-4 md:pt-12 pb-10 ">
              <h2 className="text-center text-2xl font-semibold mb-10">
                Revisa tus boletos
              </h2>

              <div key={reserva.id}>
                <div className="border-b shadow-card p-5 border-gray-100 pb-5">
                  <div className="border-b border-b-gray-200 pb-4 mb-4">
                    <p className="text-[#ff1a37] text-sm font-semibold mb-1">
                      SECCIÓN
                    </p>
                    <p>{reserva.ticket.section}</p>
                    <p className="text-gray-500 text-sm">
                      {reserva.ticket.area}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-[auto_1fr] gap-3">
                      <div>
                        <FaCircle className="text-[#ff1a37] mt-1" />
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-[1.0625rem] font-semibold">
                          {reserva.ticket.phase}
                        </p>
                        <p className="mb-1 text-[15px] text-gray-600">
                          {reserva.cantidad} <span className="mx-1">x</span>
                          {formatearDinero(reserva.ticket.price)} cada uno
                        </p>
                        <p className="text-[17px]">
                          <span className="text-[#ff1a37] font-semibold">
                            Total :
                          </span>{" "}
                          {formatearDinero(reserva.total)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 mb-5">
                  <p className="mt-4 flex items-center text-[1.0625rem] gap-[.4rem]">
                    <IoTicketOutline className="text-xl" />x{reserva.cantidad}
                  </p>
                </div>

                <a
                  href={urlWhatsApp}
                  className="bg-[#ff1a37] font-semibold w-full py-[0.625rem] text-white rounded-sm text-[1.0625rem] mb-10 cursor-pointer block text-center hover:bg-red-600 transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar boletos
                </a>

                <h2 className="text-xl font-semibold mb-4">Otras opciones</h2>

                <button
                  className="border border-[#ff1a37] font-semibold w-full py-[0.625rem] text-[#ff1a37] rounded-sm text-[1.0625rem] mb-8 cursor-pointer hover:bg-[#ff1a37] transition-all duration-200 ease-in-out hover:text-white"
                  onClick={() =>
                    router.push("/coca-cola-flow-fest-cdmx-boletos")
                  }
                >
                  Buscar denuevo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

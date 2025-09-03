import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CocaFest() {
  return (
    <section className="py-14 md:py-16">
      <div className="max-w-[80rem] mx-auto px-5 ">
        <div className="grid md:grid-cols-2 gap-9 md:gap-10 items-center">
          <div>
            <Image
              src="/coca-fest.webp"
              alt="imagen de coca cola fest"
              width="600"
              height="600"
              className="w-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              ¡Prepárate para el perreo del año!
            </h2>
            <p className="mb-5 text-justify ">
              Como todos loa años, ahora la novena edición del Coca-Cola Flow
              Fest 2025 llega con más fuerza y color que nunca al Autódromo
              Hermanos Rodríguez en la CDMX, los días 22 y 23 de noviembre. El
              festival internacional de reggaetón más grande de Latinoamérica,
              está de regreso y promete dos días llenos de ritmo, energía, flow,
              perreo y una experiencia musical inolvidable.
            </p>
            <p className="text-justify ">
              Los artistas más grandes del género urbano, los beats que no
              pueden faltar en tu playlist y un ambiente explosivo te esperan en
              este nuevo capítulo que marcará historia. ¿Estás listo para vibrar
              con los headliners más top del reggaetón y descubrir nuevas joyas
              del movimiento urbano?
            </p>

            <p className="my-5 text-justify md:text-left">
              ¡Te esperamos en el Autódromo Hermanos Rodríguez!
            </p>

            <Link
              href="#"
              className="bg-[#ff1a37] text-white rounded-md py-2 px-5 inline-block hover:bg-[#d1031e] transition-all duration-300 ease-in-out"
            >
              Buscar boletos
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-14">
          <div className="shadow-card rounded-md overflow-hidden">
            <Image
              src="/coca-uno.webp"
              alt="coca uno"
              width="600"
              height="600"
              className="w-full"
            />
            <div className="px-4 py-5">
              <p className="font-semibold text-xl text-[#ff1a37] mb-2">
                Experiencias inolvidables
              </p>
              <p>Vive momentos únicos que quedarán para siempre.</p>
            </div>
          </div>
          <div className="shadow-card rounded-md overflow-hidden">
            <Image
              src="/coca-dos.webp"
              alt="coca uno"
              width="600"
              height="600"
              className="w-full"
            />
            <div className="px-4 py-5">
              <p className="font-semibold text-xl text-[#ff1a37] mb-2">
                ¡El beat inundará el Autódromo!
              </p>
              <p>La música encenderá cada rincón del Autódromo.</p>
            </div>
          </div>
          <div className="shadow-card rounded-md overflow-hidden">
            <Image
              src="/coca-tres.webp"
              alt="coca uno"
              width="600"
              height="600"
              className="w-full"
            />
            <div className="px-4 py-5">
              <p className="font-semibold text-xl text-[#ff1a37] mb-2">
                ¡Siente el Flow!
              </p>
              <p>Déjate llevar por la energía y el ritmo sin frenos.</p>
            </div>
          </div>
          <div className="shadow-card rounded-md overflow-hidden">
            <Image
              src="/coca-cuatro.webp"
              alt="coca uno"
              width="600"
              height="600"
              className="w-full"
            />
            <div className="px-4 py-5">
              <p className="font-semibold text-xl text-[#ff1a37] mb-2">
                El calor de Reggaetón llego a CDMX
              </p>
              <p>El reggaetón hará vibrar la ciudad como nunca.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

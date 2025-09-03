import React from "react";

export default function Hero() {
  return (
    <section className="px-5 bg-[url(/hero-coca.jpg)] bg-cover bg-no-repeat bg-center h-[25rem] md:h-[27rem] relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/80 after:to-transparent">
      <div className="max-w-[75rem] mx-auto flex flex-col justify-center h-full text-white relative z-10">
        <h2 className="text-lg mb-3">Click Boletos</h2>
        <div className="mb-8">
          <p className="text-5xl md:text-6xl font-black relative after:absolute after:content-[''] after:w-full after:h-[0.4375rem] uppercase w-fit after:bg-[#ff1a37] after:-bottom-2 after:left-0 text-left mb-6">
            Eventos
          </p>
          <p className="text-5xl md:text-6xl font-black relative after:absolute after:content-[''] after:w-full after:h-[0.4375rem] uppercase after:bg-[#ff1a37] after:-bottom-2 after:left-0 w-fit">
            Especiales
          </p>
        </div>
        <p className="text-lg md:text-xl text-white max-w-[90%] lg:max-w-[40%]">
          Compra tus boletos de forma segura y sin complicaciones.
        </p>
      </div>
    </section>
  );
}

import React from "react";

export default function CardModal({
  img,
  tools,
  info,
  challange,
  solutions,
  url,
}) {
  return (
    <div>
      <div className="w-full my-4">
        <img
          src={img}
          alt="imagen del proyecto"
          className="border-2 border-gray-400 rounded-md w-full"
        />
      </div>
      <div className="">
        <ul className="flex gap-2 -ml-8 flex-wrap">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-md p-2 text-white text-sm sm:text-lg"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full text-white mt-5">
        <h2>Caracteristicas:</h2>
        <p className="text-xl text-gray-400">{info} </p>

        <h2 className="mt-5 text-orange-300">Desafios:</h2>
        <p className="text-xl text-gray-400">{challange}</p>

        <h2 className="mt-5 text-cyan-300">Soluciones:</h2>
        <p className="text-xl text-gray-400">{solutions}</p>
      </div>
      <div className=" w-full flex justify-center items-center">
        <button
          className="btnFirstCard my-5  text-[12px] w-[130px] sm:w-[150px] sm:text-[16px]   p-3 h-5"
          onClick={() => window.open(url, "_blank")}
        >
          Ver sitio web
          <div className="arrow-wrapper hidden sm:block">
            <div className="arrow hidden sm:block"></div>
          </div>
        </button>
      </div>
    </div>
  );
}

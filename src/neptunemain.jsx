import React from "react";

export default function NeptuneMain() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 font-['InterVariable']">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Neptune Indonesia</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Interior Design & Contractor – Kami menciptakan ruang yang estetis, fungsional, dan penuh karakter.
        </p>
        <a
          href="https://wa.me/6281220219228"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Konsultasi Sekarang
        </a>
      </div>
    </div>
  );
}

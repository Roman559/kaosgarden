"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const images = [
    "/images/1000007919.jpg",
    "/images/1000007920.jpg",
    "/images/1000007921.jpg",
    "/images/1000007922.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section
       className="relative flex min-h-screen items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{
  backgroundImage: `url(${images[currentImage]})`,
}}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-6 text-6xl font-black tracking-[0.4em] md:text-8xl">
            KAOS GARDEN
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 md:text-2xl">
            Canadian nu metal band forging heavy riffs,
            dark atmosphere, and raw emotion.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#music"
              className="rounded-2xl border border-white px-8 py-4 text-lg transition hover:bg-white hover:text-black"
            >
              Upcoming Music
            </a>

            <a
              href="https://instagram.com/kaosgardenmusic"
              target="_blank"
              rel="noreferrer"
             className="rounded-2xl border border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black"
            >
              Instagram
            </a>
            <a
  href="https://www.tiktok.com/@kaosgardenmusic?_r=1&_t=ZS-96L0Hi3Vwby"
  target="_blank"
  rel="noreferrer"
  className="rounded-2xl border border-white px-8 py-4 text-lg transition hover:bg-white hover:text-black"
>
  TikTok
</a>

<a
  href="https://www.youtube.com/channel/UC0qP5mBznr2W0iD5n0-by9A"
  target="_blank"
  rel="noreferrer"
  className="rounded-2xl border border-white px-8 py-4 text-lg transition hover:bg-white hover:text-black"
>
  YouTube
</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950/70 p-10 shadow-2xl backdrop-blur">
          <h2 className="mb-8 text-5xl font-bold">
            About The Band
          </h2>

          <p className="text-lg leading-9 text-zinc-300">
            Kaos Garden is a Canadian nu metal band.

Not just making music — turning kaos, pain, and passion into sound.

Kaos Garden combines heavy riffs, raw emotion, and aggressive energy
into songs built to hit harder every time.
          </p>
        </div>
      </section>

      {/* MEMBERS */}
<section className="bg-zinc-950 px-6 py-24 md:px-20">
  <h2 className="mb-14 text-center text-5xl font-bold">
    Members
  </h2>

  <div className="grid gap-8 md:grid-cols-5">
    <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-center transition hover:-translate-y-2 hover:border-white">
      <div className="mx-auto mb-6 h-40 w-40 rounded-full bg-zinc-800" />

      <h3 className="mb-2 text-2xl font-bold">
        Roman Ryzhkov
      </h3>

      <p className="text-zinc-400">
        Bass
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-center transition hover:-translate-y-2 hover:border-white">
      <div className="mx-auto mb-6 h-40 w-40 rounded-full bg-zinc-800" />

      <h3 className="mb-2 text-2xl font-bold">
        William Fink
      </h3>

      <p className="text-zinc-400">
        Drums
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-center transition hover:-translate-y-2 hover:border-white">
      <div className="mx-auto mb-6 h-40 w-40 rounded-full bg-zinc-800" />

      <h3 className="mb-2 text-2xl font-bold">
        Esteban Berger
      </h3>

      <p className="text-zinc-400">
        Lead Guitar
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-center transition hover:-translate-y-2 hover:border-white">
      <div className="mx-auto mb-6 h-40 w-40 rounded-full bg-zinc-800" />

      <h3 className="mb-2 text-2xl font-bold">
        Thomas Morin
      </h3>

      <p className="text-zinc-400">
        Rhythm Guitar
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-center transition hover:-translate-y-2 hover:border-white">
      <div className="mx-auto mb-6 h-40 w-40 rounded-full bg-zinc-800" />

      <h3 className="mb-2 text-2xl font-bold">
        Charles-Antoine Tremblay
      </h3>

      <p className="text-zinc-400">
        Lead Vocalist
      </p>
    </div>
  </div>
</section>

      {/* MUSIC */}
      <section
        id="music"
        className="px-6 py-24 md:px-20"
      >
        <h2 className="mb-14 text-center text-5xl font-bold">
          Upcoming Releases
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
            <h3 className="mb-4 text-4xl font-bold">
              Risin&apos; Up
            </h3>

            <p className="mb-6 text-zinc-400">
              First single from the upcoming debut album.
            </p>

            <div className="h-56 rounded-2xl bg-zinc-900" />
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
            <h3 className="mb-4 text-4xl font-bold">
              Debut Album
            </h3>

            <p className="mb-6 text-zinc-400">
              Heavy riffs, dark atmosphere, and cinematic energy.
            </p>

            <div className="h-56 rounded-2xl bg-zinc-900" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-500">
        © 2026 Kaos Garden — All Rights Reserved
      </footer>
    </div>
  );
}
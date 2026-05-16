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
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6 text-center">

         <img
  src="/images/1000007960-removebg-preview.png"
  alt="Kaos Garden"
  className="
    mb-6
    w-[650px]
    max-w-none
    object-contain
    select-none
    md:w-[780px]
  "
  style={{
    marginLeft: "-120px",
  }}
/>

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
              className="rounded-2xl border border-white px-8 py-4 text-lg transition hover:bg-white hover:text-black"
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

     {/* ROSES */}
<div className="relative h-[420px] overflow-hidden bg-black">

  <img
    src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
    className="absolute object-contain"
    style={{
      left: "-120px",
      top: "-90px",
      transform: "rotate(-12deg)",
    }}
  />

  <img
    src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
    className="absolute object-contain"
    style={{
      left: "34%",
      top: "80px",
      transform: "rotate(10deg)",
    }}
  />

  <img
  src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
  className="absolute object-contain"
  style={{
    right: "-40px",
    top: "120px",
    transform: "rotate(-12deg)",
  }}
/>

</div>
{/* ROSES */}
<div className="relative h-[420px] overflow-hidden bg-black">

  <img
    src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
    className="absolute object-contain"
    style={{
      left: "-100px",
      top: "-80px",
      transform: "rotate(12deg)",
    }}
  />

  <img
    src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
    className="absolute object-contain"
    style={{
      right: "-100px",
      bottom: "-90px",
      transform: "rotate(-18deg)",
    }}
  />

</div>

      {/* ABOUT */}
      <section className="px-6 py-24 md:px-20">

        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950/70 p-10">

          <h2 className="mb-8 text-5xl font-bold">
            About The Band
          </h2>

          <p className="text-lg leading-9 text-zinc-300">
            Kaos Garden is a Canadian nu metal band.
            <br /><br />
            Not just making music — turning kaos, pain, and passion into sound.
            <br /><br />
            Kaos Garden combines heavy riffs, raw emotion, and aggressive energy
            into songs built to hit harder every time.
          </p>

        </div>
      </section>

      {/* ROSES */}
      <div className="relative h-72 overflow-hidden bg-black">

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute"
          style={{
            left: "-100px",
            top: "-80px",
            transform: "rotate(12deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute"
          style={{
            right: "-70px",
            bottom: "-70px",
            transform: "rotate(-18deg)",
          }}
        />

      </div>

      {/* MEMBERS */}
      <section className="bg-zinc-950 px-6 py-24 md:px-20">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Members
        </h2>

        <div className="grid gap-8 md:grid-cols-5">

          {[
            ["Roman Ryzhkov", "Bass"],
            ["William Fink", "Drums"],
            ["Esteban Berger", "Lead Guitar"],
            ["Thomas Morin", "Rhythm Guitar"],
            ["Charles-Antoine Tremblay", "Lead Vocalist"],
          ].map(([name, role]) => (

            <div
              key={name}
              className="rounded-3xl border border-zinc-800 bg-black p-8 text-center transition hover:border-white"
            >

              <div className="mx-auto mb-6 h-40 w-40 rounded-full bg-zinc-800" />

              <h3 className="mb-2 text-2xl font-bold">
                {name}
              </h3>

              <p className="text-zinc-400">
                {role}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* ROSES */}
      <div className="relative h-72 overflow-hidden bg-black">

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute"
          style={{
            left: "10%",
            top: "-100px",
            transform: "rotate(-10deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute"
          style={{
            right: "15%",
            bottom: "-50px",
            transform: "rotate(15deg)",
          }}
        />

      </div>

      {/* MUSIC */}
      <section
        id="music"
        className="px-6 py-24 md:px-20"
      >

        <h2 className="mb-14 text-center text-5xl font-bold">
          Upcoming Releases
        </h2>

        <div className="flex justify-center">

          <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h3 className="mb-6 text-4xl font-bold">
              Risin&apos; Up Coming Soon...
            </h3>

            <img
              src="/images/1000007936.jpg"
              alt="Risin Up"
              className="rounded-2xl border border-zinc-800"
            />

          </div>

        </div>
      </section>

      {/* MERCH */}
      <section className="bg-zinc-950 px-6 py-24 md:px-20">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Kaos Garden Shop
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* HOODIE */}
          <div className="rounded-3xl border border-zinc-800 bg-black p-6 text-center transition hover:border-white">

            <div className="mb-6 flex h-64 items-center justify-center rounded-2xl bg-zinc-900 text-zinc-500">
              HOODIE PREVIEW COMING SOON
            </div>

            <h3 className="mb-2 text-2xl font-bold">
              Kaos Garden Hoodie
            </h3>

            <p className="mb-4 text-zinc-400">
              Official band hoodie currently in development.
            </p>

            <button className="rounded-2xl border border-white px-6 py-3 transition hover:bg-white hover:text-black">
              Coming Soon
            </button>

          </div>

          {/* MORE */}
          <div className="rounded-3xl border border-zinc-800 bg-black p-16 text-center">

            <h3 className="mb-6 text-4xl font-black">
              More Coming Soon
            </h3>

            <p className="text-lg leading-8 text-zinc-400">
              More merch, exclusive content,
              physical releases, and additional
              projects are currently in development.
            </p>

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
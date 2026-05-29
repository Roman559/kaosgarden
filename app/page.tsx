"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function KaosGardenWebsite() {
  const images = [
    "/images/1000007919.webp",
    "/images/1000007920.webp",
    "/images/1000007921.webp",
    "/images/1000007922.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);
const [showCookies, setShowCookies] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="min-h-screen overflow-x-hidden bg-black text-white">

    {/* COOKIE BANNER */}
{showCookies && (

  <div className="fixed bottom-6 right-6 z-50 w-[380px] rounded-3xl border border-zinc-800 bg-black/60 p-6 backdrop-blur-xl shadow-2xl">

    <h3 className="mb-3 text-2xl font-black">
      Cookie Settings
    </h3>

    <p className="mb-5 text-zinc-400 leading-7">
      Kaos Garden uses cookies to improve site performance,
      analytics, and your experience.
    </p>

    <div className="flex gap-4">

      <button
        onClick={() => setShowCookies(false)}
        className="rounded-2xl border border-white px-6 py-3 font-bold transition hover:bg-white hover:text-black"
      >
        Accept
      </button>

      <button
        onClick={() => setShowCookies(false)}
        className="rounded-2xl border border-zinc-700 px-6 py-3 transition hover:border-white"
      >
        Decline
      </button>

    </div>

  </div>

)}

    {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

  <Image
  src={images[currentImage]}
  alt="Kaos Garden background"
  fill
  priority
  fetchPriority="high"
  quality={70}
  className="object-cover"
/>

  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

  <div className="relative z-10 px-6 text-center">
         <Image
  src="/images/1000007960-removebg-preview.webp"
  alt="Kaos Garden logo"
  width={650}
  height={300}
  priority
  className="mx-auto mb-8 max-w-full select-none"
/>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 md:text-2xl">
            Canadian independent metal band forging heavy riffs,
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

      {/* ROSES */}
      <div className="relative h-[220px] overflow-hidden bg-black">

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            left: "-120px",
            top: "-60px",
            transform: "rotate(-12deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            left: "34%",
            top: "-90px",
            transform: "rotate(10deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            right: "-40px",
            top: "-60px",
            transform: "rotate(-12deg)",
          }}
        />

      </div>

      {/* ABOUT */}
      <section className="px-6 py-16 md:px-20">

        <div className="mx-auto max-w-7xl rounded-[40px] border border-zinc-800 bg-zinc-950/70 p-12 md:p-16">

          <div className="grid items-center gap-14 md:grid-cols-2">

            <div>

              <h2 className="mb-8 text-6xl font-black leading-none">
                About
                <br />
                Kaos Garden
              </h2>

              <div className="h-1 w-32 bg-white" />

            </div>

            <div>

              <p className="text-xl leading-10 text-zinc-300">
Kaos Garden is an independent metal band.

Not just making music — turning kaos, pain, and passion into sound.

Kaos Garden combines heavy riffs, raw emotion, and aggressive energy into songs built to hit harder every time.
              </p>

            </div>

          </div>

        </div>
      </section>

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
      <div className="relative h-[260px] overflow-hidden bg-black">

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            left: "-120px",
            top: "-80px",
            transform: "rotate(12deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            right: "-40px",
            bottom: "-80px",
            transform: "rotate(-18deg)",
          }}
        />

      </div>

      {/* MUSIC */}
<section
  id="music"
  className="px-6 py-24 md:px-20"
>

  <h2 className="mb-14 text-center text-5xl font-bold">
    Latest Releases
  </h2>

  <div className="grid gap-8 md:grid-cols-2">

    {/* RISIN UP */}
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

      <h3 className="mb-4 text-5xl font-black">
        Risin&apos; Up
      </h3>

      <p className="mb-8 text-lg text-zinc-400">
        OUT NOW
      </p>

      <div className="relative group">

        <Image
  src="/images/IMG_20260518_001000_019.jpg"
  alt="Risin Up single cover"
  width={900}
  height={900}
  className="rounded-2xl border border-zinc-800"
/>

        <a
          href="https://open.spotify.com/track/3P5nDTcbihXuKCyySjTa3T?si=b2e4b1d13fb6423d"
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100"
        >

          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white bg-black/70 text-4xl">
            ▶
          </div>

        </a>

      </div>

    </div>

    {/* CONFIDENCE */}
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

      <h3 className="mb-4 text-4xl font-black leading-tight">
        Confidence (Is Killing Me)
      </h3>

      <p className="mb-8 text-lg text-zinc-400">
        IN DEVELOPMENT
      </p>

      <div className="relative">

        <Image
  src="/images/IMG_4383.webp"
  alt="Confidence Is Killing Me artwork"
  width={900}
  height={900}
  className="rounded-2xl border border-zinc-800"
/>

        <div className="absolute inset-0 rounded-2xl bg-black/20" />

      </div>

    </div>

  </div>

</section>

      {/* ROSES */}
      <div className="relative h-[320px] overflow-hidden bg-black">

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            left: "-120px",
            top: "-60px",
            transform: "rotate(-18deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.webp"
          alt="Rose decoration"
          className="absolute object-contain"
          style={{
            width: "420px",
            height: "280px",
            right: "-50px",
            bottom: "-40px",
            transform: "rotate(14deg)",
          }}
        />

      </div>

      {/* MERCH */}
      <section className="bg-zinc-950 px-6 py-24 md:px-20">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Kaos Garden Shop
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* HOODIE */}
<div className="rounded-3xl border border-zinc-800 bg-black p-6 text-center transition hover:border-white">

  <h3 className="mb-8 text-center text-5xl font-black leading-none">
    Kaos Garden Hoodie
  </h3>

  <div className="mb-8 flex justify-center">

    <video
  preload="metadata"
  autoPlay
      muted
      loop
      playsInline
      className="h-[700px] w-auto rounded-2xl border border-zinc-800 object-cover"
    >
      <source
        src="/videos/lv_0_20260518195006.mp4"
        type="video/mp4"
      />
      <track
  kind="captions"
  src="/captions.vtt"
  srcLang="en"
  label="English captions"
/>
    </video>

  </div>

  <div className="mb-6 text-center">

    <p className="text-5xl font-black">
      $50 CAD
    </p>

  </div>

  <button
  className="rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-bold text-zinc-400 cursor-default"
>
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
      <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-400">
        © 2026 Kaos Garden — All Rights Reserved
      </footer>

    </div>
  );
}

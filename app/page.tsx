"use client";

import { useEffect, useState } from "react";

export default function KaosGardenWebsite() {
  const images = [
    "/images/1000007919.jpg",
    "/images/1000007920.jpg",
    "/images/1000007921.jpg",
    "/images/1000007922.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [showForm, setShowForm] = useState(false);

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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <div className="relative z-10 px-6 text-center">
          <img
  src="/images/1000007960-removebg-preview.png"
  alt="Kaos Garden"
  className="mx-auto mb-8 w-[650px] max-w-full select-none"
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
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
            left: "-120px",
            top: "-70px",
            transform: "rotate(-12deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
            left: "34%",
            top: "-130px",
            transform: "rotate(10deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
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
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
            left: "-120px",
            top: "-80px",
            transform: "rotate(12deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
            right: "-50px",
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

        <img
          src="/images/IMG_20260518_001000_019.jpg"
          alt="Risin Up"
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

        <img
          src="/images/IMG_4383.webp"
          alt="Confidence Is Killing Me"
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
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
            left: "-120px",
            top: "-60px",
            transform: "rotate(-18deg)",
          }}
        />

        <img
          src="/images/file_00000000f0c471fdaef93ef307fd5a31-removebg-preview.png"
          className="absolute object-contain"
          style={{
            right: "-60px",
            bottom: "-50px",
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
    </video>

  </div>

  <div className="mb-6 text-center">

    <p className="text-5xl font-black">
      $50 CAD
    </p>

  </div>

  <button
    onClick={() => setShowForm(true)}
    className="rounded-2xl border border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-black"
  >
    Buy Now
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

      {/* ORDER FORM */}
      {showForm && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">

          <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-4xl font-black">
                Hoodie Order
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="text-3xl text-zinc-400 hover:text-white"
              >
                ×
              </button>

            </div>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-zinc-800 bg-black p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-zinc-800 bg-black p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full rounded-2xl border border-zinc-800 bg-black p-4 outline-none"
              />

              <select className="w-full rounded-2xl border border-zinc-800 bg-black p-4 outline-none">
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>

              <select className="w-full rounded-2xl border border-zinc-800 bg-black p-4 outline-none">
                <option>Payment Method</option>
                <option>PayPal</option>
                <option>Credit Card</option>
                <option>Interac e-Transfer</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-2xl border border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-black"
              >
                Submit Order
              </button>

            </form>

          </div>

        </div>

      )}

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-500">
        © 2026 Kaos Garden — All Rights Reserved
      </footer>

    </div>
  );
}

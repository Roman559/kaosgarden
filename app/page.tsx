export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-95" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="mb-6 text-6xl font-extrabold tracking-[0.3em] md:text-8xl">
            KAOS GARDEN
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 md:text-xl">
            Canadian alternative metal band working on our first album.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#music"
              className="rounded-2xl border border-white px-6 py-3 text-lg transition hover:bg-white hover:text-black"
            >
              Listen Soon
            </a>

            <a
              href="https://instagram.com/kaosgardenmusic"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-3 text-lg font-semibold text-black transition hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="grid gap-10 px-6 py-24 md:grid-cols-2 md:px-16">
        <div>
          <h2 className="mb-6 text-4xl font-bold">About Us</h2>

          <p className="text-lg leading-8 text-zinc-300">
            Kaos Garden is a Canadian band blending heavy riffs,
            atmospheric melodies, and raw energy. We are currently
            recording our debut album and preparing new singles for release.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
          <h3 className="mb-4 text-2xl font-semibold">
            Current Status
          </h3>

          <ul className="space-y-3 text-zinc-300">
            <li>• First album in production</li>
            <li>• New singles coming soon</li>
            <li>• Building our live set</li>
            <li>• Follow us for updates</li>
          </ul>
        </div>
      </section>

      {/* Music */}
      <section
        id="music"
        className="bg-zinc-950 px-6 py-24 md:px-16"
      >
        <h2 className="mb-12 text-center text-4xl font-bold">
          Upcoming Releases
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-black p-6 transition hover:-translate-y-1 hover:border-white">
            <div className="mb-4 h-52 rounded-2xl bg-zinc-900" />

            <h3 className="mb-2 text-2xl font-semibold">
              Risin&apos; Up
            </h3>

            <p className="text-zinc-400">
              First single from the upcoming debut album.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black p-6 transition hover:-translate-y-1 hover:border-white">
            <div className="mb-4 h-52 rounded-2xl bg-zinc-900" />

            <h3 className="mb-2 text-2xl font-semibold">
              Debut Album
            </h3>

            <p className="text-zinc-400">
              Heavy sound, emotional atmosphere, and aggressive energy.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black p-6 transition hover:-translate-y-1 hover:border-white">
            <div className="mb-4 h-52 rounded-2xl bg-zinc-900" />

            <h3 className="mb-2 text-2xl font-semibold">
              Live Shows
            </h3>

            <p className="text-zinc-400">
              Concert announcements and future performances
              will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 text-center md:px-16">
        <h2 className="mb-6 text-4xl font-bold">
          Stay Connected
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300">
          Follow Kaos Garden on social media and be the first
          to hear new music, updates, and behind-the-scenes content.
        </p>

        <a
          href="https://instagram.com/kaosgardenmusic"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
        >
          @kaosgardenmusic
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-zinc-500">
        © 2026 Kaos Garden. All rights reserved.
      </footer>
    </div>
  );
}
import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-950/60 via-gray-950/70 to-gray-950" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-28 sm:py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide text-white ring-1 ring-white/20 backdrop-blur">
            webrnawa.com — Personal Site
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Nawa — PR & Web3 Builder
          </h1>
          <p className="mt-4 text-base text-gray-200 sm:text-lg">
            Menghubungkan brand dengan komunitas melalui strategi PR modern dan eksperimen Web3. Fokus pada hasil yang
            terukur, kolaborasi yang hangat, dan storytelling yang relevan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-lg shadow-white/10 transition hover:opacity-90"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Download CV
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white"
            >
              Lihat Portfolio →
            </a>
          </div>
        </motion.div>

        <motion.div
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 grid w-full gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:grid-cols-3"
        >
          <div>
            <p className="text-sm font-medium text-white">Latar Belakang</p>
            <p className="mt-1 text-sm text-gray-300">
              Berpengalaman di PR, komunitas, dan kolaborasi brand; eksplorasi produk dan growth di ekosistem Web3.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Keahlian Inti</p>
            <p className="mt-1 text-sm text-gray-300">PR Strategy, Community Building, Content, Web3 Experiments.</p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Saat Ini</p>
            <p className="mt-1 text-sm text-gray-300">Ngembangin project eksperimen dan bantu brand go-to-community.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

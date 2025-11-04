import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Lazy-load Spline to avoid heavy initialization during first paint and reduce crash risk in dev strict mode
const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

// Simple error boundary so Spline failures don't crash the whole app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-950">
          <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
            3D scene unavailable. Continue scrolling.
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Hero() {
  // Render Spline only after mount to avoid potential double-mount issues in dev
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gray-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        {mounted ? (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950/60">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                </div>
              }
            >
              <LazySpline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
          </ErrorBoundary>
        ) : null}
      </div>

      {/* Gradient overlay must not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/70 to-gray-950" />

      {/* Content */}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
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

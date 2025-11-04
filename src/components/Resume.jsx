import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur"
        >
          <h3 className="text-xl font-semibold text-white">Skills</h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-white">Tech Skills</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>React, TypeScript, Next.js, Tailwind</li>
                <li>Web3 basics (wallet, NFT, Sui)</li>
                <li>Automation & API</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Tools</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Figma, Notion, GitHub</li>
                <li>GA/Looker Studio</li>
                <li>Framer, Spline</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Soft Skills</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Storytelling & Writing</li>
                <li>Community Building</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur"
        >
          <h3 className="text-xl font-semibold text-white">Experience & Education</h3>

          <div className="mt-5 space-y-5">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">PR Strategist — Freelance</p>
                <span className="text-xs text-gray-400">2022 — Now</span>
              </div>
              <ul className="mt-2 list-inside list-disc text-sm text-gray-300">
                <li>Membangun strategi PR dan kampanye kolaborasi.</li>
                <li>Meningkatkan engagement komunitas dan earned media.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">Community Lead — Web3 Project</p>
                <span className="text-xs text-gray-400">2021 — 2022</span>
              </div>
              <ul className="mt-2 list-inside list-disc text-sm text-gray-300">
                <li>Mengelola program komunitas lintas channel.</li>
                <li>Menumbuhkan kolaborasi kreator dan partner.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">S1 Komunikasi</p>
                <span className="text-xs text-gray-400">2017 — 2021</span>
              </div>
              <ul className="mt-2 list-inside list-disc text-sm text-gray-300">
                <li>Fokus ke PR, brand, dan media digital.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

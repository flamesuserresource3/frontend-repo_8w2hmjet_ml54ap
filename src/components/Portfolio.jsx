import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    name: 'Community Launch Playbook',
    image: 'https://placehold.co/600x380/0f172a/ffffff?text=Community+Playbook',
    desc: 'Blueprint praktis untuk meluncurkan komunitas brand dalam 30 hari.',
    stack: ['Strategy', 'Content', 'Automation'],
    demo: '#',
    repo: '#',
  },
  {
    name: 'Web3 Onboarding Microsite',
    image: 'https://placehold.co/600x380/0f172a/ffffff?text=Web3+Microsite',
    desc: 'Situs edukasi singkat: wallet, NFT, dan dasar token economics.',
    stack: ['React', 'Tailwind', 'Sui'],
    demo: '#',
    repo: '#',
  },
  {
    name: 'Brand Collab Tracker',
    image: 'https://placehold.co/600x380/0f172a/ffffff?text=Collab+Tracker',
    desc: 'Dashboard ringan untuk memantau kolaborasi dan outcome PR.',
    stack: ['Notion API', 'Automation'],
    demo: '#',
    repo: '#',
  },
  {
    name: 'Content Engine v1',
    image: 'https://placehold.co/600x380/0f172a/ffffff?text=Content+Engine',
    desc: 'Template editorial dan distribusi multi-channel untuk product story.',
    stack: ['Editorial', 'Distribution'],
    demo: '#',
    repo: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Project Portfolio</h2>
          <p className="mt-2 text-sm text-gray-400">
            3–5 proyek yang paling relevan. Kualitas diutamakan.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group overflow-hidden rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="space-y-3 p-4">
              <h3 className="text-lg font-medium text-white">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white"
                >
                  <Link size={16} /> Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white"
                >
                  <Github size={16} /> Repo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

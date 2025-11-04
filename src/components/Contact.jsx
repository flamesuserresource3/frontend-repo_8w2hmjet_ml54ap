import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-8 text-white backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 max-w-xl text-sm text-gray-300">
              Terbuka untuk kolaborasi, konsultasi, dan proyek baru. Silakan hubungi melalui email atau platform di bawah ini.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@webrnawa.com"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg shadow-white/10 transition hover:opacity-90"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

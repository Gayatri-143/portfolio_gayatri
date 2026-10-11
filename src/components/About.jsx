import React from 'react';
import { Database, Code2, Terminal, Zap, CheckCircle2, UserCheck, Flame, BookOpen, Layers, Cloud } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const statIconMap = {
  Code2: Code2,
  Briefcase: Layers,
  Database: Database,
  Terminal: Terminal
};

const highlights = [
  {
    title: "Data Engineering & GCP Cloud",
    description: "Designing efficient ETL workflows, data processing scripts with Pandas & SQL, GCP Cloud data architectures, and stream dashboards with Streamlit.",
    icon: Cloud,
    color: "text-cyan-400"
  },
  {
    title: "Machine Learning & GenAI",
    description: "Building RAG knowledge assistants with LangChain & FAISS, regression models, and cybersecurity threat AI systems (ForensIQ).",
    icon: Zap,
    color: "text-purple-400"
  },
  {
    title: "Core CS & Systems",
    description: "Solid theoretical & practical grounding in C++, C, Go (Golang), Operating Systems, Database Management Systems (DBMS), and DSA.",
    icon: BookOpen,
    color: "text-emerald-400"
  },
  {
    title: "Active Open Source",
    description: "Passionate about contributing to open-source tools, writing clean modular code, and continuously building impactful projects.",
    icon: Flame,
    color: "text-amber-400"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient">Gayatri</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Energized Data Engineer, ETL Developer, and GCP Cloud Engineer dedicated to high-performance data systems, machine learning pipelines, and open-source software.
          </p>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 space-y-6 flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full inline-block" />
                Data Engineer, ETL & GCP Cloud Specialist
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a proactive Computer Science graduate targeting <span className="text-cyan-400 font-semibold">Data Engineer</span>, <span className="text-cyan-400 font-semibold">ETL Developer</span>, <span className="text-cyan-400 font-semibold">GCP Cloud Engineer</span>, and <span className="text-cyan-400 font-semibold">Big Data Engineer</span> positions.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My work spans building end-to-end data analytics applications, machine learning models, and RAG knowledge assistants in <span className="text-cyan-400 font-semibold">Python</span>, <span className="text-cyan-400 font-semibold">SQL</span>, and <span className="text-cyan-400 font-semibold">GCP Cloud</span>, alongside high-concurrency backend services in <span className="text-cyan-400 font-semibold">Go</span> and systems programming in <span className="text-cyan-400 font-semibold">C++</span> and <span className="text-cyan-400 font-semibold">C</span>.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>B.Tech in CSE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>181+ LeetCode Solved</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>GCP Cloud & ETL</span>
              </div>
            </div>
          </div>

          {/* Stats Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => {
              const IconComp = statIconMap[stat.icon] || Database;
              const hasItems = Array.isArray(stat.items) && stat.items.length > 0;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between border border-slate-800/80 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-slate-400 font-medium font-mono uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>

                  <div className="mt-5">
                    {hasItems ? (
                      <div className="flex flex-wrap gap-1.5">
                        {stat.items.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-cyan-400 transition-colors">
                        {stat.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Core Pillars / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4 border border-slate-800/80"
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

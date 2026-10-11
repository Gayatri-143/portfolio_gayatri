import React, { useState } from 'react';
import { 
  Code, FileCode, Terminal, Layout, Database, Atom, Zap, 
  Palette, Layers, Monitor, Server, Cpu, Globe, HardDrive, 
  GitBranch, Shield, Cloud, Wrench 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code, FileCode, Terminal, Layout, Database, Atom, Zap, 
  Palette, Layers, Monitor, Server, Cpu, Globe, HardDrive, 
  GitBranch, Shield, Tool: Wrench, Cloud
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-wider uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tech Stack & <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Data engineering tools, GCP Cloud, machine learning frameworks, and core CS languages.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillsData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.category}</span>
              <span className="px-2 py-0.5 rounded-md text-[10px] bg-black/30 font-mono">
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeCategory].skills.map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/80 space-y-4 group relative overflow-hidden"
              >
                {/* Background subtle shine */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all duration-500" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800/60">
                  <div
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* All Skills Micro Badges */}
        <div className="mt-16 pt-10 border-t border-slate-800/60">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500">
              Quick Tech Overview
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "GCP Cloud", "Python", "SQL", "ETL Pipelines", "Pandas", "Streamlit", "RAG", 
              "LangChain", "FAISS", "Scikit-Learn", "Go (Golang)", "C++", "C", "Operating Systems", 
              "DBMS", "Data Structures", "Algorithms", "Git", "GitHub", "Firebase", "Linux"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

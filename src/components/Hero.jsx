import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Terminal, Sparkles, Award, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide text-cyan-300">
                Active Open Source & Open for Data Engineer / GCP Roles
              </span>
            </div>

            {/* Main Header */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="text-gradient">Gayatri U. Jadhav</span>
              </h1>
              
              {/* Dynamic Tagline Ticker */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <p className="text-base sm:text-xl font-mono text-cyan-400/90 flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400 animate-pulse shrink-0" />
                  <span className="transition-all duration-500 font-semibold">
                    {personalInfo.taglines[taglineIndex]}
                  </span>
                </p>
              </div>
            </div>

            {/* Paragraph Bio */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Explore Projects & Pipelines</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm hover:bg-amber-500/20 transition-all duration-300"
              >
                <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode (181+ Solved)</span>
              </a>
            </div>

            {/* Quick Links Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
              <span className="text-xs uppercase tracking-widest font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                title="GitHub @Gayatri-143"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                title="LeetCode Profile"
              >
                <LeetcodeIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-cyan-400 transition-colors"
                title="Email Me"
              >
                <Terminal className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Code Card Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Code Editor Box */}
              <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                {/* Editor Header Bar */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>gcp_pipeline_engine.py</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>

                {/* Code Snippet Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300 bg-slate-950/90 overflow-x-auto">
                  <div><span className="text-purple-400">import</span> <span className="text-cyan-300">pandas</span> <span className="text-purple-400">as</span> <span className="text-yellow-300">pd</span></div>
                  <div><span className="text-purple-400">from</span> <span className="text-cyan-300">google.cloud</span> <span className="text-purple-400">import</span> <span className="text-emerald-300">storage, bigquery</span></div>
                  <div className="pt-2"><span className="text-blue-400">class</span> <span className="text-yellow-400">DataEngineer</span>:</div>
                  <div className="pl-4 text-slate-500"># Data Engineering & GCP Cloud</div>
                  <div className="pl-4"><span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span>(self):</div>
                  <div className="pl-8">self.name = <span className="text-emerald-300">"Gayatri U. Jadhav"</span></div>
                  <div className="pl-8">self.roles = [<span className="text-emerald-300">"Data Engineer"</span>, <span className="text-emerald-300">"GCP Cloud Engineer"</span>, <span className="text-emerald-300">"ETL Developer"</span>]</div>
                  <div className="pl-8">self.core_stack = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"SQL"</span>, <span className="text-emerald-300">"GCP Cloud"</span>, <span className="text-emerald-300">"Go"</span>, <span className="text-emerald-300">"C++"</span>]</div>
                  <div className="pl-8">self.leetcode_solved = <span className="text-amber-400">"181+"</span></div>
                  <div className="pt-2 pl-4"><span className="text-blue-400">def</span> <span className="text-yellow-300">run_gcp_etl_pipeline</span>(self, data_stream):</div>
                  <div className="pl-8">processed_df = pd.DataFrame(data_stream)</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> processed_df.load_to_gcp_cloud()</div>
                </div>

                {/* Editor Footer / Stats Ribbon */}
                <div className="bg-slate-900/90 px-4 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>ETL Status: Active & Operational</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>6 Core Projects</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

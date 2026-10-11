import React from 'react';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic achievements, development experience, and active participation in software engineering communities.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 space-y-12">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-2 bottom-2 left-2 sm:left-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 rounded-full" />

          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Timeline Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
                
                {/* Header Period & Title */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-purple-400" /> {item.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

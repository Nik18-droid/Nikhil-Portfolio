import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Mail,
  FileText,
  Database,
  BarChart3,
  TrendingUp,
  Layers,
  Zap,
  Activity,
  Globe,
  Cpu,
  Plane,
  Brain,
  MapPin,
  Linkedin,
  Github,
  User,
  Briefcase,
  Award,
} from 'lucide-react';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- SUB-COMPONENTS FOR PAGES ---

  const HomeView = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 animate-in fade-in zoom-in duration-500">
      {/* HERO */}
      <div className="col-span-1 md:col-span-12 bg-[#171717] border border-[#333] rounded-xl p-8 md:p-16 flex flex-col items-center justify-center text-center bento-card relative overflow-hidden group min-h-[450px]">
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-grotesk font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Optimizing the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              engine
            </span>{' '}
            of business.
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] font-inter font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            I bridge the gap between operational chaos and data-driven clarity.
            Translating raw metrics into strategic roadmaps.
            <span className="block mt-4 text-sm font-mono text-[#666]">
              Ex-FNZ &bull; Ex-Adhumour &bull; Strat/Ops Specialist
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1RX9nJkHfILFI4_H1F0rzbitOK76j1W1r/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              View Resume
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => handleNavClick('work')}
              className="px-8 py-3 bg-[#111] border border-[#333] text-white font-semibold rounded-lg hover:bg-[#1a1a1a] hover:border-[#555] transition-all flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              View Work
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats / Teasers */}
      <div
        onClick={() => handleNavClick('work')}
        className="col-span-1 md:col-span-4 bg-[#171717] border border-[#333] rounded-xl p-8 cursor-pointer bento-card glass-panel group relative overflow-hidden h-[280px]"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Brain className="w-24 h-24 text-purple-500" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#666] mb-2">
              Featured Project
            </h3>
            <div className="text-white font-bold text-2xl">
              Project Sentinel
            </div>
          </div>
          <div>
            <div className="text-4xl font-grotesk font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
              95%
            </div>
            <p className="text-sm text-[#888]">Analysis Time Reduced</p>
          </div>
        </div>
      </div>

      <div
        onClick={() => handleNavClick('work')}
        className="col-span-1 md:col-span-4 bg-[#171717] border border-[#333] rounded-xl p-8 cursor-pointer bento-card glass-panel group relative overflow-hidden h-[280px]"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Plane className="w-24 h-24 text-indigo-500" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#666] mb-2">
              Strategic Proposal
            </h3>
            <div className="text-white font-bold text-2xl">IndiGo Airlines</div>
          </div>
          <div>
            <div className="text-4xl font-grotesk font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
              ₹875 Cr
            </div>
            <p className="text-sm text-[#888]">Revenue Opportunity</p>
          </div>
        </div>
      </div>

      <div
        onClick={() => handleNavClick('skills')}
        className="col-span-1 md:col-span-4 bg-[#171717] border border-[#333] rounded-xl p-8 cursor-pointer bento-card glass-panel group relative overflow-hidden h-[280px]"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Cpu className="w-24 h-24 text-blue-500" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#666] mb-2">
              Toolkit
            </h3>
            <div className="text-white font-bold text-2xl">Data & Strategy</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['SQL', 'Python', 'Power BI', 'Excel'].map((t) => (
              <span
                key={t}
                className="text-xs font-mono bg-[#222] border border-[#333] px-2 py-1 rounded text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const WorkView = () => (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* SECTION 1: PROJECTS */}
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-[#333] pb-4">
          <Brain className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-grotesk font-bold text-white">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Sentinel */}
          <a
            href="https://github.com/Nik18-droid/Project-Sentinel/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card group relative overflow-hidden block"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Database className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    Project Sentinel
                  </h3>
                  <p className="text-xs font-mono text-purple-400">
                    AI-Augmented Customer Churn Analysis
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#444] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                Built an end-to-end churn analysis solution using SQL, Power BI,
                and Python. Developed a conversational AI interface (OpenAI API)
                to enable real-time data querying.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#333] pt-4">
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-[#666] uppercase tracking-wider">
                    Time Reduced
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">₹20.6L</div>
                  <div className="text-xs text-[#666] uppercase tracking-wider">
                    Risk Identified
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Project IndiGo */}
          <a
            href="https://github.com/Nik18-droid/IndiGo-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card group relative overflow-hidden block"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Plane className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    Project IndiGo
                  </h3>
                  <p className="text-xs font-mono text-indigo-400">
                    Strategic Proposal & Prototype
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#444] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                Designed "Explore Map" to capture budget-first travelers leaking
                to aggregators. Built financial models and a functional HTML
                prototype.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#333] pt-4">
                <div>
                  <div className="text-2xl font-bold text-white">₹875 Cr</div>
                  <div className="text-xs text-[#666] uppercase tracking-wider">
                    Revenue Opp
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Strat</div>
                  <div className="text-xs text-[#666] uppercase tracking-wider">
                    Proposal
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* SECTION 2: WORK EXPERIENCE */}
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-[#333] pb-4 mt-12">
          <Briefcase className="w-5 h-5 text-emerald-500" />
          <h2 className="text-xl font-grotesk font-bold text-white">
            Work Experience
          </h2>
        </div>

        <div className="space-y-4">
          {/* FNZ */}
          <div className="bg-[#171717] border border-[#333] rounded-xl p-6 md:p-8 bento-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">FNZ Group</h3>
                <p className="text-sm text-[#666]">
                  Investment Administrator &bull; Process Optimization
                </p>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono rounded-full self-start md:self-auto">
                30% Efficiency Gain
              </div>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
              Addressed a critical knowledge gap in the valuations team causing
              inefficiencies. Proactively designed and built a centralized
              Excel-based process documentation system from scratch to
              standardize complex workflows.
            </p>
            <div className="flex gap-2 text-xs font-mono text-[#666]">
              <span className="bg-[#222] px-2 py-1 rounded">
                Process Re-engineering
              </span>
              <span className="bg-[#222] px-2 py-1 rounded">Excel</span>
            </div>
          </div>

          {/* Adhumour */}
          <div className="bg-[#171717] border border-[#333] rounded-xl p-6 md:p-8 bento-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Adhumour</h3>
                <p className="text-sm text-[#666]">
                  CRM Analyst &bull; Data-Driven Retention
                </p>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono rounded-full self-start md:self-auto">
                25% Retention Uplift
              </div>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
              Analyzed HubSpot data to identify at-risk segments and deployed
              targeted retention campaigns. Conducted comprehensive data
              analysis to identify customer behavior patterns.
            </p>
            <div className="flex gap-2 text-xs font-mono text-[#666]">
              <span className="bg-[#222] px-2 py-1 rounded">HubSpot</span>
              <span className="bg-[#222] px-2 py-1 rounded">Data Analysis</span>
            </div>
          </div>

          {/* British Council */}
          <div className="bg-[#171717] border border-[#333] rounded-xl p-6 md:p-8 bento-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  British Council
                </h3>
                <p className="text-sm text-[#666]">
                  Customer Service Executive &bull; Operations
                </p>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono rounded-full self-start md:self-auto">
                96% Resolution Rate
              </div>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
              Analyzed customer complaint data to identify root causes and
              service gaps. Created data visualizations and reports that led to
              measurable service improvements and reduced rescheduling costs.
            </p>
            <div className="flex gap-2 text-xs font-mono text-[#666]">
              <span className="bg-[#222] px-2 py-1 rounded">
                Ops Efficiency
              </span>
              <span className="bg-[#222] px-2 py-1 rounded">Data Viz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-right-4 duration-500 h-full">
      {/* Column 1: Technical */}
      <div className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card">
        <div className="flex items-center gap-3 mb-8">
          <Database className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-grotesk font-bold text-white">
            Technical & Data Stack
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              name: 'SQL',
              desc: 'Analytical Queries & Data Manipulation',
              icon: <Database className="w-5 h-5" />,
              color: 'text-blue-400',
            },
            {
              name: 'Python',
              desc: 'Data Analysis, Pandas, API Integration',
              icon: <Cpu className="w-5 h-5" />,
              color: 'text-yellow-400',
            },
            {
              name: 'Power BI',
              desc: 'Dashboard Development & Viz',
              icon: <BarChart3 className="w-5 h-5" />,
              color: 'text-yellow-500',
            },
            {
              name: 'Excel',
              desc: 'PivotTables, VLOOKUP, Complex Formulas',
              icon: <FileText className="w-5 h-5" />,
              color: 'text-green-500',
            },
            {
              name: 'HubSpot',
              desc: 'CRM Management & Analysis',
              icon: <User className="w-5 h-5" />,
              color: 'text-orange-500',
            },
          ].map((skill) => (
            <div key={skill.name} className="flex items-start gap-4 group">
              <div
                className={`mt-1 ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                {skill.icon}
              </div>
              <div>
                <h3 className="text-white font-bold group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-[#666] font-mono mt-1">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Strategic */}
      <div className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card">
        <div className="flex items-center gap-3 mb-8">
          <Layers className="w-6 h-6 text-purple-500" />
          <h2 className="text-xl font-grotesk font-bold text-white">
            Strategic Core
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              name: 'Requirements Gathering',
              desc: 'Translating business needs to specs',
            },
            {
              name: 'Process Documentation',
              desc: 'Standardizing complex workflows',
            },
            {
              name: 'Workflow Analysis',
              desc: 'Identifying bottlenecks & optimization',
            },
            {
              name: 'Stakeholder Management',
              desc: 'Cross-functional collaboration',
            },
            {
              name: 'Data-Driven Decision Making',
              desc: 'Actionable insights from raw data',
            },
          ].map((skill) => (
            <div key={skill.name} className="flex items-start gap-4 group">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all"></div>
              <div>
                <h3 className="text-white font-medium">{skill.name}</h3>
                <p className="text-sm text-[#666] font-mono mt-1">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
      <div className="bg-[#171717] border border-[#333] rounded-xl p-8 md:p-12 bento-card text-center">
        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#333]">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-white mb-4">
          Ready to build?
        </h2>
        <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-lg mx-auto">
          I am currently open to{' '}
          <span className="text-white font-medium">Business Analyst</span> and{' '}
          <span className="text-white font-medium">Operations Strategy</span>{' '}
          roles.
        </p>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <a
            href="mailto:nikhil_sharma1998@outlook.com"
            className="flex items-center justify-center gap-3 bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-5 h-5" />
            nikhil_sharma1998@outlook.com
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://linkedin.com/in/nikhilsharma8215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#111] border border-[#333] text-white py-3 rounded-lg hover:bg-[#222] transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/Nik18-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#111] border border-[#333] text-white py-3 rounded-lg hover:bg-[#222] transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#333] inline-flex items-center gap-2 text-sm text-[#666] font-mono bg-[#0f0f0f] px-4 py-2 rounded-full border border-[#222]">
          <MapPin className="w-4 h-4" /> Global Mobility: UK Visa / India
          Resident
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen bg-[#0A0A0A] text-[#A1A1AA] font-sans selection:bg-blue-500/30 selection:text-blue-200 transition-opacity duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .font-inter { font-family: 'Inter Tight', sans-serif; }
        .font-simple { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }

        .bento-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .bento-card:hover { border-color: rgba(59, 130, 246, 0.4); transform: translateY(-2px); }
        .glass-panel { background: rgba(23, 23, 23, 0.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      `}</style>

      <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
        {/* --- GLOBAL HEADER (Always Visible) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#171717] border border-[#333] rounded-xl p-4 mb-6 sticky top-4 z-50 shadow-2xl shadow-black/50 backdrop-blur-md bg-opacity-90">
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="h-10 w-10 bg-white text-black rounded-lg flex items-center justify-center font-simple font-bold text-xl group-hover:bg-blue-50 transition-colors">
              N
            </div>
            <div>
              <h1 className="text-white font-simple font-bold text-xl tracking-wide leading-none uppercase">
                Nikhil Sharma
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#666] mt-0.5 font-semibold">
                Strategic Business Analyst
              </p>
            </div>
          </div>

          <nav className="flex items-center bg-[#0A0A0A] rounded-full p-1 border border-[#333] mt-4 md:mt-0 overflow-x-auto max-w-full">
            {[
              { id: 'home', label: 'Home' },
              { id: 'work', label: 'Work' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-[#222] text-white shadow-lg'
                    : 'text-[#888] hover:text-white hover:bg-[#1f1f1f]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-gray-400">
                Open to Work
              </span>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        <div className="min-h-[600px]">
          {activeTab === 'home' && <HomeView />}
          {activeTab === 'work' && <WorkView />}
          {activeTab === 'skills' && <SkillsView />}
          {activeTab === 'contact' && <ContactView />}
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-[#444] font-mono uppercase tracking-wider gap-4 border-t border-[#222] pt-8">
          <div>© 2024 Nikhil Sharma</div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/nikhilsharma8215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors"
            >
              <Linkedin className="w-3 h-3" /> LinkedIn
            </a>
            <a
              href="https://github.com/Nik18-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors"
            >
              <Github className="w-3 h-3" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

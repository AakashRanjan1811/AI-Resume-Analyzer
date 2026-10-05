import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

          <h1 className="text-2xl font-bold text-cyan-400">
            AI Resume Analyzer
          </h1>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-300">

            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>

            <Link to="/analyzer" className="hover:text-cyan-400 transition">
              Analyzer
            </Link>

            <Link to="/dashboard" className="hover:text-cyan-400 transition">
              Dashboard
            </Link>

            <Link to="/about" className="text-cyan-400">
              About
            </Link>

            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>

          </div>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm">
          About The Project
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-black tracking-tight leading-tight">
          About AI Resume Analyzer
        </h1>

        <p className="mt-7 text-lg text-slate-400 leading-9 max-w-3xl mx-auto">
          AI Resume Analyzer is a modern web application that helps students and
          developers improve their resumes using ATS analysis, intelligent skill
          matching, and AI-powered resume suggestions.
        </p>

      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* WHAT IS THIS */}

            <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-8">

              <h2 className="text-3xl font-bold text-white">
                What Does This Project Do?
              </h2>

              <p className="mt-6 text-slate-400 leading-9 text-[17px]">
                AI Resume Analyzer helps users check how strong their resume is
                for modern hiring systems and ATS platforms.
              </p>

              <p className="mt-4 text-slate-400 leading-9 text-[17px]">
                Users can upload resumes, compare them with job descriptions,
                detect missing skills, and get suggestions to improve resume
                quality and technical relevance.
              </p>

            </div>

            {/* WHY BUILT */}

            <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-8">

              <h2 className="text-3xl font-bold text-white">
                Why Was It Built?
              </h2>

              <p className="mt-6 text-slate-400 leading-9 text-[17px]">
                Many resumes get rejected because they are not optimized for ATS
                systems or do not match the required job skills.
              </p>

              <p className="mt-4 text-slate-400 leading-9 text-[17px]">
                This project was built to help students and developers understand
                resume weaknesses and improve their chances of getting shortlisted.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            {/* FEATURES */}

            <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-8">

              <h2 className="text-3xl font-bold text-white">
                Main Features
              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl">
                    📊
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400">
                      ATS Scoring
                    </h3>

                    <p className="mt-1 text-slate-400 leading-8">
                      Analyze resume compatibility with hiring systems.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl">
                    🧠
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-400">
                      Skill Matching
                    </h3>

                    <p className="mt-1 text-slate-400 leading-8">
                      Detect matched and missing technologies.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-xl">
                    ✨
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">
                      AI Suggestions
                    </h3>

                    <p className="mt-1 text-slate-400 leading-8">
                      Get smart recommendations to improve resumes.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* TECH STACK */}

            <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-8">

              <h2 className="text-3xl font-bold text-white">
                Technologies Used
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">

                {[
                  "React",
                  "Tailwind CSS",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "AI Concepts",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-5 py-2 rounded-xl border border-white/10 bg-[#111827] text-sm text-slate-300"
                  >
                    {tech}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 p-10 text-center">

          <h2 className="text-4xl font-bold">
            Improve Your Resume With AI
          </h2>

          <p className="mt-5 text-slate-400 text-lg leading-8 max-w-2xl mx-auto">
            Upload your resume, analyze ATS compatibility, detect missing skills,
            and get intelligent resume improvement suggestions instantly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">

            <button
              onClick={() => window.history.back()}
              className="h-12 px-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-sm font-semibold"
            >
              ← Go Back
            </button>

            <Link
              to="/analyzer"
              className="h-12 px-7 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition"
            >
              Try Analyzer
            </Link>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-[#081225]">

        <div className="max-w-6xl mx-auto px-6 py-14 text-center">

          <h2 className="text-3xl font-bold text-cyan-400">
            AI Resume Analyzer
          </h2>

          <p className="mt-4 text-slate-400">
            Built with React, Tailwind CSS, and AI concepts.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            © 2026 All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  );
};

export default About;
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileSpreadsheet,
  Github,
  Mail,
  MapPin,
  Printer,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";

const profile = {
  name: "Kirill Kuznetsov",
  role: "Data Automation & Database Specialist",
  email: "KllKKuznetsov@yandex.com",
  location: "Remote · International",
  github: "https://github.com/KKKuznetsov",
  automationRepo: "https://github.com/KKKuznetsov/automatic-report-generation",
};

const stats = [
  { value: "8+", label: "years in data & automation" },
  { value: "20", label: "specialists in the team I lead" },
  { value: "4", label: "core tools: Excel, VBA, Python, SQL" },
  { value: "Global", label: "pharmaceutical data projects" },
];

const services = [
  {
    icon: FileSpreadsheet,
    title: "Excel & VBA Automation",
    text: "Macros, one-click workflows, validation, formulas, Power Query, batch processing and optimization of existing workbooks.",
  },
  {
    icon: Code2,
    title: "Python Automation",
    text: "Reusable scripts for Excel/CSV processing, scheduled jobs, report generation, file transformation and error handling.",
  },
  {
    icon: Database,
    title: "SQL Server & ETL",
    text: "Database schemas, stored procedures, imports/exports, transformations, reference data and repeatable data pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Data Quality & Matching",
    text: "Cleaning, deduplication, reference matching, classification, configurable rules and review queues for ambiguous records.",
  },
  {
    icon: Bot,
    title: "Browser & API Automation",
    text: "Authorized portal workflows, API ingestion, report downloads and browser automation with Playwright.",
  },
  {
    icon: Workflow,
    title: "Recurring Reporting",
    text: "From raw source files to validated, structured reports with predictable folders, naming rules and scheduled execution.",
  },
];

const projects = [
  {
    title: "Automated Reporting Workflow",
    kicker: "Reporting automation",
    description:
      "Built a reusable reporting workflow that collects recurring source data, validates inputs, transforms datasets and produces structured outputs with minimal manual involvement.",
    outcome:
      "Replaced repetitive download-and-process steps with a controlled, repeatable pipeline designed for daily operations.",
    tags: ["Python", "Playwright", "Excel", "Data Quality"],
    link: profile.automationRepo,
    linkLabel: "View public framework",
  },
  {
    title: "Large-Scale Address & Data Quality Enrichment",
    kicker: "Classification & normalization",
    description:
      "Designed a pipeline for hundreds of thousands of address records using character-level machine-learning models together with configurable regex rules and confidence thresholds.",
    outcome:
      "Made classification more consistent, auditable and easier to maintain while keeping uncertain cases out of automatic decisions.",
    tags: ["Python", "Machine Learning", "Regex", "Excel"],
  },
  {
    title: "Incremental Public Data Loader",
    kicker: "API → SQL Server",
    description:
      "Implemented an incremental ingestion process from public web endpoints into Microsoft SQL Server. Initial execution loads history; later runs identify and fetch only new records.",
    outcome:
      "Reduced unnecessary reprocessing and created a repeatable ingestion pattern with browser-assisted session/token handling where required.",
    tags: ["Python", "API", "Playwright", "SQL Server"],
  },
  {
    title: "Multi-Format SQL Export Pipeline",
    kicker: "Database exports",
    description:
      "Built stored-procedure-driven exports from SQL Server into Parquet and TXT, with stable file naming, controlled numeric types and support for multiple fact/reference datasets.",
    outcome:
      "Standardized recurring client-ready exports and separated data preparation in SQL from file delivery in Python.",
    tags: ["SQL Server", "Python", "ETL", "Parquet"],
  },
  {
    title: "Excel & VBA Productivity Toolkit",
    kicker: "Spreadsheet engineering",
    description:
      "Created dozens of Excel tools, macros and validation utilities for data preparation, quality checks, transformation and operator workflows.",
    outcome:
      "Reduced repetitive manual work and improved processing speed in several internal workflows, while standardizing outputs for downstream systems.",
    tags: ["Excel", "VBA", "SQL", "Power Query"],
  },
  {
    title: "Geospatial Address Enrichment",
    kicker: "Browser automation",
    description:
      "Automated address lookup and geographic enrichment using browser workflows with fallback search logic, batch progress tracking and diagnostics for unresolved records.",
    outcome:
      "Turned a manual lookup process into a batch workflow while preserving exceptions for review instead of forcing low-confidence results.",
    tags: ["Python", "Playwright", "Excel", "Web Automation"],
  },
];

const experience = [
  {
    period: "2021 — Present",
    role: "Head of Special Projects",
    company: "RNC Pharma",
    text: "Lead a 20-person cross-functional team of developers, analysts, managers and data specialists. The department designs databases, data models and automation solutions for leading global pharmaceutical companies. I remain directly involved in requirements, architecture, data workflows and solution review.",
  },
  {
    period: "2020",
    role: "Head of File Preparation Group",
    company: "RNC Pharma",
    text: "Built and led a dedicated team responsible for preparing and validating import files, improving quality controls and shortening recurring preparation cycles.",
  },
  {
    period: "2018 — 2019",
    role: "Database / PC Operator",
    company: "RNC Pharma",
    text: "Started close to the data itself: preparing files, checking loaded datasets, maintaining reference data, investigating recurring errors and building early VBA + SQL automation for validation.",
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {text && <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">{text}</p>}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-[#07110f] text-slate-100 selection:bg-emerald-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[45rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07110f]/85 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 font-bold text-slate-950">KK</span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">Kirill Kuznetsov</span>
          </a>
          <nav className="flex items-center gap-2 md:gap-5">
            <a href="#services" className="hidden text-sm text-slate-400 transition hover:text-white sm:block">Services</a>
            <a href="#work" className="hidden text-sm text-slate-400 transition hover:text-white sm:block">Work</a>
            <a href="#experience" className="hidden text-sm text-slate-400 transition hover:text-white md:block">Experience</a>
            <button
              onClick={() => window.print()}
              className="hidden items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 sm:flex"
            >
              <Printer className="h-4 w-4" /> PDF
            </button>
            <a
              href={`mailto:${profile.email}?subject=Automation%20project`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Contact me <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pt-24">
        <section className="grid items-center gap-12 pb-20 md:grid-cols-[1.3fr_0.7fr] md:pb-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300">
              <Sparkles className="h-4 w-4" /> Available for fixed-scope automation projects
            </div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">{profile.role}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-7xl">
              I turn repetitive data work into reliable automation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Excel, VBA, Python and SQL solutions for teams that want fewer manual steps, cleaner data and repeatable reporting workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=Automation%20project`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Discuss a project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium text-white transition hover:bg-white/[0.07]"
              >
                View selected work
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium text-slate-300 transition hover:bg-white/[0.05]"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {profile.location}</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {profile.email}</span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">Fast pilot</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Start with one painful workflow.</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Send an anonymized sample and the expected result. I will define a small deliverable first instead of turning it into a large consulting project.
            </p>
            <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.06] p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Typical small pilot</p>
                  <p className="mt-1 text-3xl font-semibold text-white">$99–129</p>
                </div>
                <CheckCircle2 className="h-7 w-7 text-emerald-400" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">Fixed scope after sample review. Larger integrations are estimated separately.</p>
            </div>
          </motion.aside>
        </section>

        <section className="grid gap-3 border-y border-white/5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.025] p-5">
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              <div className="mt-1 text-sm leading-5 text-slate-500">{stat.label}</div>
            </div>
          ))}
        </section>

        <section id="services" className="scroll-mt-24 py-20 md:py-28">
          <SectionHeading
            eyebrow="What I automate"
            title="Practical automation around the tools your team already uses."
            text="The goal is not to introduce unnecessary infrastructure. I start from the existing workflow, identify repetitive steps and build the smallest reliable solution that removes them."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition hover:border-emerald-300/20 hover:bg-white/[0.045]"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems built around real operational data."
            text="Most production work is confidential, so these case studies describe the engineering problem and solution without exposing client data or proprietary datasets."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: Math.min(index * 0.04, 0.18) }}
                className="group flex flex-col rounded-3xl border border-white/8 bg-[#0b1714] p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">{project.kicker}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-500">0{index + 1}</span>
                </div>
                <p className="mt-5 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 border-l border-emerald-300/30 pl-4 text-sm leading-6 text-slate-300">{project.outcome}</div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition group-hover:text-emerald-200"
                  >
                    {project.linkLabel} <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Experience"
            title="Hands-on data work first. Leadership came later."
            text="I joined RNC Pharma in an operational data role and progressed through team leadership to Head of Special Projects. That path is why I am comfortable both discussing business requirements and debugging the workflow itself."
          />
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={`${item.period}-${item.role}`} className="grid gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-6 md:grid-cols-[190px_1fr] md:p-7">
                <div className="text-sm font-medium text-emerald-400">{item.period}</div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <span className="text-sm text-slate-500">{item.company}</span>
                  </div>
                  <p className="mt-3 max-w-4xl leading-7 text-slate-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="grid gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/[0.10] to-white/[0.025] p-7 md:grid-cols-[0.85fr_1.15fr] md:p-10">
            <div>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">What a good first project looks like</h2>
            </div>
            <div className="grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              {[
                "Merge and validate recurring Excel/CSV files",
                "Replace a repetitive VBA/Excel process",
                "Import spreadsheets into SQL Server",
                "Automate a recurring report",
                "Fix or extend an existing Python/VBA script",
                "Collect authorized web/API data into Excel or SQL",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/8 bg-black/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-emerald-300/15 bg-emerald-400/[0.08] p-7 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Let’s make one process disappear</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Show me the manual workflow. I’ll tell you what can be automated.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Send an anonymized sample, a short description of the steps and the output you expect. I can usually define a small pilot before any large commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Automation%20project`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition hover:bg-white/[0.08]"
            >
              <Github className="h-4 w-4" /> GitHub profile
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/5 py-8 print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 text-sm text-slate-600 sm:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Kirill Kuznetsov</span>
          <span>Excel · VBA · Python · SQL Server · Data Automation</span>
        </div>
      </footer>
    </div>
  );
}

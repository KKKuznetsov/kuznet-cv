import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  FileText,
  Download,
  ChevronDown,
} from "lucide-react";

/**
 * One‑page, interactive resume/portfolio for Кирилл Кузнецов
 * Tech: React + Tailwind + Framer Motion + Lucide icons
 * Notes:
 *  - Edit the data objects below to update content.
 *  - “Print / Save as PDF” creates a clean PDF resume (hides buttons that are tagged print-hidden).
 */

const DATA = {
  name: "Кирилл Кузнецов",
  title: "Системный аналитик / Руководитель спецпроектов",
  location: "Москва, м. Петровско-Разумовская",
  phone: "+7 (968) 752-79-92",
  email: "KllKKuznetsov@yandex.com",
  links: {
    github: "https://github.com/KKKuznetsov?tab=repositories",
    linkedin: "", // нет LinkedIn
    website: "https://your-domain.dev", // TODO: replace or remove
  },
  summary:
    "Руководитель отдела с 7+ годами опыта в построении аналитических систем, интеграции фармацевтических данных и управлении кросс‑функциональной командой 20+ человек. Сильные стороны: системный анализ, ETL, SQL, автоматизация процессов.",
  skills: [
    { group: "Технические", items: ["PostgresSQL", "MS SQL Server", "Excel", "Python", "VBA", "Power Query"] },
    { group: "Data Engineering", items: ["ETL", "Системная интеграция", "Big Data (концепции)"] },
    { group: "Аналитика и менеджмент", items: ["Системный анализ", "Постановка задач", "ТЗ", "Приемочное тестирование", "Документация", "Коммуникации с клиентами"] },
    { group: "Инструменты", items: ["Git", "Docker", "Яндекс трекер/Яндекс вики", "UML/BPMN"] },
  ],
  experience: [
    {
      company: "RNC Pharma",
      location: "Москва",
      role: "Руководитель отдела специальных проектов",
      period: "Январь 2021 — настоящее время",
      bullets: [
        "Руководство отделом (20+ сотрудников: аналитики, разработчики, менеджеры, специалисты по справочникам, операторы).",
        "Проектирование и создание баз данных (витрины, DWH).",
        "Проектирование, введение и тестирование бизнес алгоритмов внутри системы и баз данных",
        "Проектирование и внедрение ETL-процессов интеграции данных вторичных продаж, ОФД‑отчетности, МДЛП и др.",
        "Разработка сложных SQL‑запросов и хранимых процедур в MS SQL Server.",
        "Организация взаимодействия между внутренними командами и заказчиками; проведение встреч, сбор требований, решение инцидентов.",
      ],
      achievements: [
        "Сократил время подготовки исходных данных за счёт автоматизации на Python (ранее файлы подготавливались вручную).",
        "Повысил качество загрузок: сократил ошибки, структурировал загрузку (раньше из-за человеческого фактора данные могли быть загружены не в те поля).",
        "Повысил качество классификации данных: внедрил несколько алгоритмов, значительно увеличивших количество классифицированных строк.",
        "Частично автоматизировал классификацию данных с использованием алгоритмов машинного обучения (насколько позволяли мощности сервера).",
        "Повысил удобство и качество работы сотрудников: разработал десятки инструментов, надстроек и макросов (преимущественно в Excel), что ускорило процессы обработки на 20%.",
        "Оптимизировал алгоритмы, что позволило снизить нагрузку на систему.",
      ],

    },
    {
      company: "RNC Pharma",
      location: "Москва",
      role: "Руководитель группы подготовки файлов импорта",
      period: "Январь 2020 — Декабрь 2020",
      bullets: [
        "Сформировал рабочую группу (3 человека) по подготовке файлов к загрузке.",
        "Участвовал во внедрении новой системы учета файлов на сервере (1С).",
        "Контроль качества и устранение ошибок загрузок.",
      ],
      achievements: [
        "Сократил цикл подготовки файлов с 2 дней до 6–8 часов.",
      ],
    },
    {
      company: "RNC Pharma",
      location: "Москва",
      role: "Оператор ПК / Оператор базы данных",
      period: "Апрель 2018 — Декабрь 2019",
      bullets: [
        "Подготовка файлов к загрузке, проверка загруженных данных и эталонов после обновлений.",
        "Коммуникации с клиентами; анализ регулярных ошибок, написание ТЗ; обработка справочников.",
      ],
      achievements: [
        "Автоматизировал контроль валидности эталонов (VBA + SQL), снизив ручные проверки на ~50%.",
      ],
    },
  ],
  education: [
    {
      place: "Колледж предпринимательства №11",
      degree: "Среднее специальное образование",
      spec: "Обработка ювелирных камней (технолог на участке огранки)",
      year: "2015",
    },
    // { place: "Онлайн‑курсы / сертификаты", degree: "(добавить, если пройдёшь)", spec: "SQL, Python, Data Engineering, BI", year: "2025" },
  ],
  projects: [
    {
      title: "ETL‑pipeline для унификации клиентских файлов",
      tags: ["Python", "pandas", "PostgreSQL", "Docker"],
      about:
        "Скрипты по стандартизации Excel/CSV (колонки, типы, даты), загрузка в PostgreSQL, экспорт в отчетные форматы. Поддержка маппингов и конфигов через .env.",
      links: {
        code: "https://github.com/yourusername/etl-pipeline", // TODO: replace
        demo: "",
      },
    },
    {
      title: "Airflow DAGs для ежедневной интеграции продаж",
      tags: ["Airflow", "ETL", "SQL Server"],
      about:
        "Оркестрация загрузок ОФД/вторичных продаж, SLA‑мониторинг, алерты; даги для валидации, очистки и агрегаций.",
      links: {
        code: "https://github.com/yourusername/airflow-dags", // TODO: replace
        demo: "",
      },
    },
  ],
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-3 py-1 text-sm text-gray-700 dark:text-gray-200 border-gray-300/60 dark:border-gray-700/60">
      {children}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xl md:text-2xl font-semibold tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      <div>{children}</div>
    </section>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-4 mb-3">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between text-left gap-3"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{children}</div>
      </motion.div>
    </div>
  );
}

export default function ResumeSite() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header / Hero */}
        <header className="print:hidden sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-950/60 border-b border-gray-200/60 dark:border-gray-800/60">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 grid place-items-center font-bold">KK</div>
              <nav className="hidden md:flex items-center gap-5 text-sm text-gray-600 dark:text-gray-300">
                <a href="#about" className="hover:opacity-80">Обо мне</a>
                <a href="#skills" className="hover:opacity-80">Навыки</a>
                <a href="#experience" className="hover:opacity-80">Опыт</a>
                <a href="#projects" className="hover:opacity-80">Проекты</a>
                <a href="#education" className="hover:opacity-80">Образование</a>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="print-hidden rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70 flex items-center gap-2"
                title="Скачать PDF (печать)"
              >
                <Download className="h-4 w-4" /> PDF
              </button>
              <button
                onClick={() => setDark((d) => !d)}
                className="print-hidden rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70"
                title="Переключить тему"
              >
                {dark ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
          {/* Intro card */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 backdrop-blur p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{DATA.name}</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{DATA.title}</p>
                <p className="mt-4 max-w-3xl leading-relaxed">{DATA.summary}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-200">
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {DATA.location}</span>
                  <a href={`tel:${DATA.phone}`} className="inline-flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> {DATA.phone}</a>
                  <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> {DATA.email}</a>
                </div>
              </div>
              <div className="print:hidden flex md:flex-col gap-2 md:min-w-[240px]">
                {DATA.links.github && (
                  <a
                    className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70 inline-flex items-center gap-2"
                    href={DATA.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {DATA.links.linkedin && (
                  <a
                    className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70 inline-flex items-center gap-2"
                    href={DATA.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                )}
                {DATA.links.website && (
                  <a
                    className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70 inline-flex items-center gap-2"
                    href={DATA.links.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe className="h-4 w-4" /> Website
                  </a>
                )}
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <Section id="skills" title="Навыки">
            <div className="grid md:grid-cols-2 gap-4">
              {DATA.skills.map((grp) => (
                <div key={grp.group} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/50 p-4">
                  <div className="font-medium mb-3">{grp.group}</div>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Опыт работы (раскрывающиеся блоки)">
            {DATA.experience.map((job, idx) => (
              <Accordion
                key={idx}
                title={`${job.role} · ${job.company} — ${job.period}`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Обязанности</div>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  {job.achievements?.length ? (
                    <div>
                      <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Достижения</div>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Accordion>
            ))}
          </Section>

          {/* Projects */}
          <Section id="projects" title="Проекты (демо/код)">
            <div className="grid md:grid-cols-2 gap-4">
              {DATA.projects.map((p) => (
                <div key={p.title} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-lg">{p.title}</div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.about}</div>
                    </div>
                    <FileText className="h-5 w-5 opacity-60" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t: string) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3 print:hidden">
                    {p.links.code && (
                      <a
                        className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70"
                        href={p.links.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Код
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70"
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Демо
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section id="education" title="Образование">
            <div className="space-y-3">
              {DATA.education.map((e) => (
                <div key={e.place} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/50 p-4">
                  <div className="font-medium">{e.place}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{e.degree} · {e.spec} · {e.year}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 backdrop-blur p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-lg font-medium">Готов обсудить задачи и показать демо проектов</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Свяжитесь любым удобным способом — отвечаю оперативно.</div>
              </div>
              <div className="flex gap-2">
                <a href={`mailto:${DATA.email}`} className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70 inline-flex items-center gap-2"><Mail className="h-4 w-4"/> Написать</a>
                <a href={`tel:${DATA.phone}`} className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300/70 dark:border-gray-700/70 inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Позвонить</a>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="mt-10 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {DATA.name}. Резюме‑сайт.
        </footer>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .print-hidden { display: none !important; }
          header { display: none !important; }
          a::after { content: " (" attr(href) ")"; font-size: 10px; color: #6b7280; }
          section, .rounded-3xl, .rounded-2xl { break-inside: avoid; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}

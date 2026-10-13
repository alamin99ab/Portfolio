const experience = [
  {
    role: 'Support Engineer (L1)',
    organization: 'Antaranga Dot Com',
    period: 'August 2026 – Present',
    description: [
      'Troubleshoot customer connectivity and internet-related issues, including LAN, WAN, ONU/CPE, and customer-side problems.',
      'Monitor and diagnose service issues, coordinate with NOC and technical teams, and guide customers through troubleshooting.',
    ],
  },
  {
    role: 'Intern · Corporate Support Engineer',
    organization: 'Amber IT',
    period: 'April 2026 – July 2026',
    description: [
      'Assisted with network troubleshooting, issue diagnosis, and client connectivity support.',
      'Configured basic MikroTik settings, including NAT and DHCP, in an ISP operations environment.',
    ],
  },
  {
    role: 'Industrial Attachment',
    organization: 'Creative IT Institute · Dhanmondi, Dhaka',
    period: 'September 2025 – December 2025',
    description: [
      'Completed hands-on training in networking, hardware troubleshooting, CCNA modules, and MikroTik router configuration.',
    ],
  },
];

const education = [
  {
    qualification: 'Diploma in Computer Science & Technology',
    organization: 'City Polytechnic Institute · Khulna',
    period: '2022 – Ongoing',
    detail: 'Result pending',
  },
  {
    qualification: 'Secondary School Certificate',
    organization: 'Deara High School · Deara',
    period: '2013 – 2022',
    detail: 'GPA 3.94',
  },
];

const certifications = [
  'CompTIA A+ · Creative IT Institute',
  'CCNA · Creative IT Institute',
  'MTCNA · Creative IT Institute',
  'MERN Stack Web Design & Development · Ostad',
];

const Qualification = () => (
  <section className="section-shell scroll-mt-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="section-kicker">Professional journey</p>
        <h2 className="section-title">Experience &amp; education</h2>
        <p className="muted-copy mx-auto mt-4 max-w-2xl">
          Practical ISP support experience, network training, and a growing foundation in computer science.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div id="experience" className="scroll-mt-28">
          <h3 className="mb-5 text-xl font-semibold text-white">Experience</h3>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.organization} className="glass-panel rounded-2xl p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                    <p className="mt-1 text-cyan-200">{item.organization}</p>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.description.map((line) => (
                    <li key={line} className="muted-copy flex gap-3 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div id="education" className="scroll-mt-28">
          <h3 className="mb-5 text-xl font-semibold text-white">Education</h3>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.qualification} className="glass-panel rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white">{item.qualification}</h4>
                <p className="mt-1 text-cyan-200">{item.organization}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                  <span>{item.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.detail}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="glass-panel mt-4 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Certifications &amp; training</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((certification) => (
                <li key={certification} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Qualification;

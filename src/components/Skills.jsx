import { FaLaptopCode, FaNetworkWired, FaTools, FaUsers } from 'react-icons/fa';

const categories = [
  {
    title: 'Network Operations',
    icon: <FaNetworkWired />,
    accent: 'text-cyan-200',
    skills: [
      'IP addressing & subnetting',
      'VLAN & inter-VLAN routing',
      'TCP/IP & OSI model',
      'MikroTik basics · NAT & DHCP',
      'Router & switch fundamentals',
      'Connectivity troubleshooting',
    ],
  },
  {
    title: 'Technical Support',
    icon: <FaTools />,
    accent: 'text-violet-200',
    skills: [
      'LAN/WAN diagnosis',
      'ONU/CPE connectivity support',
      'Customer issue diagnosis',
      'Hardware troubleshooting',
      'NOC & technical team coordination',
      'Customer communication',
    ],
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    accent: 'text-emerald-200',
    skills: ['MERN stack', 'Full-stack web applications'],
  },
  {
    title: 'Tools & strengths',
    icon: <FaUsers />,
    accent: 'text-amber-200',
    skills: [
      'Winbox',
      'Cisco Packet Tracer',
      'MS Office',
      'Communication',
      'Teamwork',
      'Problem solving',
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-shell scroll-mt-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="section-kicker">Practical strengths</p>
        <h2 className="section-title">Skills &amp; tools</h2>
        <p className="muted-copy mx-auto mt-4 max-w-2xl">
          Focused on dependable network support, clear communication, and continued learning.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((category) => (
          <article
            key={category.title}
            className="glass-panel glass-interactive rounded-3xl p-6 sm:p-7"
          >
            <div className="flex items-center gap-4">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl ${category.accent}`}>
                {category.icon}
              </span>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-slate-950/25 px-3 py-3 text-sm text-slate-300"
                >
                  <span className={`mt-0.5 ${category.accent}`} aria-hidden="true">✦</span>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-slate-400">
        Currently pursuing CCNA and MTCNA to deepen my networking knowledge.
      </p>
    </div>
  </section>
);

export default Skills;

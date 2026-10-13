import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import cvUrl from '../assets/Alamin_CV.pdf';

const facts = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'mdalaminhossin899@gmail.com',
    href: 'mailto:mdalaminhossin899@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+880 1778-060662',
    href: 'tel:+8801778060662',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Kalaroa, Satkhira, Bangladesh',
  },
];

const About = () => (
  <section id="about" className="section-shell scroll-mt-24">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass-panel rounded-3xl p-7 sm:p-9">
        <p className="section-kicker">A little about me</p>
        <h2 className="section-title">Connecting people and technology.</h2>
        <p className="muted-copy mt-5">
          I’m a Diploma Engineer in Computer Science and Technology focused on
          networking and ISP support. I enjoy tracing connectivity problems
          from the customer side through LAN/WAN, ONU/CPE, and network services,
          then working with technical teams to get people back online.
        </p>
        <p className="muted-copy mt-4">
          My experience includes L1 customer support, an ISP operations
          internship, and practical training in MikroTik configuration and
          hardware troubleshooting. I’m strengthening my network engineering
          foundation through CCNA and MTCNA studies, while continuing to build
          web applications with the MERN stack.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={cvUrl}
            download="Alamin_CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download CV
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            View CV
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {facts.map(({ icon, label, value, href }) => {
          const content = (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-200">
                {icon}
              </span>
              <span className="mt-4 block text-sm text-slate-400">{label}</span>
              <span className="mt-1 block break-words font-medium text-white">{value}</span>
            </>
          );

          return href ? (
            <a
              key={label}
              href={href}
              className="glass-panel glass-interactive rounded-2xl p-5"
            >
              {content}
            </a>
          ) : (
            <div key={label} className="glass-panel rounded-2xl p-5">
              {content}
            </div>
          );
        })}
        <div className="glass-panel rounded-2xl p-5 sm:col-span-2">
          <p className="section-kicker">What I bring</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Customer support', 'Network troubleshooting', 'MikroTik basics', 'MERN stack'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

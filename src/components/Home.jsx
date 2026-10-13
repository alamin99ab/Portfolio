import { ArrowDownIcon, ArrowDownTrayIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cvUrl from '../assets/Alamin_CV.pdf';

const Home = () => (
  <section id="home" className="section-shell flex min-h-screen items-center pt-32">
    <div className="pointer-events-none absolute right-[8%] top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-7">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-cyan-300" />
          <p className="section-kicker">Network operations · Technical support</p>
        </div>
        <div>
          <p className="mb-2 text-lg text-slate-300">Hello, I’m</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Alamin<span className="text-cyan-300">.</span>
          </h1>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-slate-200 sm:text-4xl">
            Junior Network Engineer
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              ISP &amp; NOC Support
            </span>
          </h2>
        </div>
        <p className="muted-copy max-w-2xl text-base sm:text-lg">
          Diploma engineer in Computer Science with hands-on experience supporting
          customer connectivity, diagnosing network issues, and troubleshooting
          LAN, WAN, ONU, and CPE devices. Currently working in an ISP support
          environment and pursuing CCNA and MTCNA.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
            Get in touch
          </a>
          <a
            href={cvUrl}
            download="Alamin_CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download CV
          </a>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 p-3 text-slate-200 transition hover:bg-white/10"
          >
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center gap-4 pt-1">
          <a
            href="https://www.linkedin.com/in/md-alamin-a59840319/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alamin on LinkedIn"
            className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/alamin99ab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alamin on GitHub"
            className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <span className="text-sm text-slate-400">Bangla · English</span>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[34rem] w-full max-w-md items-center justify-center sm:min-h-[38rem]">
        <div className="network-scene" aria-hidden="true">
          <div className="network-orbit">
            <span className="network-orbit__node network-orbit__node--one" />
            <span className="network-orbit__node network-orbit__node--two" />
            <span className="network-orbit__node network-orbit__node--three" />
          </div>
          <div className="network-globe">
            <span className="network-globe__meridian network-globe__meridian--one" />
            <span className="network-globe__meridian network-globe__meridian--two" />
            <span className="network-globe__meridian network-globe__meridian--three" />
            <span className="network-globe__latitude network-globe__latitude--one" />
            <span className="network-globe__latitude network-globe__latitude--two" />
            <span className="network-globe__core" />
          </div>
        </div>

        <div className="network-profile glass-panel relative z-10 w-[min(76%,19rem)] overflow-hidden rounded-[2rem] p-2.5">
          <img
            src="https://i.postimg.cc/mkJFVZfc/Whats-App-Image-2025-08-03-at-14-29-01-522ba05c.jpg"
            alt="Alamin"
            className="h-[27rem] w-full rounded-[1.5rem] object-cover object-center sm:h-[30rem]"
          />
          <div className="absolute inset-x-2.5 bottom-2.5 rounded-b-[1.5rem] bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent px-5 pb-5 pt-16">
            <p className="text-sm font-medium text-cyan-200">Currently</p>
            <p className="mt-1 text-lg font-semibold text-white">Support Engineer (L1)</p>
            <p className="text-sm text-slate-300">Antaranga Dot Com · ISP Support</p>
          </div>
        </div>

        <div className="network-float-card glass-panel absolute left-0 top-[5%] z-20 hidden rounded-2xl px-4 py-3 sm:block">
          <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
            <span className="network-status-dot" />
            Network status
          </span>
          <p className="mt-1 font-semibold text-white">Connected &amp; secure</p>
        </div>
        <div className="network-float-card glass-panel absolute bottom-[4%] right-0 z-20 hidden rounded-2xl px-4 py-3 sm:block">
          <p className="text-xs uppercase tracking-wider text-slate-400">Specialty</p>
          <p className="mt-1 font-semibold text-cyan-100">ISP · NOC · Support</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

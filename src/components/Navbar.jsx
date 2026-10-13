import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Experience', 'experience'],
    ['Education', 'education'],
    ['Projects', 'projects'],
    ['Skills', 'skills'],
    ['Contact', 'contact'],
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-4">
      <div className="glass-panel mx-auto max-w-7xl rounded-2xl">
        <div className="flex min-h-16 items-center justify-between px-4 sm:px-6">
          <a href="#home" onClick={closeMenu} className="text-lg font-bold tracking-wide text-white">
            ALAMIN<span className="text-cyan-300">.</span>
          </a>
          <div className="hidden items-center gap-1 xl:flex">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:bg-white/10 xl:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-menu" className="grid gap-1 border-t border-white/10 p-3 xl:hidden">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

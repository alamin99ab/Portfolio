import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const socials = [
  {
    label: 'GitHub',
    detail: 'View my code and projects',
    href: 'https://github.com/alamin99ab',
    icon: <FaGithub />,
    accent: 'text-white',
  },
  {
    label: 'WhatsApp',
    detail: 'Chat with me',
    href: 'https://wa.me/8801778060662',
    icon: <FaWhatsapp />,
    accent: 'text-emerald-300',
  },
  {
    label: 'Facebook',
    detail: 'Connect on Facebook',
    href: 'https://www.facebook.com/alamin009j',
    icon: <FaFacebook />,
    accent: 'text-blue-300',
  },
  {
    label: 'Instagram',
    detail: 'Find me on Instagram',
    href: 'https://www.instagram.com/al_am.in009/',
    icon: <FaInstagram />,
    accent: 'text-pink-300',
  },
  {
    label: 'Email',
    detail: 'mdalaminhossin899@gmail.com',
    href: 'mailto:mdalaminhossin899@gmail.com',
    icon: <FaEnvelope />,
    accent: 'text-cyan-200',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(false);
    setError(false);

    emailjs
      .send('service_g2kkbv4', 'template_tlbxfgk', formData, 'mJPCU3GIS8ub7eU7k')
      .then(() => {
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="section-kicker">Let’s connect</p>
          <h2 className="section-title">Contact me</h2>
          <p className="muted-copy mx-auto mt-4 max-w-2xl">
            Have an opportunity or a question about network support? Send me a message.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass-input"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input resize-y"
                  placeholder="Write your message..."
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Send message
              </button>
              {sent && <p className="text-sm text-emerald-300" role="status">Message sent successfully!</p>}
              {error && <p className="text-sm text-rose-300" role="alert">Failed to send message. Please try again later.</p>}
            </form>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="glass-panel glass-interactive flex items-center gap-4 rounded-2xl p-4"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-xl ${social.accent}`}>
                  {social.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-white">{social.label}</span>
                  <span className="mt-1 block break-words text-sm text-slate-400">{social.detail}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Alamin. Built with care.
        </footer>
      </div>
    </section>
  );
};

export default Contact;

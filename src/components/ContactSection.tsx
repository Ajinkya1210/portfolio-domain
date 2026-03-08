import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Let's Connect</h2>
          <p className="text-muted-foreground mb-10 text-center leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects,
            or just talking about the latest in DevOps and cloud infrastructure.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 mb-12">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={255}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              maxLength={200}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={1000}
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-y"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity glow-primary flex items-center justify-center gap-2 mx-auto"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

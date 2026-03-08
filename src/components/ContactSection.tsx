import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just talking about the latest in DevOps and cloud infrastructure.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary mb-12"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
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

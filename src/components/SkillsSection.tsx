import { motion } from "framer-motion";
import { Server, GitBranch, Container, Cloud, Shield, Terminal } from "lucide-react";

const skills = [
  { icon: Cloud, name: "Cloud Platforms", items: ["AWS", "Azure", "GCP"] },
  { icon: Container, name: "Containers", items: ["Docker", "Kubernetes", "Helm"] },
  { icon: GitBranch, name: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI"] },
  { icon: Terminal, name: "IaC", items: ["Terraform", "Ansible", "Pulumi"] },
  { icon: Server, name: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack"] },
  
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// skills"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300"
            >
              <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold font-display mb-3">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm font-mono rounded-md bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

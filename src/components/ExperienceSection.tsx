import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior DevOps Engineer",
    company: "Company Name",
    period: "2022 – Present",
    points: [
      "Architected multi-region Kubernetes clusters serving 10M+ requests/day",
      "Reduced deployment time from 45min to 5min with optimized CI/CD pipelines",
      "Implemented GitOps workflows with ArgoCD across 15+ microservices",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Company Name",
    period: "2020 – 2022",
    points: [
      "Migrated legacy infrastructure to AWS using Terraform",
      "Built centralized logging and monitoring with ELK and Prometheus",
      "Automated security compliance checks in CI pipelines",
    ],
  },
  {
    role: "Systems Administrator",
    company: "Company Name",
    period: "2018 – 2020",
    points: [
      "Managed 200+ Linux servers and automated provisioning with Ansible",
      "Implemented containerization strategy reducing resource costs by 40%",
      "Set up disaster recovery and backup automation",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// experience"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Career Path</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-sm text-primary">{exp.period}</span>
                <h3 className="text-xl font-semibold font-display mt-1">{exp.role}</h3>
                <p className="text-muted-foreground mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <span className="text-primary mt-1.5 text-xs">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

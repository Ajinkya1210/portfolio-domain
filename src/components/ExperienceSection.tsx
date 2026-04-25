import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "DevOps Intern",
    company: "Cravita Technologies",
    period: "July 2025 – March 2026",
    points: [
      "Worked on setting up CI/CD pipelines using GitHuband Jenkins for automated build and deployment.",
      "Containerized applications using Docker and managed multi-container setups.",
      "Deployed applications on AWS EC2 and configured services like S3, IAM, and VPC.",
      "Implemented Infrastructure as Code (IaC) using Terraform for provisioning cloud resources.",
      "Managed container orchestration using Kubernetes (basic deployments, pods, services).",
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
          {/* <p className="font-mono text-primary text-sm mb-2">{"// experience"}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold font-display">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-6 bottom-8 w-px bg-border" />

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

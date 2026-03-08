import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

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
          <p className="font-mono text-primary text-sm mb-2">{"// training"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Currently Training</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-12"
        >
          <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-sm text-primary">2024 – Present</span>
          <h3 className="text-xl font-semibold font-display mt-1">DevOps Engineering Training</h3>
          <p className="text-muted-foreground mb-3">Training Institute Name</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-secondary-foreground">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              Learning CI/CD pipelines, Docker, Kubernetes, and cloud platforms (AWS/Azure)
            </li>
            <li className="flex items-start gap-2 text-sm text-secondary-foreground">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              Hands-on experience with Terraform, Ansible, and infrastructure automation
            </li>
            <li className="flex items-start gap-2 text-sm text-secondary-foreground">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              Building real-world projects with monitoring, logging, and GitOps workflows
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative pl-12 mt-12"
        >
          <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-sm text-highlight">Fresher</span>
          <h3 className="text-xl font-semibold font-display mt-1">Eager to Learn & Contribute</h3>
          <p className="text-muted-foreground leading-relaxed mt-2">
            As a fresher in the DevOps space, I'm actively building my skills through hands-on training 
            and personal projects. I'm passionate about automation, cloud infrastructure, and making 
            deployments seamless.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

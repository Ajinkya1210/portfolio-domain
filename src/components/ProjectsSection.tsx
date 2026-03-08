import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes autoscaler with predictive scaling based on historical metrics, reducing cloud costs by 35%.",
    tags: ["Kubernetes", "Go", "Prometheus"],
    github: "#",
    live: "#",
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Reusable, modular CI/CD pipeline templates for multi-language monorepos with automated security scanning.",
    tags: ["GitHub Actions", "Docker", "Trivy"],
    github: "#",
    live: "#",
  },
  {
    title: "Infrastructure as Code Suite",
    description: "Complete AWS infrastructure provisioning with Terraform modules, including VPC, EKS, RDS, and monitoring stack.",
    tags: ["Terraform", "AWS", "Ansible"],
    github: "#",
    live: "#",
  },
  {
    title: "GitOps Dashboard",
    description: "Real-time dashboard for monitoring ArgoCD deployments, Flux reconciliations, and cluster health across environments.",
    tags: ["React", "ArgoCD", "Grafana"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// projects"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a href={project.github} className="hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="hover:text-foreground transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-code-bg text-primary border border-border"
                  >
                    {tag}
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

export default ProjectsSection;

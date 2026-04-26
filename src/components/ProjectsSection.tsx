import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "End-to-End Automated Cloud Voting System: Jenkins CI/CD on AWS EKS & RDS",
    description: "A fully automated CI/CD pipeline that builds and deploys a Node.js microservice into an Amazon EKS cluster with a load-balanced frontend. The system ensures high availability and data persistence by integrating stateless Kubernetes pods with a private Amazon RDS (MySQL) instance, secured via custom VPC Security Groups and IAM Access Entries.",
    tags: ["Kubernetes", "Docker", "CI/CD", "AWS","RDS","GitHub","VPC"],
    github: "https://github.com/Ajinkya1210/voting-machine-CICD.git",
    live: "#",
  },
  {
    title: "End-to-End Automated Cloud Registration System: A Jenkins-Docker-AWS Pipeline",
    description: "Automated CI/CD pipeline using Jenkins and Docker to deploy a containerized Node.js application. Provisions secure AWS RDS infrastructure via Terraform with encrypted database connectivity.",
    tags: ["CI/CD", "Docker", "Terraform", "AWS", "RDS","GitHub","VPC"],
    github: "https://github.com/Ajinkya1210/Cloud-registrations-CICD.git",
    live: "#",
  },
  {
    title: "Cloud Cart CI/CD Deployment using Jenkins & Docker on AWS",
    description: "Developed and deployed a containerized full-stack web application on AWS EC2 using Docker. Implemented a CI/CD pipeline with Jenkins integrated with GitHub to automate build and deployment processes. The application uses a Node.js backend with REST APIs and a responsive frontend, demonstrating end-to-end DevOps practices including automation, containerization, and cloud deployment.",
    tags: ["CI/CD", "AWS", "EC2", "Docker", "Jenkins","GitHub","linux"],
    github: "https://github.com/Ajinkya1210/App-CICD.git",
    live: "#",
  },
  {
    title: "Book-App-CI/CD",
    description: "This document outlines the complete setup and deployment process for a Book App Node.js application using AWS EC2, Jenkins, and GitHub.",
    tags: ["Jenkins", "AWS", "EC2", "Node.js", "GitHub","linux"],
    github: "https://github.com/Ajinkya1210/book-app-CICD.git",
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
          {/* <p className="font-mono text-primary text-sm mb-2">{"// projects"}</p> */}
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

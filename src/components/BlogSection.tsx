import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with Docker for Beginners",
    description: "A comprehensive guide to understanding containers, images, and Docker fundamentals for newcomers to DevOps.",
    tags: ["Docker", "Containers", "Beginner"],
    url: "https://medium.com/@ajinkyavdesai007",
    date: "2024",
  },
  {
    title: "CI/CD Pipeline with GitHub Actions",
    description: "Step-by-step tutorial on building your first CI/CD pipeline using GitHub Actions for automated testing and deployment.",
    tags: ["CI/CD", "GitHub Actions", "Automation"],
    url: "https://medium.com/@ajinkyavdesai007",
    date: "2024",
  },
  {
    title: "Kubernetes 101: Pods, Services & Deployments",
    description: "Breaking down core Kubernetes concepts with practical examples to help you start your container orchestration journey.",
    tags: ["Kubernetes", "K8s", "Orchestration"],
    url: "https://medium.com/@ajinkyavdesai007",
    date: "2024",
  },
  {
    title: "Terraform: Infrastructure as Code Made Simple",
    description: "How to provision and manage cloud resources using Terraform with real-world AWS examples.",
    tags: ["Terraform", "IaC", "AWS"],
    url: "https://medium.com/@ajinkyavdesai007",
    date: "2024",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="font-mono text-primary text-sm mb-2">{"// blog"}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display">Latest Articles</h2>
          </div>
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
          >
            View all on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300 block"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-code-bg text-primary border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

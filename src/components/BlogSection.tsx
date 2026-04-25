import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding AWS Lambda",
    description: "AWS Lambda is a service that lets you run your code without managing any servers. You don’t have to worry about creating or maintaining a machine.",
    tags: ["AWS", "Lambda", "Beginner"],
    url: "https://medium.com/@ajinkyavdesai007/day-51-understanding-aws-lambda-3ce9c74216cf",
    date: "2025",
  },
  {
    title: "AWS RDS (Relational Database Service)",
    description: "AWS RDS (Amazon Relational Database Service) is a cloud service that helps you create and manage databases easily. You don’t need to install software, manage servers, or worry about backups.",
    tags: ["AWS", "RDS", "Database"],
    url: "https://medium.com/@ajinkyavdesai007/day-36-aws-rds-relational-database-service-73d4710d19a9",
    date: "2025",
  },
  {
    title: "AWS VPC (Virtual Private Cloud)",
    description: "AWS Virtual Private Cloud (VPC) is a service that lets you create a private and secure network in the AWS cloud. It allows you to control how your resources connect to each other and to the internet.",
    tags: ["AWS", "VPC", "NACl"],
    url: "https://medium.com/@ajinkyavdesai007/day-28-aws-vpc-virtual-private-cloud-d0ed92af99f8",
    date: "2025",
  },
  {
    title: "AWS IAM → Roles & Policies",
    description: "In the last blog, we learned about IAM Users and Groups. Now we will move to the next two parts of IAM: Roles and Policies. These two things help you control access in an easy and safe way.",
    tags: ["AWS", "IAM", "Roles" ,"Policies"],
    url: "https://medium.com/@ajinkyavdesai007/day-42-aws-iam-roles-policies-affcdbdbd5e4",
    date: "2025",
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
            {/* <p className="font-mono text-primary text-sm mb-2">{"// blog"}</p> */}
            <h2 className="text-3xl md:text-4xl font-bold font-display">Latest Articles</h2>
          </div>
          <a
            href="https://medium.com/@ajinkyavdesai007"
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

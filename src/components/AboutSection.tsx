import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* //<p className="font-mono text-primary text-sm mb-2">{"// about"}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold font-display">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[auto_1fr] gap-8 items-start"
        >
          <div className="hidden md:flex w-12 h-12 rounded-xl bg-secondary border border-border items-center justify-center shrink-0">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-4 text-secondary-foreground leading-relaxed">
            <p>
              I'm an aspiring DevOps Engineer with a strong passion for cloud computing, automation, 
              and building reliable infrastructure. Currently undergoing professional training to sharpen 
              my skills in modern DevOps tools and practices.
            </p>
            <p>
              I love exploring how technologies like Docker, Kubernetes, Terraform, and CI/CD pipelines 
              come together to create seamless software delivery workflows. When I'm not learning, 
              I share my journey and technical insights on my Medium blog.
            </p>
            <p>
              My goal is to become a well-rounded DevOps professional who can bridge the gap between 
              development and operations, making deployments faster, safer, and more automated.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

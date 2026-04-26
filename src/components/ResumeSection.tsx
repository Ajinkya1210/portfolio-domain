import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <p className="font-mono text-primary text-sm mb-2">{"// resume"}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Download Resume</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Get a copy of my latest resume to learn more about my skills, experience, and qualifications.
          </p>

          <motion.a
            href="Ajinkya_Desai_9421214150.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity glow-primary"
          >
            <FileText className="w-5 h-5" />
            Download Resume
            <Download className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;

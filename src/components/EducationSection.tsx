import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    degree: "Your Degree (e.g., B.Tech in Computer Science)",
    institution: "Your College / University Name",
    period: "2020 – 2024",
    description: "Relevant coursework: Operating Systems, Computer Networks, Cloud Computing, Linux Administration.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Your School Name",
    period: "2018 – 2020",
    description: "Science stream with focus on Mathematics and Computer Science.",
  },
  {
    degree: "Secondary School (10th)",
    institution: "Your School Name",
    period: "2017 – 2018",
    description: "Completed secondary education with strong foundation in Science and Mathematics.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// education"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-6 bottom-8 w-px bg-border" />

          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  {i === 0 ? (
                    <GraduationCap className="w-4 h-4 text-primary" />
                  ) : (
                    <School className="w-4 h-4 text-primary" />
                  )}
                </div>
                <span className="font-mono text-sm text-primary">{edu.period}</span>
                <h3 className="text-xl font-semibold font-display mt-1">{edu.degree}</h3>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm text-secondary-foreground leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

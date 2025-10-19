import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Database, Layout, Globe } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Layout, level: 95 },
  { name: "Backend Development", icon: Database, level: 90 },
  { name: "UI/UX Design", icon: Palette, level: 85 },
  { name: "Performance Optimization", icon: Zap, level: 92 },
  { name: "API Development", icon: Code2, level: 88 },
  { name: "Web Technologies", icon: Globe, level: 93 },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer with a keen eye for design and a love for creating
            seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 5 years of experience in web development, I've worked with
                startups and established companies to bring their digital visions to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building scalable, maintainable applications using modern
                frameworks and best practices. My approach combines technical expertise
                with a deep understanding of user needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I transform ideas into reality through code, creating responsive and
                intuitive interfaces that users love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From concept to deployment, I handle every aspect of web development,
                ensuring high-quality results that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">My Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-right">
                    {skill.level}%
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

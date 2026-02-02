import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Zap, Shield } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver nothing but the best in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as true partners in their success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead with cutting-edge technologies and modern solutions.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We build lasting relationships through transparency and reliability.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              About Royal Byte
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building Digital <span className="text-gradient-gold">Legacies</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Royal Byte is a premium IT services company dedicated to transforming businesses through exceptional digital solutions. We combine technical expertise with creative excellence to deliver products that drive real results.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of passionate developers, designers, and strategists work together to create seamless digital experiences that help our clients stand out in a crowded marketplace.
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {[
                "End-to-end project management",
                "Agile development methodology",
                "Dedicated support team",
                "Scalable & secure solutions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-gradient-card border border-border text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-royal mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Our Core <span className="text-secondary">Values</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-secondary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <value.icon className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-display text-lg font-semibold mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

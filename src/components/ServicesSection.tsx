import { motion } from "framer-motion";
import { Globe, Code2, Smartphone, Palette, Cloud, Wrench, Share2, Camera, Video, Image, Shield, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, responsive websites that captivate your audience and drive conversions.",
    features: ["Custom Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Code2,
    title: "Web Application",
    description: "Powerful web apps with intuitive interfaces and robust backend systems.",
    features: ["React/Next.js", "Scalable APIs", "Real-time Features"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    features: ["Flutter/React Native", "Native Performance", "Offline Support"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates memorable digital experiences.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable infrastructure and automated deployment pipelines.",
    features: ["AWS/Azure/GCP", "CI/CD", "Monitoring"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your applications running smoothly.",
    features: ["24/7 Monitoring", "Updates", "Security Patches"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media campaigns that grow your brand and engage your audience.",
    features: ["Content Strategy", "Community Management", "Analytics & Reporting"],
  },
  {
    icon: Camera,
    title: "Event Photoshoots",
    description: "Professional photography services for corporate events, product launches, and special occasions.",
    features: ["Event Coverage", "Portrait Sessions", "Post-Production"],
  },
  {
    icon: Video,
    title: "Videography",
    description: "High-quality video production from concept to final edit for commercials and events.",
    features: ["4K Production", "Video Editing", "Motion Graphics"],
  },
  {
    icon: Image,
    title: "Graphic Design",
    description: "Creative visual solutions including branding, marketing materials, and digital graphics.",
    features: ["Brand Identity", "Print Design", "Digital Graphics"],
  },
  {
    icon: Shield,
    title: "CCTV Installation",
    description: "Professional security camera installation and surveillance system setup for your premises.",
    features: ["Site Assessment", "Installation", "Remote Monitoring"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Solutions That <span className="text-gradient-royal">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to deployment, we deliver end-to-end digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

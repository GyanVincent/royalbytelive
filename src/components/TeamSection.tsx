import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const leadership = [
  {
    name: "Aboagye Prince Kwame",
    title: "Chief Executive Officer",
    bio: "Visionary leader with 12+ years in software innovation and digital transformation.",
    image: "/prince.JPG",
  },
  {
    name: "Amoah Michhel Opoku",
    title: "Project Manager",
    bio: "Expert in agile methodologies with a track record of delivering 100+ successful projects.",
    image: "/mic.jpeg",
  },
  /*
  {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    bio: "Full-stack architect passionate about scalable systems and emerging technologies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  */
  {
    name: "Gyan Vincent Ampaabeng Kyere",
    title: "Chief Editor",
    bio: "Content strategist ensuring clear communication and brand consistency across all platforms.",
    image: "/1000008117[1].jpg",
  },
  {
    name: "Bright",
    title: "Lead Developer",
    bio: "Senior software engineer specializing in React, Node.js, and cloud architecture.",
    image: "/bright.jpg",
  },
  {
    name: "Punobin Raphael",
    title: "UI/UX Designer",
    bio: "Creative designer crafting intuitive interfaces and delightful user experiences.",
    image: "/raphael.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Our Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet the <span className="text-gradient-royal">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A dedicated team of experts committed to delivering excellence and driving your digital success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leadership.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Social Links */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>

                {/* Decorative Border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 -z-10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-secondary font-medium text-sm mb-3">{member.title}</p>
              <p className="text-muted-foreground text-sm px-4">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Team Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Backed by a talented team of 20+ developers, designers, and engineers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

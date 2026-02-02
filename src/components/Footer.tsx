import { Crown, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Website Development", href: "#services" },
    { name: "Web Applications", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Social Media Management", href: "#services" },
    { name: "Event Photoshoots", href: "#services" },
    { name: "Videography", href: "#services" },
    { name: "Graphic Design", href: "#services" },
    { name: "CCTV Installation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#", isNotAvailable: true },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/royal-byte-4020283aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
 // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "https://github.com/GyanVincent", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/royal_byte_111", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleResourceClick = (resourceName: string) => {
    alert(`${resourceName} is not available right now. Please check back later!`);
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Crown className="w-7 h-7 text-secondary" />
              <span className="font-display text-xl font-bold">
                Royal<span className="text-secondary">Byte</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Premium IT solutions for businesses that demand excellence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.isNotAvailable ? (
                    <button
                      onClick={() => handleResourceClick(link.name)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleResourceClick(link.name)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Royal Byte. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleResourceClick("Privacy Policy")}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleResourceClick("Terms of Service")}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import {
  Menu,
  X,
  Shield,
  Code2,
  Lock,
  Zap,
  Cloud,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    const { fullName, email, company, message } = formData;

    if (!fullName || !email || !message) {
      alert("Please fill in all required fields");
      return;
    }

    const whatsappNumber = "918921731931";
    const text = `Hello, I'm ${fullName} from ${company || "a company"}. Email: ${email}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Training & Cert",
      description: "Industry-leading security training and certification programs",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "VAPT",
      description: "Comprehensive vulnerability assessment and penetration testing",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "SOC & Auditing",
      description: "Security Operations Center management and compliance auditing",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cyber Forensics",
      description: "Digital forensics investigation and incident response",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive cloud infrastructure security solutions",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cyber Security Consulting",
      description: "Expert consulting for evolving security threats",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Cybersecurity expert with 15+ years in enterprise security",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Leading cybersecurity architect and infrastructure expert",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Compliance",
      bio: "Expert in regulatory compliance and security auditing",
    },
    {
      name: "David Kumar",
      role: "Lead Penetration Tester",
      bio: "Expert in vulnerability assessment and ethical hacking",
    },
    {
      name: "Jessica White",
      role: "Cloud Security Lead",
      bio: "Specializes in cloud infrastructure and data protection",
    },
    {
      name: "Alexander Petrov",
      role: "Incident Response Lead",
      bio: "Expert in digital forensics and incident investigation",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">
                CyberX Services
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-primary transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-primary transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm hover:text-primary transition"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-primary transition"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block bg-secondary hover:bg-secondary/90"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-card rounded-lg"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-sm hover:text-primary transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-sm hover:text-primary transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block w-full text-left py-2 text-sm hover:text-primary transition"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-sm hover:text-primary transition"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-secondary hover:bg-secondary/90"
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Protect Your Business from Cyber Threats
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert cybersecurity consulting to safeguard your digital assets,
              ensure compliance, and build resilient security posture. Stay ahead
              of evolving threats with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Schedule Consultation
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive cybersecurity solutions designed to protect
              organizations from evolving digital threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose CyberX Services
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Industry-leading cybersecurity professionals with decades
                      of combined experience
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Lock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Proven Solutions</h3>
                    <p className="text-muted-foreground">
                      Trusted by Fortune 500 companies to strengthen security
                      posture and ensure compliance
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock monitoring and incident response to keep
                      your systems secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-12 border border-border">
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-4xl font-bold text-primary">500+</p>
                    <p className="text-muted-foreground">Clients Protected</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-3xl font-bold text-secondary">15+</p>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-muted-foreground">Security Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading cybersecurity professionals dedicated to protecting
              your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to strengthen your security posture? Contact us for a free
                consultation.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@cyberxservices.com"
                      className="text-primary hover:underline"
                    >
                      contact@cyberxservices.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+918921731931"
                      className="text-primary hover:underline"
                    >
                      +91 (892) 173-1931
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Multiple Global Locations
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleWhatsAppSubmit();
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary h-32 resize-none"
                    placeholder="Tell us about your security needs..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">CyberX Services</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Protecting businesses from cyber threats with expert solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Security Training
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    VAPT
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    SOC & Auditing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Cloud Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#about" className="hover:text-primary transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-primary transition">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground text-sm">
              Copyright © 2026 CyberX Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

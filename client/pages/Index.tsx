import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  TrendingUp,
  Activity,
  AlertTriangle,
  CheckCircle,
  Database,
  Settings,
  Key,
  Server,
  Wifi,
  Eye,
  Terminal,
  GitBranch,
  HardDrive,
  Network,
  Cpu,
  Cable,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

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
    setFormData({ fullName: "", email: "", company: "", message: "" });
  };

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Training & Cert",
      description: "Industry-leading security training and certification programs",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "VAPT",
      description: "Comprehensive vulnerability assessment and penetration testing",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "SOC & Auditing",
      description: "Security Operations Center management and compliance auditing",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cyber Forensics",
      description: "Digital forensics investigation and incident response",
      color: "from-yellow-500 to-orange-400",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive cloud infrastructure security solutions",
      color: "from-blue-500 to-indigo-400",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cyber Security Consulting",
      description: "Expert consulting for evolving security threats",
      color: "from-green-500 to-emerald-400",
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

  // Chart data
  const threatData = [
    { month: "Jan", threats: 240, resolved: 190 },
    { month: "Feb", threats: 380, resolved: 310 },
    { month: "Mar", threats: 200, resolved: 150 },
    { month: "Apr", threats: 420, resolved: 380 },
    { month: "May", threats: 350, resolved: 290 },
    { month: "Jun", threats: 290, resolved: 240 },
  ];

  const vulnerabilityData = [
    { name: "Critical", value: 5 },
    { name: "High", value: 12 },
    { name: "Medium", value: 28 },
    { name: "Low", value: 55 },
  ];

  const incidentData = [
    { month: "Jan", incidents: 12 },
    { month: "Feb", incidents: 8 },
    { month: "Mar", incidents: 15 },
    { month: "Apr", incidents: 6 },
    { month: "May", incidents: 9 },
    { month: "Jun", incidents: 4 },
  ];

  const COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">
                CyberX Services
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["Services", "About", "Team", "Contact"].map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() =>
                    scrollToSection(item.toLowerCase())
                  }
                  className="text-sm hover:text-primary transition relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90"
              >
                Get Started
              </Button>
            </motion.div>

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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 border-t border-border mt-4 pt-4"
            >
              {["Services", "About", "Team", "Contact"].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-sm hover:text-primary transition"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-secondary hover:bg-secondary/90"
              >
                Get Started
              </Button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/60" />
        </div>

        {/* Floating Cybersecurity Icons */}
        <motion.div
          className="absolute top-20 left-12 text-primary/40 opacity-60"
          animate={{ y: [0, -30, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Shield className="w-20 h-20" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-16 text-secondary/40 opacity-60"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Lock className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-primary/40 opacity-60"
          animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          <Code2 className="w-14 h-14" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-secondary/40 opacity-60"
          animate={{ y: [0, -25, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
        >
          <AlertTriangle className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 text-primary/40 opacity-60"
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 4.2, repeat: Infinity }}
        >
          <Zap className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute top-2/3 left-1/3 text-secondary/40 opacity-60"
          animate={{ y: [0, -20, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity }}
        >
          <Cloud className="w-14 h-14" />
        </motion.div>
        <motion.div
          className="absolute top-1/4 left-1/3 text-primary/40 opacity-60"
          animate={{ y: [0, 20, 0], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity }}
        >
          <Database className="w-14 h-14" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-secondary/40 opacity-60"
          animate={{ y: [0, -15, 0], x: [0, 12, 0] }}
          transition={{ duration: 5.3, repeat: Infinity }}
        >
          <Key className="w-14 h-14" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-primary/40 opacity-60"
          animate={{ y: [0, 22, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4.6, repeat: Infinity }}
        >
          <Server className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/2 text-secondary/40 opacity-60"
          animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
          transition={{ duration: 5.1, repeat: Infinity }}
        >
          <Network className="w-14 h-14" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-primary/40 opacity-60"
          animate={{ y: [0, 18, 0], rotate: [0, -7, 7, 0] }}
          transition={{ duration: 4.7, repeat: Infinity }}
        >
          <Eye className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-2/3 right-1/6 text-secondary/40 opacity-60"
          animate={{ y: [0, -22, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 5.4, repeat: Infinity }}
        >
          <Terminal className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute top-2/3 right-1/3 text-primary/40 opacity-60"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 4.9, repeat: Infinity }}
        >
          <Cpu className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-secondary/40 opacity-60"
          animate={{ y: [0, -20, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 5.2, repeat: Infinity }}
        >
          <HardDrive className="w-14 h-14" />
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight"
            >
              Protect Your Business from Cyber Threats
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Expert cybersecurity consulting to safeguard your digital assets,
              ensure compliance, and build resilient security posture. Stay ahead
              of evolving threats with our comprehensive solutions.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("services")}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                >
                  Explore Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-secondary"
                >
                  <AnimatedCounter end={500} />
                  +
                </motion.div>
                <p className="text-sm text-muted-foreground mt-2">Clients Protected</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-primary"
                >
                  <AnimatedCounter end={15} />
                  +
                </motion.div>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl md:text-4xl font-bold text-secondary"
                >
                  <AnimatedCounter end={99} />
                  %
                </motion.div>
                <p className="text-sm text-muted-foreground mt-2">Threat Prevention</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We provide comprehensive cybersecurity solutions designed to protect
              organizations from evolving digital threats.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${service.color} p-0.5 rounded-lg cursor-pointer group overflow-hidden`}
              >
                <div className="bg-card backdrop-blur-md p-8 rounded-lg h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    className="text-white mb-4 relative z-10"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground relative z-10">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-Time Security Analytics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Monitor threats and vulnerabilities across your infrastructure
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Threats Over Time */}
            <motion.div
              className="bg-background border border-border rounded-lg p-8 lg:col-span-2"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                Threat Detection Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={threatData}>
                  <defs>
                    <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="threats"
                    stroke="#EF4444"
                    fillOpacity={1}
                    fill="url(#colorThreats)"
                  />
                  <Area
                    type="monotone"
                    dataKey="resolved"
                    stroke="#22C55E"
                    fillOpacity={1}
                    fill="url(#colorResolved)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Vulnerability Breakdown */}
            <motion.div
              className="bg-background border border-border rounded-lg p-8"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-secondary" />
                Vulnerabilities
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={vulnerabilityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                  >
                    {vulnerabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>

          {/* Incident Response */}
          <motion.div
            className="bg-background border border-border rounded-lg p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "hsl(var(--primary))" }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-secondary" />
              Incident Response Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incidentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="incidents"
                  fill="#EF4444"
                  radius={[8, 8, 0, 0]}
                  animationDuration={800}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose CyberX Services
              </h2>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Shield,
                    title: "Expert Team",
                    desc: "Industry-leading cybersecurity professionals with decades of combined experience",
                  },
                  {
                    icon: CheckCircle,
                    title: "Proven Solutions",
                    desc: "Trusted by Fortune 500 companies to strengthen security posture and ensure compliance",
                  },
                  {
                    icon: Zap,
                    title: "24/7 Support",
                    desc: "Round-the-clock monitoring and incident response to keep your systems secure",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-12 border border-primary/20">
                <motion.div
                  className="space-y-6"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="bg-background/50 backdrop-blur rounded-lg p-6 border border-border">
                    <p className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter end={500} />+
                    </p>
                    <p className="text-muted-foreground">Clients Protected</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur rounded-lg p-6 border border-border">
                    <p className="text-4xl font-bold text-secondary mb-2">
                      <AnimatedCounter end={15} />+
                    </p>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur rounded-lg p-6 border border-border">
                    <p className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter end={99} />%
                    </p>
                    <p className="text-muted-foreground">Threat Prevention</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Industry-leading cybersecurity professionals dedicated to protecting
              your organization
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-background border border-border rounded-lg p-8 hover:border-primary transition text-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                />
                <h3 className="text-lg font-semibold mb-1 relative z-10">
                  {member.name}
                </h3>
                <p className="text-secondary mb-4 relative z-10">{member.role}</p>
                <p className="text-muted-foreground text-sm relative z-10">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Ready to strengthen your security posture? Contact us for a free
                consultation.
              </p>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@cyberxservices.com",
                    href: "mailto:contact@cyberxservices.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 (892) 173-1931",
                    href: "tel:+918921731931",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "Multiple Global Locations",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-primary hover:underline"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="pt-8 border-t border-border mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                handleWhatsAppSubmit();
              }}
              className="bg-card border border-border rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  { label: "Full Name", name: "fullName", required: true },
                  { label: "Email", name: "email", type: "email", required: true },
                  { label: "Company", name: "company" },
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                      {field.required && " *"}
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleFormChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition"
                      placeholder={`Your ${field.label.toLowerCase()}`}
                      required={field.required}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition h-32 resize-none"
                    placeholder="Tell us about your security needs..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">CyberX Services</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Protecting businesses from cyber threats with expert solutions.
              </p>
            </div>

            {[
              {
                title: "Services",
                links: [
                  "Security Training",
                  "VAPT",
                  "SOC & Auditing",
                  "Cloud Security",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Team", "Blog", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
              },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <motion.a
                        href="#"
                        className="hover:text-primary transition"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-border pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-muted-foreground text-sm">
              Copyright © 2026 CyberX Services. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

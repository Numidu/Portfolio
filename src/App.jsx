import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Award,
  Briefcase,
  GraduationCap,
  Send,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import * as THREE from "three";

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const meshRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      emissive: 0x0a4a5a,
      shininess: 100,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    const wireframeGeometry = new THREE.TorusKnotGeometry(1.02, 0.32, 100, 16);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    mesh.add(wireframeMesh);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);

      if (meshRef.current) {
        const scrollFactor = scroll * 0.001;
        meshRef.current.rotation.y = scrollFactor * 2;
        meshRef.current.rotation.x = scrollFactor;

        const scale = 1 + Math.sin(scrollFactor) * 0.3;
        meshRef.current.scale.set(scale, scale, scale);

        meshRef.current.position.y = -scrollFactor * 2;
        meshRef.current.position.x = Math.sin(scrollFactor) * 2;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.x = scroll * 0.0005;
      }

      const sections = [
        "home",
        "about",
        "projects",
        "services",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = () => {
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack marketplace with real-time inventory and AI recommendations",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with NLP capabilities and multi-language support",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracker with social features and AR workouts",
      tech: ["Flutter", "Firebase", "ARCore", "GraphQL"],
      image:
        "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization platform for business intelligence",
      tech: ["Vue.js", "D3.js", "PostgreSQL", "Redis"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#",
    },
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Building responsive, performant web applications with modern frameworks and best practices",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description:
        "Creating native and cross-platform mobile apps for iOS and Android",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Crafting beautiful, intuitive user interfaces with attention to detail",
    },
  ];

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description:
        "Leading development of cloud-based SaaS products, mentoring junior developers",
    },
    {
      role: "Software Engineer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Developed microservices architecture, improved system performance by 40%",
    },
    {
      role: "Junior Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      description:
        "Built responsive web applications, collaborated with design team",
    },
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 85 },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden">
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "projects",
              "services",
              "experience",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === item
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
            {[
              "home",
              "about",
              "projects",
              "services",
              "experience",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 capitalize hover:bg-slate-800 transition-colors border-l-2 border-transparent hover:border-cyan-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 p-1 shadow-lg shadow-cyan-500/50">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold">
                <img
                  src="src/assets/myphoto.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent p-5"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite",
            }}
          >
            Numidu Dulanga
          </h1>

          <p
            className="text-xl md:text-3xl text-cyan-400 mb-6 font-light"
            style={{ filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))" }}
          >
            Full Stack Developer & Designer
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions to complex problems. Passionate about
            building scalable applications with beautiful user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-cyan-400"
            style={{ filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))" }}
          />
        </div>
      </section>

      <section
        id="about"
        className="py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-slate-950/50"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
              <GraduationCap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white font-semibold">
                  Bachelor of Computer Science
                </span>
                <br />
                University Of Ruhuna - 2023 to 2026
                <br />
                Focus: Devops , Mobile App Development and full stack
                development.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-2">
              <Award className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Career Goals</h3>
              <p className="text-gray-400 leading-relaxed">
                Building innovative products that make a difference. Passionate
                about leading engineering teams and mentoring the next
                generation of developers.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 shadow-lg shadow-cyan-500/50"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-32 px-6 relative z-10"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:gap-3 gap-2"
                  >
                    View Project{" "}
                    <ExternalLink className="w-4 h-4 transition-all" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-slate-950/50"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="text-cyan-400 mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-32 px-6 relative z-10"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-cyan-400 mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl p-8 border border-cyan-500/30 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors">
                <Award className="w-6 h-6 text-cyan-400" />
                <span>AWS Certified Solutions Architect</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-500/10 transition-colors">
                <Award className="w-6 h-6 text-emerald-400" />
                <span>Google Cloud Professional Developer</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors">
                <Award className="w-6 h-6 text-cyan-400" />
                <span>Meta React Native Specialist</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-500/10 transition-colors">
                <Award className="w-6 h-6 text-emerald-400" />
                <span>MongoDB Certified Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-40  mb-40  px-6 relative z-10 bg-gradient-to-b from-transparent to-slate-950"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-cyan-400">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-cyan-400">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-cyan-400">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                  <span>john@email.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 py-12 px-6 border-t border-slate-800 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-4">© 2026 John Doe. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;

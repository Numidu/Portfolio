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
  Cpu,
  Box,
  Cloud,
  Layers,
  Server,
  GitBranch,
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
  const hologramRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000510, 0.02);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create multiple holographic shapes
    const shapes = [];

    // Main central hologram - larger abstract shape
    const mainGeometry = new THREE.IcosahedronGeometry(2, 1);
    const mainMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.6,
      wireframe: false,
    });
    const mainMesh = new THREE.Mesh(mainGeometry, mainMaterial);
    mainMesh.position.set(0, 0, 0);
    meshRef.current = mainMesh;
    scene.add(mainMesh);
    shapes.push(mainMesh);

    // Wireframe overlay
    const wireGeometry = new THREE.IcosahedronGeometry(2.05, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    mainMesh.add(wireMesh);

    // Orbiting holograms
    for (let i = 0; i < 3; i++) {
      const geom = new THREE.TorusGeometry(0.5, 0.15, 16, 32);
      const mat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0xff00ff : 0x00ffff,
        emissive: i % 2 === 0 ? 0xff00ff : 0x00ffff,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.4,
        metalness: 1,
        roughness: 0,
      });
      const mesh = new THREE.Mesh(geom, mat);
      const angle = (i / 3) * Math.PI * 2;
      mesh.position.set(
        Math.cos(angle) * 4,
        Math.sin(angle * 2) * 2,
        Math.sin(angle) * 4
      );
      mesh.rotation.x = angle;
      scene.add(mesh);
      shapes.push(mesh);
    }
    hologramRef.current = shapes;

    // Enhanced particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.2, 1, 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // Globe for contact section
    const globeGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const globeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x001530,
      emissive: 0x00ffff,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.position.set(0, -100, 0);
    globeRef.current = globe;
    scene.add(globe);

    // Dramatic lighting
    const ambientLight = new THREE.AmbientLight(0x0066ff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 3, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 3, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x00ff88, 2, 30);
    pointLight3.position.set(0, 15, -10);
    scene.add(pointLight3);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.z += 0.002;
      }

      if (hologramRef.current) {
        hologramRef.current.forEach((shape, i) => {
          if (i > 0) {
            const time = Date.now() * 0.001;
            shape.rotation.x += 0.01;
            shape.rotation.y += 0.015;
            const angle = time + (i / 3) * Math.PI * 2;
            shape.position.x = Math.cos(angle) * 4;
            shape.position.z = Math.sin(angle) * 4;
            shape.position.y = Math.sin(time * 0.5 + i) * 2;
          }
        });
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
        particlesRef.current.rotation.x += 0.0003;
      }

      if (globeRef.current) {
        globeRef.current.rotation.y += 0.002;
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
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);

      if (meshRef.current) {
        const scrollFactor = scroll * 0.001;
        meshRef.current.position.y = -scrollFactor * 3;
        meshRef.current.position.x = Math.sin(scrollFactor) * 1.5;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.x = scroll * 0.0003;
      }

      if (globeRef.current) {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            globeRef.current.position.y = 0;
          } else {
            globeRef.current.position.y = -100;
          }
        }
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
      title: "AMPORA – EV Charging System",
      description:
        "Smart EV charger booking and trip planning with automated CI/CD deployment and cloud infrastructure.",
      tech: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "AWS",
        "Jenkins",
        "Docker",
        "Kubernetes",
      ],
      image: "images/project4.png",
      link: "#",
    },
    {
      title: "Cloud Native Backend",
      description:
        "Kubernetes-deployed backend with Terraform-provisioned infrastructure and automated pipelines.",
      tech: [
        "Spring Boot",
        "Terraform",
        "Docker",
        "Kubernetes",
        "GCP",
        "Jenkins",
      ],
      image: "images/project2.png",
      link: "#",
    },
    {
      title: "Visual Vibe – Social Media App",
      description:
        "Flutter-based social platform with real-time chat, feeds, and cloud-hosted backend.",
      tech: ["Flutter", "Firebase", "Supabase"],
      image: "images/project3.png",
      link: "#",
    },
    {
      title: "Food Export Website",
      description:
        "Production website for Seneth Healing Foods with client management and order handling.",
      tech: ["PHP", "Bootstrap", "HTML", "MySQL"],
      image: "images/project6.png",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Online shopping platform for electronics with integrated payment gateway.",
      tech: ["PHP", "Bootstrap", "MySQL"],
      image: "images/project5.png",
      link: "#",
    },
    {
      title: "Smart Fishery System",
      description:
        "Desktop management system for fisheries with JavaFX frontend and MySQL backend.",
      tech: ["JavaFX", "MySQL"],
      image: "images/project7.png",
      link: "#",
    },
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full Stack Development",
      description:
        "Building scalable web applications with modern frameworks and cloud architecture",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "DevOps & Cloud",
      description:
        "Kubernetes orchestration, CI/CD pipelines, and infrastructure automation",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps with Flutter and native technologies",
    },
  ];

  const experiences = [
    {
      role: "DevOps & Cloud Engineer",
      company: "GitHub – Open Source",
      period: "2024 - Present",
      description:
        "Contributing to DevOps projects, focusing on CI/CD pipelines and cloud infrastructure",
    },
    {
      role: "Full Stack Developer",
      company: "Seneth Healing Foods (Pvt) Ltd",
      period: "2023",
      description:
        "Developed production e-commerce platform with payment integration",
    },
  ];

  const skills = [
    { name: "React", level: 95, icon: <Code className="w-4 h-4" /> },
    { name: "Docker", level: 90, icon: <Box className="w-4 h-4" /> },
    { name: "Kubernetes", level: 85, icon: <Layers className="w-4 h-4" /> },
    { name: "AWS/GCP", level: 80, icon: <Cloud className="w-4 h-4" /> },
    { name: "Spring Boot", level: 90, icon: <Server className="w-4 h-4" /> },
    { name: "CI/CD", level: 85, icon: <GitBranch className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#000510] text-white min-h-screen font-sans overflow-x-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.3);
        }
        .neon-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                       0 0 20px rgba(0, 255, 255, 0.6),
                       0 0 30px rgba(0, 255, 255, 0.4);
        }
        .neon-border {
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2),
                      inset 0 0 15px rgba(0, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(90deg, #00ffff, #ff00ff, #00ff88);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
      />

      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#000510] to-[#001030] pointer-events-none z-0" />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "glass-card shadow-2xl shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">NUMIDU</div>

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
                className={`capitalize transition-all duration-300 relative ${
                  activeSection === item
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {item}
                {activeSection === item && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
                )}
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
          <div className="md:hidden glass-card border-t border-cyan-500/20">
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
                className="block w-full text-left px-6 py-4 capitalize hover:bg-cyan-500/10 transition-all border-l-2 border-transparent hover:border-cyan-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6 pt-20"
      >
        <div
          className="max-w-6xl mx-auto text-center z-10"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full relative">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute inset-2 rounded-full bg-[#000510] flex items-center justify-center overflow-hidden">
                <img
                  src="images/myimage.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div
                className="absolute inset-0 rounded-full"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
            </div>
          </div>

          <h1
            className="text-7xl md:text-9xl font-black mb-8 gradient-text"
            style={{ letterSpacing: "0.05em" }}
          >
            NUMIDU DULANGA
          </h1>

          <p className="text-2xl md:text-4xl text-cyan-400 mb-8 font-light neon-text">
            DevOps Engineer • Cloud Architect • Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Building next-generation cloud-native applications with cutting-edge
            technology. Specializing in Kubernetes orchestration, CI/CD
            automation, and scalable microservices architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 neon-border"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 glass-card rounded-2xl font-bold hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-110 neon-border"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-cyan-400 neon-text" />
        </div>
      </section>

      <section id="about" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-20 text-center gradient-text">
            ABOUT ME
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card rounded-3xl p-10 neon-border transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Education
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="text-white font-bold text-xl block mb-2">
                  Bachelor of Computer Science
                </span>
                University Of Ruhuna • 2023 - 2026
                <br />
                <span className="text-cyan-400 mt-2 block">
                  Focus: DevOps, Cloud Architecture, Full Stack Development
                </span>
              </p>
            </div>

            <div className="glass-card rounded-3xl p-10 neon-border transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-purple-400">
                Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Pioneering cloud-native solutions that push the boundaries of
                scalability and performance. Committed to open-source
                contribution and building the future of distributed systems.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-12 neon-border">
            <h3 className="text-4xl font-bold mb-12 text-center gradient-text">
              TECHNICAL STACK
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-cyan-400 group-hover:scale-125 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-bold text-xl group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-mono text-xl">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-4 glass-card rounded-full overflow-hidden neon-border">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 shadow-lg"
                      style={{
                        width: `${skill.level}%`,
                        boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-20 text-center gradient-text">
            FEATURED WORK
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass-card rounded-3xl overflow-hidden neon-border transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/30"
                style={{
                  animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
                }}
              >
                <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 glass-card rounded-full text-sm text-cyan-400 neon-border hover:bg-cyan-500/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all gap-2 group-hover:gap-4 font-semibold"
                  >
                    View Project <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-20 text-center gradient-text">
            SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-10 neon-border transition-all duration-500 text-center transform hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/30"
                style={{ animation: `float ${4 + idx}s ease-in-out infinite` }}
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center transform transition-all duration-500 hover:rotate-12 hover:scale-125">
                    <div className="text-white">{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-40 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-20 text-center gradient-text">
            EXPERIENCE
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-20 mb-12 group">
                <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-4 border-[#000510] shadow-lg shadow-cyan-500/50 group-hover:scale-150 transition-transform duration-300" />

                <div className="glass-card rounded-3xl p-8 neon-border hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:translate-x-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-cyan-400">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 font-mono">
                        {exp.period}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-card rounded-3xl p-12 neon-border hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <h3 className="text-4xl font-bold mb-10 text-center gradient-text">
              CERTIFICATIONS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "DevOps Programming",
                "AWS Educate Storage",
                "Learning Kubernetes",
                "Cyber Security",
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 glass-card rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 neon-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-lg">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-40 px-6 relative z-10 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-20 text-center gradient-text">
            LET'S CONNECT
          </h2>

          <div className="glass-card rounded-3xl p-12 neon-border hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 glass-card neon-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-lg"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 glass-card neon-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-cyan-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="6"
                  className="w-full px-6 py-4 glass-card neon-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none text-lg"
                  placeholder="Your message..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-10 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 neon-border"
              >
                Send Message <Send className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-cyan-500/20">
              <div className="flex flex-wrap justify-center gap-8">
                <a
                  href="mailto:dnumidu@gmail.com"
                  className="flex items-center gap-3 glass-card px-6 py-3 rounded-2xl hover:bg-cyan-500/20 transition-all transform hover:scale-110 neon-border"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">dnumidu@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-cyan-500/20 relative z-10 glass-card">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-6 text-gray-400 text-lg">
            © 2026{" "}
            <span className="gradient-text font-bold">NUMIDU DULANGA</span>. All
            rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;

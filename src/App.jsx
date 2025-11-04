import React, { useState } from "react";
import {
  Home,
  Code,
  Users,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Github,
  Linkedin,
  FileText,
  Smartphone,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, page: "home" },
  { name: "Projects", icon: Code, page: "projects" },
  { name: "Skills", icon: Users, page: "skills" },
  { name: "Contact", icon: Mail, page: "contact" },
];

const projectsData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce site featuring user authentication, payment processing, and dynamic inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/react-project-ecommerce",
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging app built with WebSockets for instant communication.",
    tags: ["React", "Socket.io", "TypeScript", "Redux"],
    liveLink: "#",
    githubLink: "https://github.com/react-project-chat",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard using D3.js for financial data visualization.",
    tags: ["React", "D3.js", "API Integration"],
    liveLink: "#",
    githubLink: "https://github.com/react-project-dashboard",
  },
];

const skillsData = [
  { name: "JavaScript (ES6+)", level: "Expert", icon: "💻" },
  { name: "React & Hooks", level: "Expert", icon: "⚛️" },
  { name: "HTML5 & CSS3", level: "Advanced", icon: "🌐" },
  { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
  { name: "Node.js & Express", level: "Intermediate", icon: "⚙️" },
  { name: "Git & GitHub", level: "Advanced", icon: "🐙" },
];

// --- HEADER ---
const Header = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Smooth scroll function
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);

    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavItem = ({ item }) => (
    <button
      onClick={() => handleNavigation(item.page)}
      className={`flex items-center space-x-2 py-2 px-4 rounded-lg text-sm font-medium transition-all w-full md:w-auto
        ${
          currentPage === item.page
            ? "bg-indigo-600 text-white shadow-md"
            : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
    >
      <item.icon className="w-5 h-5" />
      <span>{item.name}</span>
    </button>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm dark:bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <h1 className="text-lg sm:text-xl font-bold text-indigo-700 dark:text-indigo-400">
          Harsh Kumar
        </h1>

        <nav className="hidden md:flex space-x-1 bg-gray-50 dark:bg-gray-800 p-1 rounded-full shadow-inner">
          {navItems.map((item) => (
            <NavItem key={item.page} item={item} />
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pb-3 px-4 animate-slideDown">
          {navItems.map((item) => (
            <NavItem key={item.page} item={item} />
          ))}
        </div>
      )}
    </header>
  );
};

// --- HERO SECTION ---
const HeroSection = () => (
  <section
    id="home"
    className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 text-center px-4 transition"
  >
    <img
      className="mx-auto h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover ring-4 ring-indigo-500 mb-6"
      src="\personal_headhot.jpg"
      alt="Harsh Kumar"
      onError={(e) => {
        e.target.src =
          "https://placehold.co/128x128/3f3f46/ffffff?text=Image+Error";
      }}
    />
    <p className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400">
      Hello! I'm Harsh
    </p>
    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight my-4">
      A{" "}
      <span className="text-indigo-600 dark:text-indigo-400">
        React Developer
      </span>{" "}
      & Frontend Architect
    </h1>
    <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
      I build clean, responsive, and high-performance web applications focused
      on user experience and scalability.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="px-6 py-3 text-base sm:text-lg rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition"
      >
        View Projects
      </button>
      <a
        href="/Resume1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 text-base sm:text-lg rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-800 flex justify-center items-center gap-2"
      >
        <FileText className="w-5 h-5" />
        Resume
      </a>
    </div>
  </section>
);

// --- PROJECTS ---
const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-5">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
      {project.title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 rounded-lg text-center bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        <ArrowUpRight className="inline w-4 h-4 mr-1" /> Live Demo
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 rounded-lg text-center border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <Github className="inline w-4 h-4 mr-1" /> Code
      </a>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  </section>
);

// --- SKILLS ---
const SkillsSection = () => (
  <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        My Expertise
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {skillsData.map((skill, i) => (
          <div
            key={i}
            className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md text-center hover:scale-105 transition"
          >
            <p className="text-3xl mb-2">{skill.icon}</p>
            <h3 className="text-sm sm:text-base font-semibold">{skill.name}</h3>
            <p className="text-xs text-indigo-600 dark:text-indigo-400">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- CONTACT ---
const ContactSection = () => {
  const [status, setStatus] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      e.target.reset();
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          I'm open to new opportunities. Drop me a message below!
        </p>

        <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <form
            action="https://formspree.io/f/xrbowwyj"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 space-y-2 text-gray-600 dark:text-gray-400">
          <p>
            <Mail className="inline w-4 h-4 mr-2" />
            Heykrharsh01@gmail.com
          </p>
          <p>
            <Smartphone className="inline w-4 h-4 mr-2" /> +91 7484009245
          </p>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="text-center space-y-2">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/harsh-kumar-254bb4253"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-indigo-400"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/krhrsh"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-indigo-400"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Harsh Kumar — Built with React & Tailwind
        CSS.
      </p>
    </div>
  </footer>
);

// --- MAIN APP ---
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

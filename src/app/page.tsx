"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCode, FaLaptopCode, FaCloud } from "react-icons/fa";
import ProjectModal from '@/components/ProjectModal';
import { useState } from 'react';

// Project data
const projects = [
  {
    name: "🏠 Rent App",
    description: "Full-stack rental property application featuring robust authentication and authorization using JWT, refresh tokens, and OTP validation.",
    achievements: [
      "Implemented secure sign-up/login with JWT access & refresh tokens",
      "Added OTP verification for enhanced account security",
      "Developed property listing, booking, and admin dashboards",
      "Structured global state with Redux Toolkit for predictable data flow"
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "OTP"],
    images: [
      "/Rent-App/auth1.png",
      "/Rent-App/auth2.png",
      "/Rent-App/auth3.png",
      "/Rent-App/auth4.png",
      "/Rent-App/auth5.png"
    ]
  },
  {
    name: "🛍️ My Store",
    description: "A modern e-commerce platform for tech gadgets with a beautiful UI, seamless shopping experience, and secure checkout process.",
    achievements: [
      "Designed and developed a responsive e-commerce interface with Next.js and Tailwind CSS",
      "Implemented product catalog with New Year sale promotions",
      "Created shopping cart with real-time price calculations",
      "Added contact form with Google Maps integration"
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
    images: [
      "/ecommerce/home.png",
      "/ecommerce/products.png",
      "/ecommerce/cart.png",
      "/ecommerce/contact.png"
    ]
  },
  {
    name: "🔐 RefVault",
    description: "Enterprise Document Vault system with secure document management and collaboration features.",
    achievements: [
      "Led frontend development from Figma to production",
      "Implemented reusable components and state management",
      "Built and integrated backend APIs",
      "Set up full-stack deployment infrastructure"
    ],
    technologies: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS EC2", "Docker", "Nginx"],
    images: [
      "/refvault/Dashboard.png",
      "/refvault/home.png",
      "/refvault/Login.png",
      "/refvault/graph.png",
      "/refvault/2.png"
    ]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <main className="pt-18 w-full min-h-screen bg-[#FFECD2] font-sans">
      {/* Home / Hero Section */}
      <section id="home" className="w-full bg-gradient-to-br from-[#FFECD2] via-[#FFD5B8] to-[#FCB69F] py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center z-10 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#4A3F35] mb-4 leading-tight">Frontend Developer</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#6B5B4E] mb-6">React.js &bull; Next.js &bull; Tailwind CSS</h2>
            <p className="mb-8 text-lg text-[#4A3F35] max-w-xl">Frontend Developer with 4 years of experience in React.js, Next.js, Tailwind CSS, and converting Figma designs into pixel-perfect, responsive UIs. Skilled in building high-performance web applications with clean and maintainable code.</p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com/in/pooja-yadav-py" target="_blank" rel="noopener noreferrer nofollow" className="border-2 border-[#4A3F35] hover:border-[#FCB69F] text-[#4A3F35] hover:text-[#FCB69F] rounded-full p-3 text-2xl transition"><FaLinkedin /></a>
              <a href="https://github.com/pooja-yadav-py" target="_blank" rel="noopener noreferrer nofollow" className="border-2 border-[#4A3F35] hover:border-[#FCB69F] text-[#4A3F35] hover:text-[#FCB69F] rounded-full p-3 text-2xl transition"><FaGithub /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#cb9773] to-[#FFD5B8] text-[#4A3F35] font-semibold text-lg shadow hover:from-[#cb9773] hover:to-[#FCB69F] transition text-center">Get In Touch</a>
              <a href="#projects" className="px-8 py-3 rounded-lg border-2 border-[#4A3F35] text-[#4A3F35] font-semibold text-lg hover:border-[#FCB69F] hover:text-[#4A3F35] transition text-center">View Projects</a>
            </div>
          </div>
          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative z-10">
            <div className="relative inline-block">
              <Image 
                src="/about.jpg" 
                alt="Profile" 
                width={280}
                height={280}
                className="w-70 h-70 md:w-100 md:h-100 rounded-full border-8 border-white shadow-xl object-cover"
                priority
                onError={() => {
                  console.error('Failed to load profile image');
                }}
              />
              {/* Dev Badge */}
            </div>
          </div>
          {/* Optional: Decorative gradient overlay for extra effect */}
          <div className="absolute inset-0 z-0" style={{background: "radial-gradient(circle at 80% 20%, rgba(255,236,210,0.2) 0%, transparent 70%)"}}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#4A3F35]">About Me</h2>
            <div className="space-y-6 text-[#6B5B4E] text-lg">
              <p>Hi! I&apos;m Pooja Yadav, a Frontend Developer based in Gurugram, Haryana. With 4 years of experience in React.js, Next.js, and Tailwind CSS, I specialize in converting Figma designs into pixel-perfect, responsive user interfaces.</p>
              <p>I have a strong foundation in frontend technologies and basic knowledge of backend development with Node.js and MongoDB. I&apos;m passionate about creating clean, maintainable code and delivering high-performance web applications.</p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#4A3F35] mb-4">🏆 Recognition</h3>
                <div className="bg-gradient-to-r from-[#FFECD2] to-[#FCB69F]/20 p-4 rounded-lg">
                  <p className="font-semibold text-[#4A3F35]">Star Performer - CODT Technologies (Feb 2024)</p>
                  <p className="text-[#6B5B4E]">Recognized for exceptional performance and contributions to the organization.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/918209792612?text=Hi%20Pooja%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer nofollow"
                className="inline-block border-2 border-[#FCB69F] text-[#4A3F35] px-6 py-2 rounded-lg font-semibold text-lg hover:bg-[#FCB69F] hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-gradient-to-br from-[#FFECD2] to-[#FCB69F] rounded-2xl overflow-hidden shadow-lg w-80 h-100 my-20">
              <Image 
                src="/about/about-me.png" 
                alt="Profile" 
                width={320}
                height={400}
                className="w-full h-full object-cover"
                onError={() => {
                  console.error('Failed to load about image');
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-gradient-to-br from-[#FFECD2] via-[#FFD5B8] to-[#FCB69F]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4A3F35]">Services I Provide</h2>
          <p className="text-center text-lg text-[#6B5B4E] mb-12 max-w-3xl mx-auto">From pixel-perfect UI development to full-stack deployment, I offer comprehensive web development services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Web Development */}
            <div className="bg-white/80 backdrop-blur-sm text-[#4A3F35] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <FaCode className="text-4xl mb-4 text-[#FCB69F]" />
              <h3 className="text-xl font-bold mb-2 text-[#4A3F35]">Frontend Web Development</h3>
              <ul className="text-[#6B5B4E] text-left space-y-2">
                <li>• Pixel-perfect UI from Figma</li>
                <li>• Responsive, mobile-first design</li>
                <li>• Component-driven architecture</li>
                <li>• React/Next.js expertise</li>
              </ul>
            </div>
            {/* Custom Web Application */}
            <div className="bg-white/80 backdrop-blur-sm text-[#4A3F35] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <FaLaptopCode className="text-4xl mb-4 text-[#FCB69F]" />
              <h3 className="text-xl font-bold mb-2 text-[#4A3F35]">Custom Web Applications</h3>
              <ul className="text-[#6B5B4E] text-left space-y-2">
                <li>• MVPs to scalable apps</li>
                <li>• API integration</li>
                <li>• Dynamic UIs</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            {/* Backend Integration */}
            <div className="bg-white/80 backdrop-blur-sm text-[#4A3F35] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <FaCloud className="text-4xl mb-4 text-[#FCB69F]" />
              <h3 className="text-xl font-bold mb-2 text-[#4A3F35]">Backend Integration</h3>
              <ul className="text-[#6B5B4E] text-left space-y-2">
                <li>• REST API development</li>
                <li>• Node.js & Express.js</li>
                <li>• MongoDB integration</li>
                <li>• Data modeling</li>
              </ul>
            </div>
            {/* Deployment & DevOps */}
            <div className="bg-white/80 backdrop-blur-sm text-[#4A3F35] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <FaCloud className="text-4xl mb-4 text-[#FCB69F]" />
              <h3 className="text-xl font-bold mb-2 text-[#4A3F35]">Deployment & DevOps</h3>
              <ul className="text-[#6B5B4E] text-left space-y-2">
                <li>• AWS EC2 deployment</li>
                <li>• Docker & Nginx setup</li>
                <li>• Version control (Git)</li>
                <li>• CI/CD implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative flex flex-col items-center mb-0">
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#4A3F35]">My Skills</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#4A3F35] via-[#FCB69F] to-[#FCB69F] rounded-full"></div>
          <div className="relative w-full">
            <svg className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-1 z-0" width="700" height="60" viewBox="0 0 700 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M350 0 V30" stroke="#FCB69F" strokeWidth="4"/>
              <path d="M350 30 C350 50, 100 50, 100 60" stroke="#FCB69F" strokeWidth="4" fill="none"/>
              <path d="M350 30 C350 50, 350 50, 350 60" stroke="#FCB69F" strokeWidth="4" fill="none"/>
              <path d="M350 30 C350 50, 600 50, 600 60" stroke="#FCB69F" strokeWidth="4" fill="none"/>
              {/* Arrowheads */}
              <polygon points="100,60 95,55 105,55" fill="#FCB69F"/>
              <polygon points="350,60 345,55 355,55" fill="#FCB69F"/>
              <polygon points="600,60 595,55 605,55" fill="#FCB69F"/>
            </svg>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-16">
            {/* Frontend Section */}
            
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-[#FFECD2] text-[#4A3F35] border-2 border-[#FCB69F] rounded-lg px-6 py-2 text-lg font-bold mb-4">Frontend</div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full ">
                {['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Figma to Code'].map(skill => (
                  <span key={skill} className="bg-[#FFECD2] text-[#4A3F35] border border-[#FCB69F] px-4 py-2 rounded-md font-semibold text-sm shadow-sm text-center hover:bg-[#FFD5B8] transition-colors">{skill}</span>
                ))}
              </div>
            </div>
            {/* Backend Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-[#FFECD2] text-[#4A3F35] border-2 border-[#FCB69F] rounded-lg px-6 py-2 text-lg font-bold mb-4">Backend</div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                {['Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map(skill => (
                  <span key={skill} className="bg-[#FFECD2] text-[#4A3F35] border border-[#FCB69F] px-4 py-2 rounded-md font-semibold text-sm shadow-sm text-center hover:bg-[#FFD5B8] transition-colors">{skill}</span>
                ))}
              </div>
            </div>
            {/* Tools Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-[#FFECD2] text-[#4A3F35] border-2 border-[#FCB69F] rounded-lg px-6 py-2 text-lg font-bold mb-4">Tools & Others</div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                {['Git', 'GitHub', 'AWS EC2', 'Docker', 'Nginx', 'Figma', 'VS Code'].map(skill => (
                  <span key={skill} className="bg-[#FFECD2] text-[#4A3F35] border border-[#FCB69F] px-4 py-2 rounded-md font-semibold text-sm shadow-sm text-center hover:bg-[#FFD5B8] transition-colors">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20 bg-gradient-to-br from-[#FFECD2] via-[#FFD5B8] to-[#FCB69F]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#4A3F35]">Experience</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#4A3F35] via-[#FCB69F] to-[#FCB69F] rounded-full"></div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4A3F35] via-[#FCB69F] to-[#FCB69F] rounded-full opacity-70" style={{zIndex:0}}></div>
            <div className="space-y-12 pl-12">
              {/* CODT Technologies */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="absolute -left-8 top-8 w-5 h-5 bg-gradient-to-br from-[#4A3F35] to-[#FCB69F] rounded-full border-4 border-white" style={{zIndex:1}}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#4A3F35]">🚀 Frontend Developer</h3>
                  <span className="text-md font-semibold text-[#FCB69F] mt-2 md:mt-0">June 2022 - Present</span>
                </div>
                <a href="https://codttech.com" target="_blank" rel="noopener noreferrer nofollow" className="text-[#FCB69F] font-semibold mb-2 inline-block hover:text-[#4A3F35] transition">CODT Technologies, Gurugram</a>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#4A3F35] mb-2">RefVault Project:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[#6B5B4E]">
                    <li className="marker:text-[#FCB69F]">Led the frontend development, converting Figma designs into a scalable React and Next.js application</li>
                    <li className="marker:text-[#FCB69F]">Developed reusable components and implemented Redux Toolkit for state management</li>
                    <li className="marker:text-[#FCB69F]">Built APIs with Node.js, Express.js, and MongoDB, using aggregation for optimized data retrieval</li>
                    <li className="marker:text-[#FCB69F]">Deployed the project on AWS EC2 with Docker, Nginx, and Git</li>
                </ul>
              </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#4A3F35] mb-2">Interior Designer Platform:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[#6B5B4E]">
                    <li className="marker:text-[#FCB69F]">Worked on new features and enhancements for an existing React.js application</li>
                    <li className="marker:text-[#FCB69F]">Collaborated with frontend and backend teams to improve UI/UX and optimize performance</li>
                    <li className="marker:text-[#FCB69F]">Implemented Material UI components and ensured design consistency with Figma</li>
                  </ul>
                </div>
                <p className="text-[#6B5B4E]">Worked on many other small projects for new features and UI designs for custom requirements.</p>
              </div>

              {/* Freelancer */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="absolute -left-8 top-8 w-5 h-5 bg-gradient-to-br from-[#4A3F35] to-[#FCB69F] rounded-full border-4 border-white" style={{zIndex:1}}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#4A3F35]">💻 Frontend Developer</h3>
                  <span className="text-md font-semibold text-[#FCB69F] mt-2 md:mt-0">March 2021 - June 2022</span>
                </div>
                <span className="text-[#FCB69F] font-semibold mb-2 inline-block">Freelancer</span>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#4A3F35] mb-2">MVP of Attribute Data Model Like SAP IBP:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[#6B5B4E]">
                    <li className="marker:text-[#FCB69F]">Developed frontend screens from Figma designs, implementing CRUD operations for attributes</li>
                    <li className="marker:text-[#FCB69F]">Created a Master Data Model feature for selecting multiple attributes</li>
                    <li className="marker:text-[#FCB69F]">Built UI components for listing attributes, models, and filters</li>
                    <li className="marker:text-[#FCB69F]">Designed an upload file screen for importing data into data models</li>
                </ul>
                </div>
                <p className="text-[#6B5B4E]">Worked on some other small projects for new features and UI designs for custom requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#4A3F35]">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#4A3F35] via-[#FCB69F] to-[#FCB69F] rounded-full"></div>
          <p className="text-center text-[#6B5B4E] mb-10">Showcasing my expertise in frontend development and full-stack capabilities</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="bg-[#FFECD2] text-[#6B5B4E] rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                {/* Project Image */}
                <div 
                  className="relative h-48 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                    onError={() => {
                      console.error(`Failed to load project image: ${project.images[0]}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#4A3F35]">
                      View Gallery
                    </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#4A3F35] mb-2">{project.name}</h3>
                  <p className="text-[#6B5B4E] mb-4 flex-1">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#4A3F35] mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {project.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
              </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-[#FFD5B8] text-[#4A3F35] px-3 py-1 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          images={selectedProject.images}
          projectName={selectedProject.name}
        />
      )}

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-gradient-to-br from-[#FFECD2] via-[#FFD5B8] to-[#FCB69F]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#4A3F35]">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#4A3F35] via-[#FCB69F] to-[#FCB69F] rounded-full"></div>
          <p className="text-center text-[#6B5B4E] mb-10 max-w-2xl mx-auto">Ready to work together? I&apos;d love to hear about your project and discuss how we can bring your ideas to life.</p>
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            {/* Left: Contact Info */}
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col justify-between mb-4 lg:mb-0 hover:shadow-xl transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-[#4A3F35] mb-6">Let&apos;s Connect</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-br from-[#FCB69F] to-[#FFD5B8] p-3 rounded-lg text-[#4A3F35] text-xl"><FaEnvelope /></span>
                    <span className="text-[#6B5B4E]">mispooju@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-br from-[#FCB69F] to-[#FFD5B8] p-3 rounded-lg text-[#4A3F35] text-xl"><FaPhoneAlt /></span>
                    <span className="text-[#6B5B4E]">+91 8209792612</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-br from-[#FCB69F] to-[#FFD5B8] p-3 rounded-lg text-[#4A3F35] text-xl"><FaMapMarkerAlt /></span>
                    <span className="text-[#6B5B4E]">Gurugram, Haryana, India</span>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="block text-[#6B5B4E] mb-2">Connect with me:</span>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/pooja-yadav-py" target="_blank" rel="noopener noreferrer nofollow" className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] p-2 rounded-full text-[#4A3F35] text-lg flex items-center justify-center shadow hover:opacity-80 transition">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/pooja-yadav-py" target="_blank" rel="noopener noreferrer nofollow" className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] p-2 rounded-full text-[#4A3F35] text-lg flex items-center justify-center shadow hover:opacity-80 transition">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div>
                  <span className="block text-[#6B5B4E] mb-2">Available For:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] text-[#4A3F35] px-4 py-1 rounded-full text-xs font-semibold">Full-time Roles</span>
                    <span className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] text-[#4A3F35] px-4 py-1 rounded-full text-xs font-semibold">Freelance Projects</span>
                    <span className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] text-[#4A3F35] px-4 py-1 rounded-full text-xs font-semibold">Consulting</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#4A3F35] mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="Name" className="flex-1 px-4 py-3 rounded bg-[#FFECD2] text-[#6B5B4E] border border-[#FCB69F] focus:outline-none focus:ring-2 focus:ring-[#FCB69F] focus:border-transparent" />
                  <input type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded bg-[#FFECD2] text-[#6B5B4E] border border-[#FCB69F] focus:outline-none focus:ring-2 focus:ring-[#FCB69F] focus:border-transparent" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded bg-[#FFECD2] text-[#6B5B4E] border border-[#FCB69F] focus:outline-none focus:ring-2 focus:ring-[#FCB69F] focus:border-transparent" />
                <textarea placeholder="Message" className="w-full px-4 py-3 rounded bg-[#FFECD2] text-[#6B5B4E] border border-[#FCB69F] focus:outline-none focus:ring-2 focus:ring-[#FCB69F] focus:border-transparent" rows={5}></textarea>
                <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] text-[#4A3F35] font-semibold text-lg shadow hover:opacity-90 transition">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#FFECD2] pt-12 pb-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          {/* Portfolio Info */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-[#4A3F35] mb-2">Portfolio</h3>
            <p className="text-[#6B5B4E] mb-2">Frontend Developer with 4 years of experience specializing in React.js, Next.js, and Tailwind CSS.</p>
            <p className="text-[#6B5B4E] mb-2">Expert in converting Figma designs into pixel-perfect, responsive UIs.</p>
            <p className="text-[#6B5B4E] mb-4">Let&apos;s create something amazing together.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/pooja-yadav" target="_blank" rel="noopener noreferrer nofollow" className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] p-2 rounded-full text-[#4A3F35] text-lg flex items-center justify-center shadow hover:opacity-80 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/pooja-yadav" target="_blank" rel="noopener noreferrer nofollow" className="bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] p-2 rounded-full text-[#4A3F35] text-lg flex items-center justify-center shadow hover:opacity-80 transition">
                <FaGithub />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h4 className="text-lg font-bold text-[#4A3F35] mb-3">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              <li><a href="#home" className="underline text-[#6B5B4E] hover:text-[#FCB69F] transition">Home</a></li>
              <li><a href="#about" className="underline text-[#6B5B4E] hover:text-[#FCB69F] transition">About</a></li>
              <li><a href="#skills" className="underline text-[#6B5B4E] hover:text-[#FCB69F] transition">Skills</a></li>
              <li><a href="#experience" className="underline text-[#6B5B4E] hover:text-[#FCB69F] transition">Experience</a></li>
              <li><a href="#projects" className="underline text-[#6B5B4E] hover:text-[#FCB69F] transition">Projects</a></li>
              <li><a href="#contact" className="underline text-[#6B5B4E] hover:text-[#FCB69F] transition">Contact</a></li>
            </ul>
          </div>
          {/* Technologies */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-[#4A3F35] mb-3">Core Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'AWS EC2', 'Docker', 'Git', 'Nginx', 'Figma'].map(tech => (
                <span key={tech} className="bg-[#FFECD2] text-[#6B5B4E] px-4 py-1 rounded-md text-sm font-semibold border border-[#FFD5B8] hover:border-[#FCB69F] hover:text-[#4A3F35] transition-colors">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#FFECD2] mt-10 pt-4 text-center text-[#6B5B4E] text-sm">
          © {new Date().getFullYear()} Portfolio. Pooja Yadav. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

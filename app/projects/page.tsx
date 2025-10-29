import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Router Data Reporting System (Juniper Networks)",
    description:
      "Developed a scalable reporting system using Python and JavaScript for Juniper Networks to visualize and analyze router data. Optimized database performance and delivered real-time network insights.",
    tech: ["Python", "JavaScript", "PostgreSQL"],
    repo: "#",
    demo: "#",
  },
  {
    title: "InterviewAI — AI-Powered Interview Bot",
    description:
      "Built an AI-driven interview automation chatbot leveraging OpenAI API, React.js frontend, and FastAPI backend with real-time voice chat capabilities.",
    tech: ["React.js", "FastAPI", "OpenAI API"],
    repo: "#",
    demo: "#",
  },
  {
    title: "Ozar — AI Test Case Generator",
    description:
      "Created an AI-powered tool to auto-generate software test cases from Jira and Figma using OpenAI’s NLP capabilities, improving QA efficiency and consistency.",
    tech: ["Python", "OpenAI API", "Jira API"],
    repo: "#",
    demo: "https://ozar.ai/",
  },
  {
    title: "Inventory Management System",
    description:
      "Developed secure RESTful APIs with Node.js and MySQL, and built an admin panel using CodeIgniter with role-based access control.",
    tech: ["Node.js", "MySQL", "CodeIgniter"],
    repo: "#",
    demo: "#",
  },
  {
    title: "PDF Chatbot (RAG)",
    description: "Retrieval-augmented chatbot using LangChain and OpenAI.",
    tech: ["Next.js", "Python", "OpenAI"],
    repo: "https://github.com/srathod19/PDFChat-using-langchain-RAG",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

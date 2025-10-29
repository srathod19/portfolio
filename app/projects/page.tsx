import ProjectCard from '../../components/ProjectCard'


const projects = [
{
title: 'AI Resume Matcher',
description: 'Rank resumes against job descriptions using embeddings and semantic search.',
tech: ['Python', 'FastAPI', 'Vector DB'],
repo: '#',
demo: '#'
},
{
title: 'Chatbot (RAG)',
description: 'Retrieval-augmented chatbot using LangChain and OpenAI.',
tech: ['Next.js', 'Python', 'OpenAI'],
repo: '#',
demo: '#'
}
]


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
)
}
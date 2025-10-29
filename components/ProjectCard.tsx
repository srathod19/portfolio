export default function ProjectCard({
  title,
  description,
  tech,
  repo,
  demo,
}: any) {
  return (
    <article className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t: string) => (
          <span key={t} className="text-xs px-2 py-1 border rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={demo} className="text-sm underline">
          Live
        </a>
        <a href={repo} className="text-sm underline">
          Repo
        </a>
      </div>
    </article>
  );
}

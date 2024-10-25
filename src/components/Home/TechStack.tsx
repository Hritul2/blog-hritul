const techStack = ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "MongoDB"];

export default function TechStack() {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                    <span
                        key={tech}
                        className="cursor-pointer rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:bg-rose-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-rose-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

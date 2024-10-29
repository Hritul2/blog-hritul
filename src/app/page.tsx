import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    {
        icon: <Github className="h-5 w-5" />,
        href: "https://github.com/hritul2",
        label: "GitHub",
    },
    {
        icon: <Linkedin className="h-5 w-5" />,
        href: "https://www.linkedin.com/in/hritul-srivastava-3536a7329/",
        label: "LinkedIn",
    },
    {
        icon: <Mail className="h-5 w-5" />,
        href: "mailto:hritul.srivastava@gmail.com",
        label: "Email",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden pb-12 pt-28">
            <section className="mx-4 md:mx-20">
                <div className="rounded-3xl border p-6 shadow backdrop-blur-md md:p-8">
                    <div className="flex flex-col items-start gap-8 animate-in lg:flex-row lg:gap-16">
                        <div className="flex w-full flex-col gap-6">
                            <div className="space-y-3">
                                <h2 className="text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">
                                    Welcome to my corner of the web
                                    <span className="ml-1 animate-pulse">👋</span>
                                </h2>
                                <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                    <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                                        Hi, I am Hritul Srivastava.
                                    </span>
                                </h1>
                            </div>

                            <div className="space-y-4">
                                <p className="text-base font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
                                    I am a passionate full-stack developer specializing in building
                                    robust web applications with modern technologies. I enjoy
                                    working with JavaScript, React, Node.js, and am always eager to
                                    explore new challenges.
                                </p>
                                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
                                    When I&apos;m not coding, you can find me exploring the latest
                                    in blockchain tech, competitive programming, or simply learning
                                    about innovations in AI and cloud computing. I believe in
                                    writing clean, maintainable code and creating intuitive user
                                    experiences.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                {socialLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full border border-rose-500 bg-white/70 p-2.5 text-rose-500 transition-all duration-300 hover:bg-rose-500 hover:text-white dark:border-rose-600 dark:bg-zinc-950/70 dark:text-rose-600 dark:hover:bg-rose-600 dark:hover:text-white"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-4 mt-12 md:mx-20">
                <div className="rounded-3xl border p-6 shadow backdrop-blur-md md:p-8">
                    <h1 className="text-xl font-bold text-rose-500 dark:text-rose-600 sm:text-2xl">
                        Blog Posts
                    </h1>
                </div>
            </section>
        </main>
    );
}

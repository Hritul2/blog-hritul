import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { icon: <Github className="h-6 w-6" />, href: "https://github.com/hritul2", label: "GitHub" },
    {
        icon: <Linkedin className="h-6 w-6" />,
        href: "https://www.linkedin.com/in/hritul-srivastava-3536a7329/",
        label: "LinkedIn",
    },
    {
        icon: <Mail className="h-6 w-6" />,
        href: "mailto:hritul.srivastava@gmail.com",
        label: "Email",
    },
];

export default function SocialLinks() {
    return (
        <div className="mt-2 flex gap-4">
            {socialLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-zinc-100 p-3 text-zinc-600 transition-all duration-300 hover:bg-rose-100 hover:text-rose-600 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-rose-900/20 dark:hover:text-rose-400"
                    aria-label={link.label}
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
}

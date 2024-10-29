// SocialLinks.jsx
import Link from "next/link";

const SocialLinks = () => {
    return (
        <>
            <Link
                href="https://x.com/_Hritul_"
                target="_blank"
                className="text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </Link>
            <Link
                href="https://github.com/hritul2"
                target="_blank"
                className="text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
            </Link>
            <Link
                href="mailto:hritul.srivastava@gmail.com"
                target="_blank"
                className="text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            </Link>
        </>
    );
};

export default SocialLinks;

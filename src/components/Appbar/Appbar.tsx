// Appbar.jsx
"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavContent from "./NavContent";
import MobileNav from "./MobileNav";

const Appbar = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed left-4 right-4 top-4 z-40 md:left-20 md:right-20">
                <div className="rounded-full border border-rose-500 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-rose-600 dark:bg-zinc-950/70 md:px-8 md:py-4">
                    <Logo />
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed left-4 right-4 top-4 z-40 md:left-20 md:right-20">
            <div className="rounded-full border border-rose-500 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-rose-600 dark:bg-zinc-950/70 md:px-8 md:py-4">
                <div className="flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 md:flex">
                        <NavContent />
                    </div>

                    {/* Mobile Navigation */}
                    <MobileNav />
                </div>
            </div>
        </nav>
    );
};

export default Appbar;

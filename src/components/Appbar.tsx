"use client";
import React, { useEffect, useState } from "react";
import { CircleDot as Logo } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import Link from "next/link";
import XIcon from "@mui/icons-material/X"; // Fixed XIcon import
import GitHubIcon from "@mui/icons-material/GitHub";

const Appbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme switcher after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="flex justify-between items-center px-8 md:px-28 py-4 border-b border-rose-500 dark:border-rose-600">
        <div className="flex items-center gap-4 dark:text-rose-600 text-rose-500">
          <Logo size={30} />
          <h1 className="text-2xl font-semibold">Hritul&apos;s Blog</h1>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center px-8 md:px-28 py-4 border-b border-rose-500 dark:border-rose-600">
      <div className="flex items-center gap-4 dark:text-rose-600 text-rose-500">
        <Logo size={30} />
        <h1 className="text-2xl font-semibold">Hritul&apos;s Blog</h1>
      </div>
      <div className="flex items-center gap-6">
        <Switch
          checked={theme === "dark"}
          onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <Link href="https://x.com/_Hritul_" passHref target="_blank">
          <XIcon
            sx={{
              fontSize: 30,
              color: `${theme === "light" ? "#f43f5e" : " #e11d48"}`,
            }}
          />
        </Link>
        <Link href="https://github.com/hritul2" passHref target="_blank">
          <GitHubIcon
            sx={{
              fontSize: 30,
              color: `${theme === "light" ? "#f43f5e" : " #e11d48"}`,
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Appbar from "@/components/Appbar/Appbar";

const nunito = Nunito({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hritul's Blog",
    description: "learnings, thoughts, and more",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${nunito.className} bg-background antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Appbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

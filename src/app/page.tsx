"use client";
import ProfileImage from "@/components/Home/ProfileImage";
import ActionButtons from "@/components/Home/ActionButtons";
import SocialLinks from "@/components/Home/SocialLinks";
import Greeting from "@/components/Home/Greeting";
import Bio from "@/components/Home/Bio";
import TechStack from "@/components/Home/TechStack";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="overflow-hidden pb-16 pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.9 }}
                >
                    {/* Left Column */}
                    <div className="flex w-full flex-col items-center gap-8 lg:sticky lg:top-32 lg:w-auto">
                        <ProfileImage />
                        <ActionButtons />
                        <SocialLinks />
                    </div>

                    {/* Right Column */}
                    <div className="flex max-w-3xl flex-col gap-8">
                        <Greeting />
                        <Bio />
                        <TechStack />
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function ActionButtons() {
    return (
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/" className="w-full sm:w-auto">
                <Button className="group w-full rounded-full bg-gradient-to-r from-rose-500 to-rose-700 text-lg transition-all duration-300 hover:opacity-90">
                    Book A Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
            <Button
                variant="outline"
                className="group w-full rounded-full border-rose-500/20 text-lg transition-colors duration-300 hover:border-rose-500 sm:w-auto"
            >
                Download CV
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
        </div>
    );
}

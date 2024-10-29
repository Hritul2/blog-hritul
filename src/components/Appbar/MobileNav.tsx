// MobileNav.jsx
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavContent from "./NavContent";

const MobileNav = () => {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger className="text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500">
                    <Menu size={24} />
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="z-50 w-[300px] border-rose-500 bg-white/90 backdrop-blur-lg dark:border-rose-600 dark:bg-zinc-950/90"
                >
                    <div className="mt-12 flex flex-col items-center gap-8">
                        <NavContent />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;

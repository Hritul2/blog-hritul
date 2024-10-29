// Logo.jsx
import { CircleDot as LogoIcon } from "lucide-react";

const Logo = () => {
    return (
        <div className="flex items-center gap-4 text-rose-500 dark:text-rose-600">
            <LogoIcon size={30} />
            <h1 className="text-xl font-semibold md:text-2xl">
                Hritul<span className="animate-pulse">.rs</span>
            </h1>
        </div>
    );
};

export default Logo;

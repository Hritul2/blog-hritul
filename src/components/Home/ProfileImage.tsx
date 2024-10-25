import Image from "next/image";
import Groot from "@/public/imgs/Groot.jpg";

export default function ProfileImage() {
    return (
        <div className="group relative cursor-pointer">
            <div className="animate-tilt absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-rose-400 to-rose-700 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="relative rounded-3xl bg-white p-2 ring-1 ring-zinc-200/20 dark:bg-zinc-950 dark:ring-zinc-800/30">
                <Image
                    src={Groot}
                    alt="Hritul Srivastava"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
                    priority
                />
            </div>
        </div>
    );
}

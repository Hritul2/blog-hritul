// ThemeToggle.jsx
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
    );
};

export default ThemeToggle;

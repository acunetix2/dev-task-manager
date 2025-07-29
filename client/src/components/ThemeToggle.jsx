import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        const root = window.document.documentElement;

        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <Button variant="ghost" size="icon" aria-label="Toggle Theme" onClick={() => setDark(prev => !prev)}>
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
    );
}

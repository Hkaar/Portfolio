"use client";

import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import Icon from "../Icon";
import Button from "../Button";

import { usePathname } from "next/navigation";
import { loadStoredTheme } from "@/lib/themeUtils";
import { useEffect, useState } from "react";

export default function Header() {
    const path = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        loadStoredTheme();

        const handleScroll = () => {
            setIsScrolled(globalThis.scrollY > 35);
        };

        globalThis.addEventListener("scroll", handleScroll);

        return () => {
            globalThis.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <header className={`py-4 bg-base-light dark:bg-base-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40
            ${isScrolled ? 'bg-opacity-20 dark:bg-base-light dark:bg-opacity-[7%] backdrop-blur-lg drop-shadow-lg' : ''}`}>
            <div className="container flex items-center flex-col gap-4 lg:flex-row justify-between">
                <div className="flex justify-between w-full lg:w-fit lg:justify-start">
                    <div className="flex lg:items-center justify-center lg:justify-start gap-2">
                        <Icon size={36}>deployed_code</Icon>
                        <h5 className="font-semibold text-xl">Shava Jaya</h5>
                    </div>

                    <Button className="lg:hidden" icon="menu" onClick={handleCollapse} />
                </div>

                <div id="navMenu" className={`flex lg:items-center flex-col lg:flex-row gap-3 w-full lg:w-fit ${isCollapsed ? 'block' : 'hidden lg:flex'}`}>
                    <nav className="flex lg:items-center flex-col lg:flex-row gap-2">
                        <Menu href="/" active={path === '/'} icon="home">Home</Menu>
                        <Menu href="/about" active={path === '/about'} icon="info">About</Menu>
                        <Menu href="/blog" active={path.startsWith('/blog')} icon="newspaper">Blog</Menu>
                        <Menu href="/projects" active={path.startsWith('/projects')} icon="deployed_code">Projects</Menu>
                        <Menu href="/contact" active={path.startsWith('/contact')} icon="phone">Contact</Menu>
                    </nav>
                    
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

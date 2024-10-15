"use client";

import { usePathname } from "next/navigation";
import Menu from "./Menu"
import ThemeToggle from "./ThemeToggle";
import { loadStoredTheme } from "@/lib/themeUtils";
import { useEffect, useState } from "react";
import Icon from "../Icon";

export default function Header() {
    const path = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        loadStoredTheme()

        const handleScroll = () => {
            if (window.scrollY > 35) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
    return (
        <header className={`py-4 bg-base-light dark:bg-base-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40
            ${isScrolled ? 'bg-opacity-20 dark:bg-base-light dark:bg-opacity-[7%] backdrop-blur-lg rounded drop-shadow-lg' : ''}`}>
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon size={36}>deployed_code</Icon>

                    <h5 className="font-bold text-xl">
                        Shava Jaya
                    </h5>
                </div>

                <nav className="flex items-center gap-2"></nav>

                <div className="flex items-center gap-3">
                    <nav className="flex items-center gap-2">
                        <Menu href="/" active={path === '/' ? true : false} icon="home">Home</Menu>
                        <Menu href="/about" active={path === '/about' ? true : false} icon="info">About</Menu>
                        <Menu href="/blog" active={path.startsWith('/blog') ? true : false} icon="newspaper">Blog</Menu>
                        <Menu href="/projects" active={path.startsWith('/projects') ? true : false} icon="deployed_code">Projects</Menu>
                        <Menu href="/contact" active={path.startsWith('/contact')} icon="phone">Contact</Menu>
                    </nav>

                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
        </header>
    )
}
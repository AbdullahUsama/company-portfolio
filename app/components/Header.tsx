"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import logo from "../../public/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#why-us", isScroll: true },
  { name: "About Us", href: "/#journey", isScroll: true }, // Updated this line
  { name: "Portfolio", href: "/#portfolio", isScroll: true }, // Add isScroll property
  // { name: "Process", href: "/process" },
  // { name: "Startup Insights", href: "/insights" },
  // { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/#contact", isScroll: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverStyle, setHoverStyle] = useState({})
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = navRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  useEffect(() => {
    const activeElement = navRefs.current[activeIndex]
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      })
    }
  }, [activeIndex])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0], index: number) => {
    if (item.isScroll) {
      e.preventDefault();
      const sectionId = item.href.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveIndex(index);
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flowers & Saints</span>
            <Image
              className="h-8 w-auto sm:h-10"
              src={logo}
              alt="Flowers & Saints Logo"
            />
          </Link>
        </div>
  
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground/60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
  
        {/* Desktop navigation */}
        <div className="hidden lg:relative lg:flex lg:items-center">
          {/* Existing hover and active indicators */}
          <div
            className="absolute h-[30px] transition-all duration-300 ease-out bg-primary/10 dark:bg-primary/20 rounded-[6px] flex items-center"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />
          <div
            className="absolute bottom-[-6px] h-[2px] bg-primary transition-all duration-300 ease-out"
            style={activeStyle}
          />
  
          {/* Navigation Items */}
          <div className="relative flex space-x-[6px] items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                ref={el => {
                  if (el) {
                    navRefs.current[index] = el
                  }
                }}
                href={item.href}
                className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                  index === activeIndex ? "text-primary" : "text-foreground/60"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => {
                  handleNavClick(e, item, index);
                  if (!item.isScroll) {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="text-sm font-semibold leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
  
        {/* Theme toggle button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
  
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-foreground/10">
            <div className="space-y-1 px-6 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    index === activeIndex ? "text-primary bg-primary/10" : "text-foreground/60 hover:bg-primary/5"
                  }`}
                  onClick={(e) => {
                    handleNavClick(e, item, index);
                    setMobileMenuOpen(false);
                    if (!item.isScroll) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile theme toggle */}
              <div className="pt-4">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full flex items-center px-3 py-2 text-base font-medium text-foreground/60 hover:bg-primary/5 rounded-md"
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-2" /> Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-2" /> Dark Mode
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}
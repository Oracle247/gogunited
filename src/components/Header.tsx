"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? "text-primary" : "text-gray-700";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            GO Green United
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`hover:text-primary ${isActive("/")}`}>
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary ${isActive("/about")}`}
            >
              About
            </Link>
            <Link
              href="/volunteer"
              className={`hover:text-primary ${isActive("/volunteer")}`}
            >
              Volunteer
            </Link>
            <Link
              href="/support"
              className={`hover:text-primary ${isActive("/support")}`}
            >
              Support
            </Link>
            <Button asChild>
              <Link href="/volunteer">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/" className={`hover:text-primary ${isActive("/")}`}>
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-primary ${isActive("/about")}`}
              >
                About
              </Link>
              <Link
                href="/volunteer"
                className={`hover:text-primary ${isActive("/volunteer")}`}
              >
                Volunteer
              </Link>
              <Link
                href="/support"
                className={`hover:text-primary ${isActive("/support")}`}
              >
                Support
              </Link>
              <Button asChild className="w-full">
                <Link href="/volunteer">Join Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;

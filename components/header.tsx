"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-zinc-900 via-acap-blue-950 to-zinc-900 text-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo_adaga.png"
              alt="Logo ACAP"
              className="h-10 w-10 rounded-full object-cover shadow-md mr-2"
            />
            <Link
              href="/"
              className="font-bold text-xl tracking-tight text-acap-gold-300"
            >
              ACAP
            </Link>
          </div>

          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-acap-blue-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/historia"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-acap-blue-900 transition-colors"
              >
                História da Chula
              </Link>
              <Link
                href="/programa-de-ensino"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-acap-blue-900 transition-colors"
              >
                Programa de Ensino
              </Link>
              <Link
                href="/nome"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-acap-blue-900 transition-colors"
              >
                Origem do Nome
              </Link>
            </nav>
          </div>

          {/* <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div> */}

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="ml-2 text-white hover:bg-acap-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-acap-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/historia"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-acap-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              História
            </Link>
            <Link
              href="/programa-de-ensino"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-acap-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programa de Ensino
            </Link>
            <Link
              href="/nome"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-acap-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Origem do Nome
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

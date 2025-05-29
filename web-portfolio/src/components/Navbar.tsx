"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-tight text-black">uzzielvdz.com</Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/works" className="text-gray-800 hover:underline">works</Link>
          <Link href="/blog" className="text-gray-800 hover:underline">blog</Link>
          <Link href="/now" className="text-gray-800 hover:underline">now</Link>
          <Link href="/contact" className="text-gray-800 hover:underline">contact</Link>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>
      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <Link href="/education" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>education</Link>
          <Link href="/works" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>works</Link>
          <Link href="/blog" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>blog</Link>
          <Link href="/now" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>now</Link>
          <Link href="/contact" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>contact</Link>
        </div>
      )}
    </nav>
  );
} 
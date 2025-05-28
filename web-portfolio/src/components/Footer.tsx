import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-end items-center border-t border-gray-100 mt-8 pr-6">
      <div className="flex space-x-4">
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-black hover:opacity-70">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
        </Link>
        <Link href="https://x.com" target="_blank" aria-label="X (Twitter)" className="text-black hover:opacity-70">
          <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M1199.61 0H944.726L599.805 505.27L254.884 0H0L492.13 704.13L0 1227H254.884L599.805 821.73L944.726 1227H1199.61L707.48 522.87L1199.61 0ZM307.5 111.5L599.805 540.5L892.11 111.5H307.5ZM307.5 1115.5L599.805 686.5L892.11 1115.5H307.5Z" fill="currentColor"/></svg>
        </Link>
        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-black hover:opacity-70">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/><path d="M8 11v5M8 8v.01" strokeWidth="2" strokeLinecap="round"/><path d="M12 16v-3a2 2 0 1 1 4 0v3" strokeWidth="2"/></svg>
        </Link>
        <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-black hover:opacity-70">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>
    </footer>
  );
} 
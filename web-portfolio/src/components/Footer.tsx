import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-between items-center border-t border-gray-100 mt-8 px-6">
      <div className="text-gray-500 text-sm">
        © 2025 Uzziel Valdez. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <Link href="https://instagram.com/tuusuario" target="_blank" aria-label="Instagram" className="text-gray-500 hover:text-gray-600 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </Link>
        <Link href="https://twitter.com/tuusuario" target="_blank" aria-label="Twitter" className="text-gray-500 hover:text-gray-600 transition-colors">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="feather feather-twitter w-4 h-4"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3c0 2.12-1.05 4.16-3.14 5.54C7.34 15.17 5.08 14.56 3 13.93c-.65 1.15-.86 2.35-.66 3.54 1 1.74 2.65 3.23 4.58 4.09A10.96 10.96 0 0 1 3 22c2.22 0 4.2-.8 5.75-2.25C14.86 19.81 20.75 15.01 20.75 10.75c0-.15-.02-.3-.03-.45A10.9 10.9 0 0 0 23 3z"></path></svg>
        </Link>
        <Link href="https://linkedin.com/in/tuusuario" target="_blank" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-600 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="feather feather-linkedin w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </Link>
        <Link href="https://github.com/tuusuario" target="_blank" aria-label="GitHub" className="text-gray-500 hover:text-gray-600 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="feather feather-github w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3s-1.05-.33-3.44 1.35a12.42 12.42 0 0 0-6.88 0C6.46 2.66 5.42 3 5.42 3S5 4.17 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22m-3.14-6c-.73 1-1.45 1.5-1.45 1.5"></path></svg>
        </Link>
      </div>
    </footer>
  );
} 
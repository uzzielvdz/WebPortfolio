import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col justify-center items-start max-w-3xl mx-auto px-4 pt-32 md:pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-left truncate max-w-full" style={{maxWidth: '90vw'}}>
          Uzziel,<br />
          <span className="text-gray-900">Software Engineer</span>
        </h1>
        <p className="text-gray-600 mb-8 text-base md:text-lg text-left w-full max-w-lg">
          Transforming ideas into functional digital experiences.
        </p>
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium shadow hover:bg-gray-800 transition-colors"
          aria-label="Descargar CV"
        >
          CV
        </Link>
      </section>
    </main>
  );
}

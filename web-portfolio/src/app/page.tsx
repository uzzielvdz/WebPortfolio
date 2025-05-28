import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";
import PostCard from "../components/PostCard";

const posts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    tags: ["Design", "Pattern"],
    excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    tags: ["Figma", "Icon Design"],
    excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* HERO ligeramente centrado pero alineado a la izquierda */}
      <section className="flex-1 flex flex-col justify-center items-start max-w-xl mx-auto pl-8 pt-24 md:pt-32 min-h-[calc(100vh-4rem)]">
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

      {/* Recent posts */}
      <section className="w-full bg-gray-50 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent posts</h2>
            <Link href="/blog" className="text-sm text-gray-500 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post, idx) => (
              <PostCard key={idx} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="w-full py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured works</h2>
          <div>
            {projects.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

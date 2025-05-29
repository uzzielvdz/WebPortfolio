import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WorkCard from "../../components/WorkCard";
import { projects } from "../../data/projects";
import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 py-8 mt-16 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Works</h1>
        <div>
          {projects.length === 0 ? (
             <div className="text-center text-gray-600 text-sm mt-10">
               <p>No hay proyectos para mostrar todavía.</p>
             </div>
          ) : (
            projects.map((project) => (
              <Link key={project.id} href={`/works/${project.id}`}>
                <WorkCard project={project} />
              </Link>
            ))
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
} 
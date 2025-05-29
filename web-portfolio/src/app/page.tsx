import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";
import PostCard from "../components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getRecentPosts(limit: number) {
  const postsDirectory = path.join(process.cwd(), 'posts');

  // Verificar si la carpeta posts existe antes de leer su contenido
  if (!fs.existsSync(postsDirectory)) {
    return []; // Retornar un array vacío si la carpeta no existe
  }

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      tags: data.tags,
      excerpt: data.excerpt,
    };
  });

  // Ordenar posts por fecha (más reciente primero)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Limitar el número de posts
  return posts.slice(0, limit);
}

export default async function Home() {
  const recentPosts = await getRecentPosts(2); // Obtener solo los 2 posts más recientes

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* HERO alineado con el logo y bloque de ancho cómodo */}
      <section className="flex-1 flex flex-col justify-center items-start max-w-6xl mx-auto px-4 pt-24 md:pt-32 min-h-[calc(100vh-4rem)]">
        <div className="max-w-xl w-full">
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
        </div>
      </section>

      {/* Recent posts */}
      <section className="w-full bg-gray-50 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent posts</h2>
            <Link href="/blog" className="text-sm text-gray-500 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentPosts.length === 0 ? (
               <div className="text-center text-gray-600 text-sm col-span-full">
                 <p>No hay publicaciones recientes todavía.</p>
               </div>
            ) : (
              recentPosts.map((post, idx) => (
                <Link key={idx} href={`/blog/${post.slug}`}>
                  <PostCard post={post} />
                </Link>
              ))
            )}
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

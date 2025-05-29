import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/data/projects";
import WorkCard from "@/components/WorkCard";
import PostCard from "@/components/PostCard";
import { getRecentPosts, Post } from "@/lib/posts";

export default async function Home() {
  const recentPosts = await getRecentPosts(2);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 py-24 mt-16 w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm Uzziel.<br />
          <span className="text-gray-600">Software Engineer</span>
        </h1>
        <p className="text-gray-700 text-xl mb-8 max-w-2xl">
          I build digital experiences with clean code and modern technologies.
        </p>
        <div className="flex gap-4">
          <a 
            href="/cv.pdf" 
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Download CV
          </a>
          <Link 
            href="/contact" 
            className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-5xl mx-auto px-8 py-16 w-full border-t border-gray-100">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a software developer passionate about creating elegant solutions to complex problems. 
            With a strong foundation in both frontend and backend development, I focus on building 
            applications that are not only functional but also provide an exceptional user experience.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto px-8 py-16 w-full border-t border-gray-100">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <ul className="text-gray-700 space-y-4">
            <li className="flex items-start">
              <span className="font-medium">Software Engineering Bachelor's Degree</span>
              <span className="mx-2">•</span>
              <span>Universidad Autónoma del Estado de México-UAEMEX</span>
              <span className="mx-2">•</span>
              <span className="text-gray-500">2023 - present</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium">Certifications</span>
              <span className="mx-2">•</span>
              <span>CS50x, CS50SQL, CS50W, Responsive Web Design - freeCodeCamp</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-8 py-16 w-full border-t border-gray-100">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Node.js'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Tailwind', 'SQL', 'Git'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              View all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.length === 0 ? (
              <div className="text-center text-gray-600 col-span-full">
                <p>No recent posts yet. Check back soon for updates.</p>
              </div>
            ) : (
              recentPosts.map((post: Post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <PostCard post={post} />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="w-full py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Works</h2>
            <Link href="/works" className="text-gray-600 hover:text-gray-900 transition-colors">
              View all works →
            </Link>
          </div>
          <div className="space-y-8">
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

import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ project }: { project: any }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center mb-1">
          <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">{project.year}</span>
          <span className="text-xs text-gray-600">{project.category}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
      </div>
      {project.githubUrl && (
        <Link href={project.githubUrl} target="_blank" aria-label="GitHub Repository" className="text-gray-500 hover:text-gray-900 ml-4">
           <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      )}
    </div>
  );
} 
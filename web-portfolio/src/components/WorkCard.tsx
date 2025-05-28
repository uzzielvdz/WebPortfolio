import Image from "next/image";

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
      <div className="ml-4">
        <div className="flex items-center mb-1">
          <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">{project.year}</span>
          <span className="text-xs text-gray-600">{project.category}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
} 
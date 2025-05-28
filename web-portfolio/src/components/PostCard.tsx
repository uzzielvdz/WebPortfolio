export default function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex flex-col h-full">
      <div className="mb-2">
        <span className="font-bold text-base text-gray-900">{post.title}</span>
      </div>
      <div className="text-xs text-gray-600 mb-2">
        {post.date} &nbsp; | &nbsp; {post.tags?.join(", ")}
      </div>
      <p className="text-gray-700 text-sm line-clamp-3 flex-1">{post.excerpt}</p>
    </div>
  );
} 
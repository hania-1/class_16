import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main>
      <div className="py-10 mx-auto grid grid-cols-1">
        <div className="text-gray-500">Latest Posts:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <Link
              className="p-4 flex flex-row items-center justify-between hover:opacity-90"
              key={post._id || index} // Fallback to index if _id is not available
              href={post.slug.current || "#"} // Fallback to "#" if slug is missing
            >
              <div>
                <h2 className="font-medium text-xl">{post.title}</h2>
                <p className="py-2 text-gray-400 text-xs font-light uppercase">
                  {convertDate(post._createdAt)} • {post.authorName || "Unknown"}
                </p>
              </div>
              {post?.mainImage && (
                <Image
                  className="w-32 object-fill rounded-lg"
                  src={post.imageURL || "/placeholder.jpg"} // Fallback to placeholder if imageURL is missing
                  alt={post.title || "Post Image"}
                  width={400}
                  height={400}
                  priority
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Posts;

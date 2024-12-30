"use client";

import { useEffect } from "react";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument | null }) => {
  useEffect(() => {
    if (post) {
      const lastViewedPost = {
        title: post.title || "Untitled Post",
        slug: post.slug?.current || "/", // Ensure slug is valid
      };
      localStorage.setItem("lastViewedPost", JSON.stringify(lastViewedPost));
    }
  }, [post]);

  // if (!post) {
  //   return (
  //     <main className="container mx-auto prose prose-xl px-4 py-16">
  //       <h1>Post not found</h1>
  //       <p>The requested post could not be loaded.</p>
  //     </main>
  //   );
  // }

  return (
    <main className="container mx-auto prose prose-xl px-4 py-16">
      {/* <h1>{post.title}</h1> */}
      {/* <p>{post.description}</p> */}
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(300).height(300).url()}
          alt={post.title}
          width={300}
          height={300}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
};

export default Post;

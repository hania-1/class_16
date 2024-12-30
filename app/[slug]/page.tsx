import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Post from "../components/Post";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,  // This should return an object with `slug`
  }));
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: params.slug },
  });

  return <Post post={post} />;
};

export default PostPage;


  return <Post post={post} />;
};

export default PostPage;

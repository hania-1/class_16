import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Post from "../components/Post";

export const revalidate = 60;

// Define the type for the params
interface PostParams {
  slug: string;
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }));
}

const PostPage = async ({ params }: { params: PostParams }) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: params.slug },
  });

  return <Post post={post} />;
};

export default PostPage;


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

// Use generateStaticParams to fetch the list of posts and their slugs
export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },  // Ensure it returns an object with `params`
  }));
}

// Define the PostPage component
const PostPage = async ({ params }: { params: PostParams }) => {
  // Fetch the post data using the slug
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: params.slug },
  });

  // Render the Post component with the fetched data
  return <Post post={post} />;
};

export default PostPage;


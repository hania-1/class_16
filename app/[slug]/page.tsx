import { SanityDocument } from "@sanity/client";
import { postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch"; // This already uses the client internally
import Post from "../components/Post";

export const revalidate = 60;

// Define the type for the params
interface PostParams {
  slug: string;
}

// Fetch the post data using the slug
const PostPage = async ({ params }: { params: PostParams }) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: params.slug }, // Use the slug to fetch the post
  });

  return <Post post={post} />;
};

export default PostPage;

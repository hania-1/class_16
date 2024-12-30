import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";
import Menu from "./components/Menu";
// import About  from "./components/About";


export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="max-w-7xl min-h-screen mx-auto px-4">
     
      <Menu />
      {/* <About /> */}
      <Posts posts={posts} />
    </main>
  );
}
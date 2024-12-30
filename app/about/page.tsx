import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="container mx-auto px-4 py-16 prose prose-xl">
      <h1>About the Blog</h1>
      <p>
        Welcome to our blog! This platform is dedicated to sharing insightful articles, tutorials, 
        and stories on a variety of topics. Whether you are here to learn something new, explore 
        different perspectives, or simply enjoy a good read, we have got you covered.
      </p>
      <p>
        Stay tuned for regular updates and feel free to reach out with any feedback or suggestions!
      </p>
      <Link href="/">Back to Home</Link>
    </main>
  );
};

export default Page;

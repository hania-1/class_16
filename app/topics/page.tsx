// app/topics/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <main className="container mx-auto px-4 py-16 prose prose-xl">
      <h1>Blog Topics</h1>
      <p>
        This blog covers a wide range of topics to keep you informed and entertained. 
        Here are the main topics you can explore:
      </p>
      <ul>
        <li> Politics<Image src="/img_0.png" alt="Politics" width={300} height={300} /></li>
        <li> Technology<Image src="/img-1.png" alt="Technology" width={300} height={300} /></li>
        <li> Lifestyle<Image src="/img_2.png" alt="Lifestyle" width={300} height={300} /></li>
        <li> Health<Image src="/img_3.png" alt="Health" width={300} height={300} /></li>
        <li> Education<Image src="/img_4.png" alt="Education" width={300} height={300} /></li>
        <li> Entertainment<Image src="/img_5.png" alt="Entertainment" width={300} height={300} /></li>
      </ul>
      <Link href="/">Back to Home</Link>

    </main>
  );
};

export default Page;

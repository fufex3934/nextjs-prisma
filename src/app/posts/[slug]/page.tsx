import Link from "next/link";
import prisma from "@/lib/db";
const PostDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where:{
    slug
  } });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts(0)</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        <li>
          <h1>{post?.title}</h1>
          <p>{post?.content}</p>
        </li>
      </ul>
    </main>
  );
};

export default PostDetails;

import Link from "next/link";
import prisma from "@/lib/db";
import { createPost } from "@/actions/actions";
const Posts = async () => {
  const user = await prisma.user.findUnique({
    where:{
      email:'fufa@gmail.com'
    },
    include:{
      posts:true
    }
  });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts({user?.posts.length})</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {user?.posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <form action={createPost}   className="flex flex-col gap-y-2 w-[300px] bg-white ">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm border"
        />

        <textarea
          className="px-2 py-1 rounded-sm border"
          name="content"
          placeholder="Content"
          rows={5}
        />
        <button
          className="bg-blue-500 text-white py-2 rounded-sm"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </main>
  );
};

export default Posts;

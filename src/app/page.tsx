import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">Welcome to my blog</h1>
      <Link className="underline" href={"/posts"}>
        View Posts
      </Link>
    </main>
  );
}

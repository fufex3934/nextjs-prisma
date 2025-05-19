"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const user = await prisma.user.findUnique({
    where: { email: "fufa@gmail.com" }, 
  });

  if (!user) {
    throw new Error("User not found");
  }
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get("content") as string,
      author:{
        connect:{
          email:user.email
        }
      }
    },
  });
  revalidatePath("/posts");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get("content") as string,
    },
  });
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  });
}

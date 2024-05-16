import { redirect } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export async function loader() {
  const count = await prisma.post.count();
  const slug = count.toString().padStart(6, "0");

  const post = await prisma.post.create({
    data: { slug: slug },
  });
  return redirect("/admin/post/edit/" + post.slug);
}

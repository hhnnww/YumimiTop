import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();
  return <>{JSON.stringify(loaderData)}</>;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const pageNum = parseInt(params?.pagenum as string);
  const onePageCount = 20;
  const postList = await prisma.post.findMany({
    skip: (pageNum - 1) * onePageCount,
    take: onePageCount,
    select: { title: true, slug: true },
  });

  return postList;
}

import { faker } from "@faker-js/faker/locale/zh_CN";
import { Box, Stack, Typography } from "@mui/material";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";
import Markdown from "react-markdown";
import { getSession } from "~/component/session";

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <>
      <Stack spacing={4} direction={"column"}>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.6rem", fontWeight: "bold" }}
        >
          {loaderData?.title}
        </Typography>

        <Box sx={{ lineHeight: 2, "&>p": { mb: 4, mt: 0 } }}>
          <Markdown>{loaderData?.content}</Markdown>
        </Box>
      </Stack>
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId")) {
    return redirect("/login");
  }

  const count = await prisma.post.count();
  const roundNumber = faker.number.int({ min: 0, max: count });
  const obj = await prisma.post.findMany({ skip: roundNumber, take: 1 });
  if (obj) {
    return obj[0];
  }
}

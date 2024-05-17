import { faker } from "@faker-js/faker/locale/zh_CN";
import { Box, Stack, Typography } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";
import Markdown from "react-markdown";

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <>
      {loaderData.map((item) => (
        <Stack spacing={4} direction={"column"} key={item.title}>
          <Typography
            variant="h1"
            sx={{ fontSize: "1.2rem", lineHeight: 1.6, fontWeight: "bold" }}
          >
            {item?.title}
          </Typography>

          <Box
            sx={{ lineHeight: 2.2, fontSize: "1rem", "&>p": { mb: 4, mt: 0 } }}
          >
            <Markdown>{item?.content}</Markdown>
          </Box>
        </Stack>
      ))}
    </>
  );
}

export async function loader() {
  const count = await prisma.post.count();
  const roundNumber = faker.number.int({ min: 0, max: count });
  const obj = await prisma.post.findMany({
    where: {},
    skip: roundNumber,
    take: 10,
  });
  return obj;
}

import { faker } from "@faker-js/faker/locale/zh_CN";
import { Box, Stack, Typography } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import Markdown from "react-markdown";

export function meta() {
  return [{ title: "hello word" }];
}

export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  return (
    <Stack spacing={4}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: ["1.6rem", "2rem"],
          lineHeight: [1.6, 1.4],
        }}
      >
        {loader_data.title}
      </Typography>

      <Stack spacing={2} sx={{ lineHeight: 1 }}>
        <Box>{loader_data.author}</Box>
        <Box>{loader_data.date}</Box>
      </Stack>

      <Box className="post">
        <Markdown>{loader_data.content}</Markdown>
      </Box>
    </Stack>
  );
}

export async function loader() {
  let content = "";
  for (let x = 0; x < 3; x++) {
    content = content + faker.lorem.paragraph(10) + "\n\n";
  }
  return {
    title: faker.lorem.sentence({ min: 10, max: 20 }),
    content: content,
    author: faker.person.fullName(),
    date: dayjs(faker.date.anytime()).format("YYYY年MM月DD日"),
  };
}

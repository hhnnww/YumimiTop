import { fakerZH_CN as faker } from "@faker-js/faker";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
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
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        {loader_data.title}
      </Typography>

      <Stack spacing={3} direction={"row"} sx={{ lineHeight: 1 }}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <AccountCircleOutlinedIcon fontSize="small" />
          <Box>{loader_data.author}</Box>
        </Stack>

        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <EventOutlinedIcon fontSize="small" />
          <Box>{loader_data.date}</Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          lineHeight: 2,
          "& > p": {
            mb: 6,
          },
        }}
      >
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
    title: faker.word.words({ count: 1 }),
    content: content,
    author: faker.person.fullName(),
    date: dayjs(faker.date.anytime()).format("YYYY年MM月DD日"),
  };
}

import { faker } from "@faker-js/faker/locale/zh_CN";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { json, useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import Markdown from "react-markdown";
export function meta() {
  return [{ title: "hello word" }];
}

export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  return (
    <>
      {loader_data.map((item, index) => (
        <>
          <Stack key={index} spacing={4}>
            <Typography
              sx={{ fontSize: "1.8rem", fontWeight: "bold", lineHeight: 1.6 }}
              variant="h1"
            >
              {item.title}
            </Typography>
            <Stack spacing={1}>
              <Box>{item.author}</Box>
              <Box>{item.date}</Box>
            </Stack>
            <Box
              sx={{
                lineHeight: 2,
                "& > p": {
                  mt: 0,
                  mb: 4,
                },
              }}
            >
              <Markdown>{item.content}</Markdown>
            </Box>
          </Stack>
          <Divider />
        </>
      ))}
    </>
  );
}

export async function loader() {
  let content = "";
  for (let x = 0; x < 2; x++) {
    content = content + faker.lorem.paragraph(10) + "\n\n";
  }

  const content_list = [] as {
    title: string;
    content: string;
    author: string;
    date: string;
  }[];
  for (let x = 0; x < 10; x++) {
    content_list.push({
      title: faker.lorem.sentence({ min: 10, max: 20 }),
      content: content,
      author: faker.person.fullName(),
      date: dayjs(faker.date.anytime()).format("YYYY年MM月DD日"),
    });
  }
  return json(content_list);
}

import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  return (
    <Box p={6}>
      <Container maxWidth={"sm"}>
        <Stack spacing={4}>
          <Typography variant="h1">hello word!</Typography>
          <TextField label="username" />
        </Stack>
      </Container>
    </Box>
  );
}

export async function loader() {
  const res = await prisma.post.create({
    data: {
      title: "text",
      content: "content",
    },
  });
  return res;
}

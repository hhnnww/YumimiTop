import { Stack, TextField, Typography } from "@mui/material";

export function meta() {
  return [{ title: "hello word" }];
}

export default function Component() {
  return (
    <Stack spacing={4}>
      <Typography variant="h1">hello word!</Typography>
      <TextField label="username" />
    </Stack>
  );
}

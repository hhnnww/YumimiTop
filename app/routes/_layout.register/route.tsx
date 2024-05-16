import { Button, Stack, TextField } from "@mui/material";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import bcrypt from "bcrypt";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  return (
    <Form method="POST">
      <Stack spacing={4} alignItems={"start"}>
        <TextField label="用户名" name="username" fullWidth type="text" />
        <TextField label="密码" name="password" fullWidth type="password" />
        <Button variant="contained" type="submit">
          注册
        </Button>
      </Stack>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const salt = await bcrypt.genSalt(10);
  const hash_password = await bcrypt.hash(password, salt);

  await prisma.user.create({
    data: {
      username,
      password: hash_password,
    },
  });

  return redirect("/login");
}

export function meta() {
  return [{ title: "注册" }];
}

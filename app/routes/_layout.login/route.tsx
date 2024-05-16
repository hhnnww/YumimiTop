import { Button, Stack, TextField } from "@mui/material";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect, useActionData } from "@remix-run/react";
import bcrypt from "bcrypt";
import { prisma } from "prisma/prisma.server";
import { commitSession, getSession } from "~/component/session";

export default function Component() {
  const action_data = useActionData<typeof action>();
  return (
    <>
      <Form method="POST">
        <Stack spacing={4} alignItems={"start"}>
          <TextField label="用户名" fullWidth name="username" />
          <TextField label="密码" fullWidth name="password" type="password" />
          <Button type="submit" variant="contained">
            登录
          </Button>

          {JSON.stringify(action_data)}
        </Stack>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const userObj = await prisma.user.findFirst({
    where: { username: username },
  });

  if (!userObj) {
    return "用户不存在";
  }

  if (userObj.status === 0) {
    return "账户未激活";
  }

  const res = await bcrypt.compare(password, userObj?.password as string);
  if (!res) {
    return "密码错误";
  }

  const session = await getSession();
  session.set("userId", username);

  return redirect("/admin", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

export function meta() {
  return [{ title: "login" }];
}

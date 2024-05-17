import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import bcrypt from "bcrypt";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  const formList = [
    { name: "username", label: "用户名", type: "text" },
    { name: "email", label: "邮箱", type: "email" },
    { name: "password", label: "密码", type: "password" },
    { name: "repassword", label: "重复密码", type: "password" },
  ];

  const actionData = useActionData<typeof action>();
  return (
    <>
      <Form method="POST">
        <Stack spacing={4} alignItems={"start"}>
          <Typography variant="h2">注册</Typography>
          {formList.map((item) => (
            <TextField required fullWidth key={item.name} {...item} />
          ))}
          <Button type="submit" variant="contained">
            注册
          </Button>

          {actionData && <Alert>{JSON.stringify(actionData)}</Alert>}
        </Stack>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const [username, email, password, repassword] = [
    formData.get("username") as string,
    formData.get("email") as string,
    formData.get("password") as string,
    formData.get("repassword") as string,
  ];

  if (password !== repassword) {
    return "两次密码不相同";
  }
  if ((await prisma.user.count({ where: { email } })) > 0) {
    return "邮箱已注册";
  }
  if ((await prisma.user.count({ where: { username } })) > 0) {
    return "用户名已注册";
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const obj = await prisma.user.create({
    data: { username, email, password: hashPassword },
  });
  if (obj) {
    return redirect("/login");
  }

  return "注册失败";
}

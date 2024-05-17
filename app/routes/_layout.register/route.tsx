import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

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
        <Stack spacing={2} alignItems={"start"}>
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

  const [username, password, repassword] = [
    formData.get("username"),
    formData.get("password"),
    formData.get("repassword"),
  ];

  return { username, password, repassword };
}

import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export default function Component() {
  const formList = [
    { name: "username", label: "用户名", type: "text" },
    { name: "password", label: "密码", type: "password" },
  ];
  const actionData = useActionData<typeof action>();
  return (
    <>
      <Form method="POST">
        <Stack direction={"column"} spacing={4} alignItems={"start"}>
          <Typography variant="h2">登录</Typography>
          {formList.map((item) => (
            <TextField key={item.name} fullWidth required {...item} />
          ))}
          <Button type="submit" variant="contained">
            登录
          </Button>

          {actionData && <Alert>{JSON.stringify(actionData)}</Alert>}
        </Stack>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const [username, password] = [
    formData.get("username"),
    formData.get("password"),
  ];

  return { username, password };
}

import { Alert, Button, Stack, TextField } from "@mui/material";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { commitSession, getSession } from "~/component/session";

export default function Component() {
  const actionData = useActionData<typeof action>();
  return (
    <>
      <Form method="POST">
        <Stack direction={"column"} spacing={2} alignItems={"start"}>
          <TextField
            label="password"
            fullWidth
            type="password"
            name="password"
          />
          <Button type="submit" variant="contained">
            提交
          </Button>

          {actionData?.msg && (
            <Alert sx={{ width: "100%" }} color="error">
              {actionData.msg}
            </Alert>
          )}
        </Stack>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const password = formData.get("password");
  console.log(password);
  if (password !== "1221") {
    return { msg: "密码错误" };
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId", "1221");
  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

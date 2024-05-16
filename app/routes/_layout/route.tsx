import { Container, Stack } from "@mui/material";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getSession } from "~/component/session";
import { LoginMenu, Logo, Menu } from "./header";

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <>
      <Container maxWidth={"md"} sx={{ p: 6 }}>
        <Stack spacing={6}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Logo />
            {!loaderData.login ? (
              <Menu />
            ) : (
              <LoginMenu username={loaderData.username} />
            )}
          </Stack>
          <Outlet />
        </Stack>
      </Container>
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return { login: true, username: session.get("userId") as string };
  }

  return { login: false, username: "" };
}

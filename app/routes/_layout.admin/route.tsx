import { Box, Stack } from "@mui/material";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getSession } from "~/component/session";
import { AdminMenu } from "./adminMenu";

export default function Component() {
  return (
    <>
      <Stack spacing={6}>
        <Box>
          <AdminMenu />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Stack>
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId")) {
    return redirect("/login");
  }
  return true;
}

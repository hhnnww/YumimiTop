import { Container, Stack } from "@mui/material";
import { Outlet } from "@remix-run/react";
import { Header } from "./header";

export default function Component() {
  return (
    <>
      <Container maxWidth={"md"} sx={{ p: 6 }}>
        <Stack spacing={6}>
          <Header />
          <Outlet />
        </Stack>
      </Container>
    </>
  );
}

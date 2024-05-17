import { Container } from "@mui/material";
import { Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <>
      <Container maxWidth="sm" sx={{ p: 6 }}>
        <Outlet />
      </Container>
    </>
  );
}

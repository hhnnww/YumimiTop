import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <>
      <Container sx={{ p: 6 }}>
        <Grid2 container spacing={6}>
          <Grid2 xs={8}>
            <Outlet />
          </Grid2>

          <Grid2 xs={4}>sidebar</Grid2>
        </Grid2>
      </Container>
    </>
  );
}

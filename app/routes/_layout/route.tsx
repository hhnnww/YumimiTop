import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Outlet } from "@remix-run/react";
import { Header } from "./header";

export default function Component() {
  return (
    <>
      <Container sx={{ p: 6 }}>
        <Grid container spacing={6}>
          <Grid xs={12}>
            <Header />
          </Grid>
          <Grid xs={8}>
            <Outlet />
          </Grid>
          <Grid xs={4}>sidebar</Grid>
        </Grid>
      </Container>
    </>
  );
}

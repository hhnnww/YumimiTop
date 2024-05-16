import { Stack, Typography } from "@mui/material";

export function Header() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo />
        <Menu />
      </Stack>
    </>
  );
}

function Logo() {
  return (
    <Typography variant="h1" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
      yumimitop
    </Typography>
  );
}

function Menu() {
  return <>menu</>;
}

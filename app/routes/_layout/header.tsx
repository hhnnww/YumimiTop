import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "@remix-run/react";

export function Logo() {
  return (
    <Link to="/">
      <Typography
        variant="h1"
        sx={{
          fontSize: ["1rem", "1.3rem"],
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        yumimitop
      </Typography>
    </Link>
  );
}

export function Menu() {
  return (
    <>
      <Button
        component={Link}
        color="inherit"
        to="/login"
        startIcon={<LoginOutlinedIcon />}
      >
        登录
      </Button>
    </>
  );
}

export function LoginMenu({ username }: { username: string }) {
  return (
    <Stack direction={"row"} spacing={1}>
      <Button
        component={Link}
        color="inherit"
        to="/admin"
        startIcon={<AccountCircleOutlinedIcon />}
      >
        {username}
      </Button>
      <Button
        component={Link}
        color="inherit"
        to="/logout"
        startIcon={<LogoutOutlinedIcon />}
      >
        登出
      </Button>
    </Stack>
  );
}

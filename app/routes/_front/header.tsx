import HomeMaxTwoToneIcon from "@mui/icons-material/HomeMaxTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import NoteTwoToneIcon from "@mui/icons-material/NoteTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import SettingsBrightnessTwoToneIcon from "@mui/icons-material/SettingsBrightnessTwoTone";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link as MLink,
  Stack,
  type SxProps,
  type Theme,
  Toolbar,
  useColorScheme,
} from "@mui/material";
import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

const sx: SxProps<Theme> = (theme) => ({
  minWidth: ["220px", "auto"],
  justifyContent: "flex-start",
  px: 2,
  opacity: 0.6,
  "&.active": {
    // background: theme.palette.primary.main,
    color: theme.palette.primary.main,
    opacity: 1,
    svg: {
      opacity: 1,
    },
    ":hover": {
      opacity: 0.8,
    },
  },
  ":hover": {
    opacity: 0.8,
  },
  svg: {
    opacity: 0.4,
  },
});

const headerMenuList = [
  { name: "首页", link: "/", icon: <HomeMaxTwoToneIcon fontSize="small" /> },
  { name: "行程", link: "/post", icon: <NoteTwoToneIcon fontSize="small" /> },
  {
    name: "关于我们",
    link: "/about-me",
    icon: <PeopleAltTwoToneIcon fontSize="small" />,
  },
];

export const Header = () => {
  return (
    <>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar disableGutters>
          <Container sx={{ maxWidth: ["100%"] }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <HeaderLogo />

              <Box
                sx={() => ({
                  display: ["none", "block"],
                })}
              >
                <HeaderMenuMD />
              </Box>

              <Box sx={{ display: ["block", "none"] }}>
                <HeaderMenuXS />
              </Box>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

const HeaderLogo = () => {
  return (
    <MLink
      sx={{ textDecoration: "none", fontWeight: "bold" }}
      color={"inherit"}
      component={Link}
      to="/"
    >
      YUMIMITOP
    </MLink>
  );
};

// 中屏菜单
const HeaderMenuMD = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      {headerMenuList.map((item) => (
        <Button
          key={item.name}
          component={NavLink}
          to={item.link}
          color="inherit"
          sx={sx}
          startIcon={item.icon}
        >
          {item.name}
        </Button>
      ))}
      <SelectMode />
    </Stack>
  );
};

// 小屏模式菜单
const HeaderMenuXS = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack spacing={1} p={2} alignItems={"start"}>
          {headerMenuList.map((item) => (
            <Button
              key={item.name}
              component={NavLink}
              to={item.link}
              color="inherit"
              sx={sx}
              startIcon={item.icon}
            >
              {item.name}
            </Button>
          ))}
          <SelectMode />
        </Stack>
      </Drawer>
    </>
  );
};

// 切换模式
const SelectMode = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      color="inherit"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={sx}
      startIcon={<SettingsBrightnessTwoToneIcon />}
    >
      切换模式
    </Button>
  );
};

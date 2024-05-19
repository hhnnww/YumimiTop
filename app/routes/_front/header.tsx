import HomeMaxTwoToneIcon from "@mui/icons-material/HomeMaxTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import NoteTwoToneIcon from "@mui/icons-material/NoteTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Link as MLink,
  Stack,
  Toolbar,
  useColorScheme,
} from "@mui/material";
import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import { theme } from "~/theme/theme";

const headerMenuList = [
  { name: "home", link: "/", icon: <HomeMaxTwoToneIcon fontSize="small" /> },
  { name: "tours", link: "/post", icon: <NoteTwoToneIcon fontSize="small" /> },
  {
    name: "about me",
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

              <Box sx={{ display: ["none", "block"] }}>
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
  const { mode, setMode } = useColorScheme();

  return (
    <Stack direction={"row"} spacing={2}>
      {headerMenuList.map((item) => (
        <Button
          key={item.name}
          component={NavLink}
          to={item.link}
          color="inherit"
          sx={{
            px: 2,
            opacity: 0.6,
            "&.active": {
              background: theme.vars.palette.primary.main,
              color: "#FFF",
              opacity: 1,
              ":hover": {
                opacity: 1,
              },
            },
            ":hover": {
              opacity: 0.8,
            },
            svg: {
              opacity: 0.6,
            },
          }}
          startIcon={item.icon}
        >
          {item.name}
        </Button>
      ))}
      <Button
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }}
      >
        setMode
      </Button>
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
        <List subheader={<ListSubheader>菜单</ListSubheader>}>
          {headerMenuList.map((item) => (
            <ListItem disablePadding disableGutters key={item.name}>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "auto", pr: 2 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={{ minWidth: 200 }} primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

export const Header = () => {
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar disableGutters>
          <Box px={[1, 3]} sx={{ width: "100%" }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <HeaderLogo />

              <Box sx={{ display: ["none", "block"] }}>
                <HeaderMenuMD />
              </Box>

              <Box sx={{ display: ["block", "none"] }}>
                <HeaderMenuXS />
              </Box>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

const HeaderLogo = () => {
  return (
    <Button
      variant="text"
      color="inherit"
      disableRipple
      sx={{
        ":hover": { backgroundColor: "transparent" },
        fontWeight: "bold ",
      }}
    >
      YUMIMITOP
    </Button>
  );
};

const HeaderMenuMD = () => {
  const headerMenuList = ["home", "post", "about me"];
  return (
    <Stack direction={"row"}>
      {headerMenuList.map((item) => (
        <Button key={item} color="inherit">
          {item}
        </Button>
      ))}
    </Stack>
  );
};

const HeaderMenuXS = () => {
  const headerMenuList = ["home", "post", "about me"];
  const [open, setOpen] = useState(false);

  const draw = (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <List>
        {headerMenuList.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
      {draw}
    </>
  );
};

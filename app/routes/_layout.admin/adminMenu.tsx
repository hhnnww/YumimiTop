import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { Button, Stack } from "@mui/material";
import { Link } from "@remix-run/react";

export function AdminMenu() {
  return (
    <Stack direction={"row"}>
      <AdminMenuItem
        name="发表新文章"
        link="/admin/post/new"
        icon={<NoteAddOutlinedIcon />}
      />
    </Stack>
  );
}

export function AdminMenuItem({
  name,
  link,
  icon,
}: {
  name: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <Button color="inherit" component={Link} to={link} startIcon={icon}>
      {name}
    </Button>
  );
}

import { Link as MLink } from "@mui/material";
import { Link } from "@remix-run/react";

export function YMLink({
  children,
  to,
  sx,
}: {
  children: JSX.Element | string;
  to: string;
  sx: object;
}) {
  return (
    <MLink component={Link} to={to} sx={sx}>
      {children}
    </MLink>
  );
}

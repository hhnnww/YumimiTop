import { Outlet } from "@remix-run/react";
import { Header } from "./header";

export default function Component() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

"use client";

import Sidebar from "./index";
import { usePathname } from "next/navigation";

export default function SidebarContainer() {
  const pathname = usePathname();
  const ShouldRender = !["/login", "/register"].includes(pathname);

  if (!ShouldRender) return null;
  return <Sidebar />;
}

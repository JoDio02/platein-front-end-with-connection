"use client";

import Sidebar from "./index";
import { usePathname } from "next/navigation";

export default function SidebarContainer() {
  const pathname = usePathname();
  const ShouldRender = !pathname.startsWith("/register") && !pathname.startsWith("/login");

  if (!ShouldRender) return null;
  return <Sidebar />;
}

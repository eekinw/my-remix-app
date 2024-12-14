import {
  BookOpenCheck,
  BookA,
  Heart,
  Settings,
  LogIn,
  LogOut,
} from "lucide-react";
import { ModeToggle } from "../components/mode-toggle";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "My Reads",
    url: "/reads",
    icon: BookOpenCheck,
  },
  {
    title: "Dictionary",
    url: "/dictionary",
    icon: BookA,
  },
  {
    title: "Anki",
    url: "/anki",
    icon: Heart,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>What To Do Today?</SidebarGroupLabel>
          <SidebarGroupContent className="mt-3">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-2 mb-5">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <ModeToggle />
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/login">
                  <LogIn />
                  <span>Login</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/logout">
                  <LogOut />
                  <span>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

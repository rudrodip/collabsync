import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Workspaces",
      href: "/workspaces",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/workspaces/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
  workspaceNav: [
    {
      title: "Workspaces",
      href: "/workspaces",
      icon: "post",
    },
    {
      title: "Studio",
      href: "/studio",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/workspaces/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ]
}
import {
  Home,
  Funnel,
  Lead,
  Segment,
  Workflow,
  Integration,
  Setting,
} from "~/assets/icons";

export const menuItems = [
  {
    name: "Overview",
    path: "/overview",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Funnels",
    path: "/funnels",
    icon: <Funnel className="h-5 w-5" />,
  },
  {
    name: "Leads",
    path: "/leads",
    icon: <Lead className="h-5 w-5" />,
  },
  {
    name: "Segments",
    path: "/segments",
    icon: <Segment className="h-5 w-5" />,
  },
  {
    name: "Workflows",
    path: "/workflows",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    name: "Integrations",
    path: "/integrations",
    icon: <Integration className="h-5 w-5" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Setting className="h-5 w-5" />,
  },
];

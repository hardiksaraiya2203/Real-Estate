import { lazy } from "react";
import Loadable from "app/components/Loadable";

const LeadData = Loadable(lazy(() => import("../leads/Lead")));

const leadRoutes = [
    { path: "/leads/default", element: <LeadData /> },
  ];
export default leadRoutes;
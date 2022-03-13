import AuthView from "../views/auth/AuthView";
import Homepage from "../views/Homepage/Homepage";
import MainView from "../views/MainView";
import Card from "../components/Card";
import RoadMap from "../components/RoadMap";
import Team from "../components/Team";

let routes = [
  {
    path: "/auth",
    component: AuthView,
    layout: "auth",
  },
  {
    path: "/",
    component: Homepage,
    layout: "main",
  },
  {
    path: "/homepage",
    component: Homepage,
    layout: "main",
  },
  {
    path: "/about",
    component: Card,
    layout: "main",
  },
  {
    path: "/roadmap",
    component: RoadMap,
    layout: "main",
  },
  {
    path: "/team",
    component: Team,
    layout: "main",
  },
];
export default routes;

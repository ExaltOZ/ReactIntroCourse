import TestBoard from "views/TestBoard.jsx";

// to adjust icon parameters
import { FiActivity } from "react-icons/fi";

var routes = [
  {
    path: "/TestBoard",
    name: "TestBoard",
    icon: FiActivity,
    component: TestBoard,
  },
];
export default routes;

import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

const iconClasses = `h-6 w-6`;

const routes = [
  {
    path: "/",
    icon: <HomeIcon className={iconClasses} />,
    name: "Home",
  },
  {
    path: "/products",
    icon: <BoltIcon className={iconClasses} />,
    name: "Products",
  },
  {
    path: "/about",
    icon: <InformationCircleIcon className={iconClasses} />,
    name: "About us",
  },
];

export default routes;

import { BiLogOut } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";

const sellerRoutes = [
  {
    id: 1,
    title: "My Products",
    route: "/dashboard/my-products",
    icon: <MdOutlineInventory2 className="text-xl" />,
  },
  {
    id: 1,
    title: "Add Products",
    route: "/dashboard/add-products",
    icon: <IoMdAddCircleOutline className="text-xl" />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  const {LogOut} = useAuth()

  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
      <h1 className="text-3xl  font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="btn btn-outline">
          <GrOverview className="text-xl" />
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </li>
        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li key={route.id} className="btn btn-outline">
              {route.icon}
              <NavLink to={route.route}> {route.title}</NavLink>
            </li>
          ))}
        <li className="btn btn-outline">
          <IoHomeOutline className="text-xl" />
          <NavLink to="/dashboard"> Home</NavLink>
        </li>
        <li className="btn btn-outline" onClick={()=> LogOut()}>
          <BiLogOut className="text-xl" />
          <button >Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

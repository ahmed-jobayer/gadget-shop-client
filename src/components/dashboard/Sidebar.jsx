import { BiLogOut } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
            <h1 className="text-3xl  font-bold mb-8">Gadget Shop</h1>
            <ul className="flex flex-col gap-2">
                <li className="btn btn-outline">
                <GrOverview className="text-xl" /> 
                <NavLink to='/dashboard/overview'>Overview</NavLink>
                </li >
                <li className="btn btn-outline">
                <IoHomeOutline className="text-xl"  />
                    <NavLink to='/dashboard'> Home</NavLink>
                </li>
                <li className="btn btn-outline">
                <BiLogOut  className="text-xl" />
                    <button>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
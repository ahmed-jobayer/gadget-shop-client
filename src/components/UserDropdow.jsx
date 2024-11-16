import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserDropdow = () => {

    const {user, LogOut} = useAuth()

    const handleLogOut = () => {
        LogOut()
    }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-full ">
            <img src={`${user?.photoUrl || "/user.png"}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2"
      >
        <li>
          <Link to='/dashboard/overview'>Dashboard</Link>
        </li>
        <li>
            <button onClick={handleLogOut} className="btn btn-primary btn-outline btn-sm">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdow;

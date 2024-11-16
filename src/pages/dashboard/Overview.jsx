import useAuth from "../../hooks/useAuth";

const Overview = () => {

    const {user} = useAuth()

    return (
        <div>
            <h3>{user.email}</h3>
        </div>
    );
};

export default Overview;
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { GoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="mt-6">
      <div className="divider">OR</div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary btn-outline w-full"
        >
          <FcGoogle className="text-3xl" /> Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;

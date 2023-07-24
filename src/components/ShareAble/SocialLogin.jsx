import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
       
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const savedUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          profilePhoto: loggedInUser.photoURL,
        };

        fetch("https://academic-avenue-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Welcome to Academic Avenue");
            }
          });
          navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Toaster />
      <button
        onClick={handleGoogleLogin}
        className="text-xl btn btn-outline hover:scale-110 duration-500 hover:shadow-2xl"
      >
        {" "}
        <FcGoogle className="inline" /> Continue with Google
      </button>
    </>
  );
};

export default SocialLogin;

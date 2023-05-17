import { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleSubmit = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;

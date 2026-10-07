import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
  //  EMPTY VALIDATION
  if (!email || !password) {
    alert("Please, Enter user details");
    return;
  }
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (!storedUser) {
    alert("No user found. Please register first.");
    return;
  }
  if (email === storedUser.email && password === storedUser.password) {
    alert("Login Successful ✅");
    navigate("/home");
  } else {
    alert("Invalid email or password ❌");
  }
};
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="auth-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="auth-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-btn" onClick={handleLogin}>
        Login
      </button>
      <p className="auth-link">
        Don’t have an account?
      </p>
      <Link to="/register" className="register-link">
        Register
      </Link>
    </div>
  );
}
export default Login;

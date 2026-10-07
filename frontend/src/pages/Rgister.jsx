import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
  //  EMPTY VALIDATION
  if (!name || !email || !password) {
    alert("Please, Enter user details");
    return;
  }
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registered Successfully ✅");
  navigate("/login");
};
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
export default Register;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "../../Firebase/firebaseConfig";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        createdAt: new Date(),
      });

      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username..." 
          value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your email..." 
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password" 
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="registerButton" type="submit">Register</button>
      </form>

      {error && <p className="error">{error}</p>}

      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  );
}

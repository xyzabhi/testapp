import { FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import "./login.css";
export default function Login() {
  return (
    <div className="main-box">
      <div className="login-box">
        <div className="login-header">Login</div>
        <div className="login-input-box">
          <div className="login-input">
            <FaUserAlt size="1.3rem" color="#666666" />

            <input type="text" placeholder="11111" />
          </div>
          <div className="login-input">
            <HiLockClosed size="1.6rem" color="#666666" />
            <input type="password" placeholder="*******" />
          </div>
          <div className="submit-btn">
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

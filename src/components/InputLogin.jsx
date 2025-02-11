import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function InputLogin({ onLogin }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function handleSubmitLogin(event) {
    event.preventDefault();
    onLogin({ email, password });
  }

  return (
    <form onSubmit={handleSubmitLogin} className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}

InputLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default InputLogin;

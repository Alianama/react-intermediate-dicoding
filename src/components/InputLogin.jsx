import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";

function InputLogin({ onLogin }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  function handleSubmitLogin(event) {
    event.preventDefault();
    onLogin({ email, password });
  }

  return (
    <form onSubmit={handleSubmitLogin} className="input-login">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />

      <button className="login-btn" type="submit">
        {locale === "id" ? "Masuk" : "Login"}
      </button>
    </form>
  );
}

InputLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default InputLogin;

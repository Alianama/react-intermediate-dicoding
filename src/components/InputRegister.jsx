import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import LocaleContext from "../context/LocaleContext";

function InputRegister({ onRegister }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const [error, setError] = useState("");
  const { locale } = useContext(LocaleContext);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError(
        locale === "id" ? "Passssword tidak sama" : "Passwords do not match!"
      );
      return false;
    }
    setError("");
    return true;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!validatePassword()) return;
    onRegister({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        autoComplete="current-password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="login-btn" type="submit">
        {locale === "id" ? "Mendaftar" : "Register"}
      </button>
    </form>
  );
}

InputRegister.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default InputRegister;

import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
function InputRegister({ onRegister }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();

    onRegister({ name, email, password });
  }

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input
        type="text"
        placeholder="Nama"
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
      <button>Register</button>
    </form>
  );
}

InputRegister.prototype = {
  onRegister: PropTypes.func.isRequired,
};

export default InputRegister;

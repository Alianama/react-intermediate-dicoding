import React, { useContext } from "react";
import InputLogin from "../components/InputLogin";
import { login } from "../utils/network-data";
import LocaleContext from "../context/LocaleContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Login({ loginSuccess }) {
  const { locale } = useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <section>
      <h2>
        {locale === "id"
          ? "Silakan masuk untuk melanjutkan"
          : "Log in to continue"}
      </h2>

      <InputLogin onLogin={onLogin} />
      <p>
        {locale === "id" ? "Belum Punya akun?" : "Not Have Account?"}
        <Link to="/register">
          {locale === "id" ? "Daftar Disini !" : "Register Here !"}
        </Link>
      </p>
    </section>
  );
}

Login.prototype = {
  loginSuccess: PropTypes.func.isRequired,
};

export default Login;

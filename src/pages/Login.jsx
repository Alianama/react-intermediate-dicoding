import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <section className="login-page">
      <div className="login-wrapper">
        <h2>
          {locale === "id" ? "Selamat datang Kembali  !" : "Welcome Back !"}
        </h2>

        <InputLogin onLogin={onLogin} />
        <p>
          {locale === "id" ? "Belum Punya akun? " : "Not Have Account? "}
          <Link to="/register">
            {locale === "id" ? "Daftar Disini!" : "Register Here!"}
          </Link>
        </p>
      </div>
    </section>
  );
}

Login.prototype = {
  loginSuccess: PropTypes.func.isRequired,
};

export default Login;

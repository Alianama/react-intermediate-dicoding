import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/InputRegister";
import { register } from "../utils/network-data";
import LocaleContext from "../context/LocaleContext";

function Register() {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    console.log(error);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="login-page">
      <div className="login-wrapper">
        <h2>{locale === "id" ? "Silahkan Mendaftar!" : "Register Here"}</h2>
        <InputRegister onRegister={onRegisterHandler} />
        <p>
          {locale === "id" ? "Sudah Punya Akun? " : "Have Account?"}
          <Link to="/">
            {locale === "id" ? " Masuk Disini!" : " Login Here!"}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;

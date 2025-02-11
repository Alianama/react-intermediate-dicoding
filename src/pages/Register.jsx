import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/InputRegister";
import { register } from "../utils/network-data";

function Register() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    console.log(error);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Gak perlu serius-serius ya isinya ...</h2>
      <InputRegister onRegister={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}

export default Register;

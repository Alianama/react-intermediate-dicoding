import React from "react";
import InputLogin from "../components/InputLogin";



export default function Login() {
  return (
    <div>
      <InputLogin onLogin={onLogin} />
    </div>
  );
}

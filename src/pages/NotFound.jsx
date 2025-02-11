import React, { useContext, useEffect } from "react";
import LocaleContext from "../context/LocaleContext";

function NotFoundPage() {
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <div className="no-data">
      <h1>
        {locale === "id" ? "404 halaman Tidak Ditemukan" : "404 Page Not Found"}
      </h1>
    </div>
  );
}

export default NotFoundPage;

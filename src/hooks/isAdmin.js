import { useState, useEffect } from "react";
import CONFIG from "@src/config";

const isAdmin = token => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    function checkUser(value) {
      if (!value) {
        return setAdmin(false);
      }

      const response = localStorage.getItem(CONFIG.API_TOKEN_NAME)
        ? JSON.parse(localStorage.getItem(CONFIG.API_TOKEN_NAME))
        : false;

      if (
        !!response &&
        !!Object.keys(response).length &&
        response.token &&
        response.username &&
        response.id
      ) {
        return setAdmin(response);
      }

      setAdmin(false);
    }

    checkUser(token);

    return () => checkUser(false);
  }, [token]);

  return admin;
};

export default isAdmin;

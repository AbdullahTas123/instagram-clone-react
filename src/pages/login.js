import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, [])
  

  return (
    <p>login</p>
  )
}

export default login;
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";


const login = () => {
  const history = useNavigate();
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
    <div className="container flex max-w-screen-md font-bold mx-auto items-center h-screen">
      <div className="flex w-3/5">
        <img src="images/instagram-iphone-icon.jpg" alt="iphone" />
      </div>
      <div className="flex flex-col w-2/5">
        <p>The Form Area</p>
      </div>
    </div>
  )
}

export default login;
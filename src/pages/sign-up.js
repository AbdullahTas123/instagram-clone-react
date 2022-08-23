import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (e) => {
    e.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    console.log("usernameExists: ", usernameExists);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // emailAddress & password & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username 
        });

        // firebase user collection (create a document)
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now()
        });
        
        navigate(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("That username is already used. please try another.");

    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  }, [])
  
  return (
    <div className="container flex max-w-screen-md font-bold mx-auto items-center h-screen">
      <div className="flex w-3/5 justify-center">
        <img src="images/instagram-iphone-icon.jpg" alt="iphone" className="w-4/5"/>
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex w-full justify-center">
            <img src="images/Instagram-Logo.png" alt="instagram logo" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className=" mb-4 text-xs text-red-primary"> {error} </p>}
          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username" 
              type="text"
              placeholder="Username"
              className=" text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name" 
              type="text"
              placeholder="Full Name"
              className=" text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your amail address" 
              type="text"
              placeholder="Email Address"
              className=" text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password" 
              type="password"
              placeholder="Password"
              className=" text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>
                Sign Up
            </button>
          </form>
        </div>
        <div className=" flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
          <p className=" text-sm">Have an account?{``}
            <Link to={ROUTES.LOGIN} className=" font-bold text-blue-medium ml-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/app.css";


const Login = lazy(() => import ("./pages/login")); // gerektiğinde yüklenecek
const Signup = lazy(() => import ("./pages/sign-up")); // gerektiğinde yüklenecek
const NotFound = lazy(() => import ("./pages/not-found")); // gerektiğinde yüklenecek


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>} >
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

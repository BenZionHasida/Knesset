// dependecies
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
// layots
import RootLayot from "./layots/RootLayot";
import ConnectionLayot from "./layots/ConnectionLayot";
// components
import LoginForm, { loginAction } from "./components/LoginForm";
import RegistrationForm, {
  registerAction,
} from "./components/RegistrationForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayot />}>
        <Route path="connection-area" element={<ConnectionLayot />}>
          <Route
            path="login"
            element={<LoginForm />}
            action={loginAction}
          ></Route>
          <Route
            path="register"
            element={<RegistrationForm />}
            action={registerAction}
          ></Route>
          <Route
            path="postRegister"
            element={<h1 style={{ color: "white" }}>post direct</h1>}
          ></Route>
        </Route>
        <Route
          path="core"
          element={<h1 style={{ color: "white" }}>the core of web site</h1>}
        ></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

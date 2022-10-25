import * as React from "react";
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";
import { loginUser, registerUser } from "../hooks/useAjax";
import FromRow from "./FromRow";
import { useAuth } from "../hooks/useAuth";
// import { AuthContext } from "../hooks/useAuth";

// export async function action({ request }) {
//   // const { login } = useAuth();
//   // const {} = useContext(AuthContext);
//   const formData = await request.formData();
//   const user = Object.fromEntries(formData);

//   await loginUser(user);
//   return redirect(`/`);
// }

export default function LoginPage() {
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = Object.fromEntries(data);
    // console.log(user);
    const userdata = await loginUser(user);

    // console.log(userdata);
    login({
      id: userdata.id,
      username: userdata.username,
      email: userdata.email,
      password: user.password,
      role: userdata.role,
    });
  };

  return (
    <div>
      Log In
      <form onSubmit={handleSubmit}>
        <FromRow
          label="User Name"
          name="username"
          type="text"
          aria-label="User Name"
          placeholder="User Name"
          required
        />
        <FromRow
          label="Password"
          name="password"
          type="password"
          aria-label="Password"
          placeholder="Password"
          required
        />
        <button type="submit" className="btn btn-primary m-3">
          Log in
        </button>

        <Link to="/register">{"Don't have an account? Sign Up"}</Link>
      </form>
    </div>
  );
}

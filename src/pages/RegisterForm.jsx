import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { registerUser } from "../hooks/useAjax";
import FromRow from "./FromRow";

export async function action({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);
  await registerUser(user);
  return redirect(`/`);
}

export default function RegisterForm() {
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      {/* <div className="form-control"> */}
      <FromRow
        label="E-mail"
        name="email"
        type="email"
        aria-label=""
        placeholder=""
        required
      />
      <FromRow
        label="Password"
        name="password"
        type="password"
        aria-label=""
        placeholder=""
        required
      />
      <FromRow
        label="Comfirm Password"
        name="comfirmPassword"
        type="password"
        aria-label=""
        placeholder=""
        required
      />
      <FromRow
        label="Username"
        name="username"
        type="text"
        aria-label=""
        placeholder=""
        required
      />
      {/* </div> */}

      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary m-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </button>
    </Form>
  );
}

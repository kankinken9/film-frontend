import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import FromRow from "./FromRow";
import FromRowNoRed from "./FromRowNoRed";
import { filmAdd } from "../hooks/useAjax";
import { useAuth } from "../hooks/useAuth";

export default function ArticlesAddForm() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const film = Object.fromEntries(data);
    // console.log(user);
    const resp = await filmAdd(film, user.id, user);
    if (resp.status >= 200 && resp.status < 300) {
      navigate(`/`);
    }
  };

  return (
    <Form method="post" id="contact-form" onSubmit={handleSubmit}>
      <FromRow label="Title" name="title" type="text" required />
      <FromRowNoRed label="All text" name="allText" type="text" />
      <FromRowNoRed label="Summary" name="summary" type="text" />
      <FromRowNoRed label="imageurl" name="imageurl" type="text" />

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

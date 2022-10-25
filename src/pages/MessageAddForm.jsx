import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import FromRow from "./FromRow";
import FromRowNoRed from "./FromRowNoRed";
import { messageAdd, getFilm } from "../hooks/useAjax";
import { useAuth } from "../hooks/useAuth";

export default function MessageAddForm() {
  const navigate = useNavigate();
  const filmdata = useLoaderData();

  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const Messagedata = Object.fromEntries(data);
    // console.log(user);
    const resp = await messageAdd(user, Messagedata);
    if (resp.status >= 200 && resp.status < 300) {
      // navigate(`/`);
      navigate(`/member/message`);
    }
  };

  return (
    <Form method="post" id="contact-form" onSubmit={handleSubmit}>
      <FromRowNoRed
        label="Message"
        name="msg"
        type="msg"
        // required
      />
      {/* <FromRowNoRed label="All text" name="allText" type="text" />
      <FromRowNoRed label="Summary" name="summary" type="text" />
      <FromRowNoRed label="imageurl" name="imageurl" type="text" /> */}
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

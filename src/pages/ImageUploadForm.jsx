import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import FromRow from "./FromRow";
import FromRowNoRed from "./FromRowNoRed";
import { imageAdd } from "../hooks/useAjax";
import { useAuth } from "../hooks/useAuth";

export default function ImageUploadAddForm() {
  const navigate = useNavigate();
  const filmdata = useLoaderData();

  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ImageUploaddata = Object.fromEntries(data);
    // console.log(user);
    const resp = await imageAdd(user, ImageUploaddata);
    console.log(resp);
    if (resp.status >= 200 && resp.status < 300) {
      // navigate(`/`);
      navigate(`/`);
    }
  };

  return (
    <form
      method="post"
      id="contact-form"
      enctype="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <label htmlFor="img">Select image:</label>
      <input type="file" id="img" name="image" accept="image/*" />

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
    </form>
  );
}

import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import FromRow from "./FromRow";
import FromRowNoRed from "./FromRowNoRed";
import { getFilm, filmEdit, filmDelete } from "../hooks/useAjax";
import { useAuth } from "../hooks/useAuth";

export function loader({ params }) {
  return getFilm(params.filmmId);
}

export default function ArticlesEditForm() {
  const navigate = useNavigate();
  const filmdata = useLoaderData();
  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const film = Object.fromEntries(data);
    // console.log(user);
    const resp = await filmEdit(filmdata.id, film, user.id, user);
    console.log(resp);
    if (resp.status >= 200 && resp.status < 300) {
      navigate(`/`);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const resp = await filmDelete(filmdata.id, user);
    if (resp.status >= 200 && resp.status < 300) {
      navigate(`/`);
    }
  };

  return (
    <Form method="post" id="contact-form" onSubmit={handleSubmit}>
      <FromRow
        label="Title"
        name="title"
        type="text"
        defaultValue={filmdata.title}
        required
      />
      <FromRowNoRed
        label="All text"
        name="allText"
        type="text"
        defaultValue={filmdata.alltext}
      />
      <FromRowNoRed
        label="Summary"
        name="summary"
        type="text"
        defaultValue={filmdata.summary}
      />
      <FromRowNoRed
        label="imageurl"
        name="imageurl"
        type="text"
        defaultValue={filmdata.imageurl}
      />
      <div className="mb-3 row">
        <label htmlFor="stated" className="col-sm-3 col-form-label">
          State :
        </label>
        <div className="col-sm-9">
          <select
            className="form-select"
            name="stated"
            id="stated"
            defaultValue={filmdata.stated}
          >
            <option value="available">available</option>
            <option value="pending">pending</option>
            <option value="offline">offline</option>
          </select>
        </div>
      </div>

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
      <button
        type="button"
        className="btn btn-danger m-3"
        onClick={handleDelete}
      >
        Delete
      </button>
    </Form>
  );
}

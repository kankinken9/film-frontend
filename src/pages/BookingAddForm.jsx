import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import FromRow from "./FromRow";
import FromRowNoRed from "./FromRowNoRed";
import { bookingAdd, getFilm } from "../hooks/useAjax";
import { useAuth } from "../hooks/useAuth";

export default function BookingAddForm() {
  const navigate = useNavigate();
  const filmdata = useLoaderData();

  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const Bookingdata = Object.fromEntries(data);
    // console.log(user);
    const resp = await bookingAdd(filmdata.id, user.id, user, Bookingdata);
    if (resp.status >= 200 && resp.status < 300) {
      navigate(`/`);
    }
  };

  return (
    <Form method="post" id="contact-form" onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label">Film Title :</label>
        <div className="col-sm-9">
          <label className="col-sm-3 col-form-label">{filmdata.title}</label>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label">Film All Text :</label>
        <div className="col-sm-9">
          <label className="col-sm-3 col-form-label">{filmdata.alltext}</label>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label">Film Summary :</label>
        <div className="col-sm-9">
          <label className="col-sm-3 col-form-label">{filmdata.summary}</label>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label">Booking Date :</label>
        <div className="col-sm-9">
          <label className="col-sm-3 col-form-label">7</label>
        </div>
      </div>

      <FromRowNoRed
        label="Description"
        name="description"
        type="description"
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

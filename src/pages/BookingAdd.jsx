import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { filmAdd } from "../hooks/useAjax";
// import { useAuth as dd } from "../hooks/useAuth";

import BookingForm from "./BookingAddForm";

export default function BookingAdd() {
  return (
    <div>
      <h1>Film online Application </h1>
      <BookingForm />
    </div>
  );
}

import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { filmAdd } from "../hooks/useAjax";
// import { useAuth as dd } from "../hooks/useAuth";

import MessageForm from "./MessageAddForm";

export default function MessageAdd() {
  return (
    <div>
      <h1>Message Add</h1>
      <MessageForm />
    </div>
  );
}

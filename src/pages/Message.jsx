import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { filmAdd } from "../hooks/useAjax";
// import { useAuth as dd } from "../hooks/useAuth";

import MessagePost from "./MessagePost";

export default function Message() {
  return (
    <div>
      <h1>Message</h1>
      <MessagePost />
    </div>
  );
}

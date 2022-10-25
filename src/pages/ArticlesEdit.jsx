import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { filmEdit } from "../hooks/useAjax";
// import { useAuth as dd } from "../hooks/useAuth";

import ArticlesForm from "./ArticlesEditForm";

export default function ArticlesEdit() {
  return (
    <div>
      <h1>Edit Film </h1>
      <ArticlesForm />
    </div>
  );
}

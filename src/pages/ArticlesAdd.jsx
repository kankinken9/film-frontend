import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { filmAdd } from "../hooks/useAjax";
// import { useAuth as dd } from "../hooks/useAuth";

import ArticlesForm from "./ArticlesAddForm";

export default function ArticlesAdd() {
  return (
    <div>
      <h1>New Film </h1>
      <ArticlesForm />
    </div>
  );
}

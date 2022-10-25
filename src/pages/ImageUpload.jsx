import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { filmAdd } from "../hooks/useAjax";
// import { useAuth as dd } from "../hooks/useAuth";

import MessageForm from "./ImageUploadForm";

export default function ImageUpload() {
  return (
    <div>
      <h1>Image Upload</h1>
      <MessageForm />
    </div>
  );
}

import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";

export default function ProtectedLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();
  // console.log(useAuth());

  if (!user) {
    return <Navigate to="/" />;
  }
  // else if (user.role === "staff") {
  //   return <Navigate to="/staff" />;
  // }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Home", path: "home" },
          { label: "Application", path: "application" },
          { label: "Message", path: "message" },
          { label: "Image", path: "imageupload" },
        ]}
      />
      {/* {console.log(user)} */}
      <main className="main container">{outlet}</main>
    </div>
  );
}

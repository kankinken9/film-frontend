import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";

// export const HomeLayout = () => {
export default function HomeLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/member/home" replace />;
  }

  return (
    <>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          // { label: "Message", path: "/message" },
          { label: "Login", path: "/login" },
          { label: "Register", path: "/register" },
        ]}
      />
      <main className="main container">{outlet}</main>
    </>
  );
}

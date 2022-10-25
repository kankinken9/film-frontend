import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import ApplicationPage from "./pages/Application";
// import { loader as applonLoader } from "./pages/ApplicationPost";
import { loader as homeLoader } from "./pages/HomePost";
import RegisterPage from "./pages/Register";
import { action as regAction, } from "./pages/RegisterForm";


import ArticlesAdd from "./pages/ArticlesAdd";
import ArticlesEdit from "./pages/ArticlesEdit";
import BookingAdd from "./pages/BookingAdd";
import MessageAdd from "./pages/MessageAdd";
import Message from "./pages/Message";
import ImageUpload from "./pages/ImageUpload";

import { loader as filmEditLoad } from "./pages/ArticlesEditForm";
// import SettingsPage from "./pages/Settings";
import ProtectedLayout from "./components/ProtectedLayout";
import HomeLayout from "./components/HomeLayout";
// import "./styles.css";

export default function App() {
  const router = [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true, element: <HomePage />,
          loader: homeLoader,
        },
        { path: "login", element: <LoginPage />, },
        {
          path: "register", element: <RegisterPage />,
          action: regAction,
        },
      ],
    },

    {
      path: "/member",
      element: <ProtectedLayout />,
      children: [
        {
          path: "home", element: <HomePage />,
          loader: homeLoader,
        },
        { path: "film", element: <ArticlesAdd />, },
        {
          path: "booking/:filmmId", element: <BookingAdd />,
          loader: filmEditLoad,
        },
        {
          path: "filmedit/:filmmId", element: <ArticlesEdit />,
          loader: filmEditLoad,
        },

        { path: "application", element: <ApplicationPage />, },

        { path: "message", element: <Message />, },

        { path: "messageadd", element: <MessageAdd />, },
        { path: "imageupload", element: <ImageUpload />, },

      ],
    },
  ];

  return router
}
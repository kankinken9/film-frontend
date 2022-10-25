import { Link, redirect, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { updateApplication } from "../hooks/useAjax";

export default function ApplicationPostCard({ carddata }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const update = async (event) => {
    // event.preventDefault();
    // console.log(event.target.value);

    updateApplication(carddata.id, user, event.target.value).then((data) => {
      if (data.status >= 200 && data.status < 300) {
        console.log(data);
        // navigate(`/member/application/#`);
        navigate(`/member/home`);
        // redirect("/member/application/#");
        // <Navigate to="/" replace />;
      }
    });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={carddata.imageurl}
        className="card-img-top"
        // alt={carddata.alltext}
      />
      <div className="card-body">
        <h5 className="card-title">{carddata.atitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          progresses : {carddata.stated}
        </h6>
        <p className="card-text">{carddata.description}</p>
        {!!user && user.role === "staff" && carddata.stated == "new" && (
          <button className="btn btn-warning" value="pending" onClick={update}>
            To pending
          </button>
        )}
        {!!user && user.role === "staff" && carddata.stated == "pending" && (
          <>
            <button
              className="btn btn-success"
              value="accepted"
              onClick={update}
            >
              Accepted
            </button>
            <button
              className="btn btn-danger"
              value="rejected"
              onClick={update}
            >
              Rejected
            </button>
          </>
        )}
      </div>
    </div>
  );
}

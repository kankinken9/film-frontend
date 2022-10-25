import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePostCard({ carddata }) {
  const { user } = useAuth();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={carddata.imageurl}
        className="card-img-top"
        // alt={carddata.alltext}
      />
      <div className="card-body">
        <h5 className="card-title">{carddata.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{carddata.stated}</h6>

        <p className="card-text">{carddata.alltext}</p>
        <p className="card-text">{carddata.summary}</p>
        {carddata.stated === "available" ? (
          <Link
            className="card-link btn btn-primary"
            to={!!user ? `/member/booking/${carddata.id}` : "login"}
          >
            Booking Now
          </Link>
        ) : null}
        {!!user && user.role === "staff" && (
          <Link className="card-link" to={`/member/filmedit/${carddata.id}`}>
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}

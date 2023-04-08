import { Link } from "react-router-dom";

export const StudentCard = ({ Poster, name, green_card, batch,id }) => {
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img src={Poster} className="student-image" width={"100%"}></img>
      <h2 className="student-name">{name}</h2>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <Link to={`/student/${id}`}>
        <button className="student-detail">View Details</button>
      </Link>
    </div>
  );
};

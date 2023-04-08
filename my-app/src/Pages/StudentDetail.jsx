import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {
  let { students } = useSelector((state) => state.studentReducer);
  const [data, setdata] = useState({});
  let value = useParams();
  useEffect(() => {
    let obj = students.find((el) => el.id == value.id);
    setdata(obj);
  });
  return (
    <div className={"student-card"}>
      <h3 className="student-id">{data.id}</h3>
      <img
        src={data.Poster}
        className="student-image"
        height={"200px"}
        width={"200px"}
      ></img>
      <h3 className="student-name">Name: {data.name}</h3>
      <p className="student-batch">Batch{data.batch}</p>
      <p className="student-code">Code: {data.student_code}</p>
      <p className="student-score">Score: {data.score}</p>
      <h3 className="student-green-card">Bounty: {data.green_card}</h3>
    </div>
  );
};

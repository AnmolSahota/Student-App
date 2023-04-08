import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getstudentData } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  let { students } = useSelector((state) => state.studentReducer);
  let dispatch = useDispatch();
  let [searchparam, setsearchparam] = useSearchParams();
  let location = useLocation();
  useEffect(() => {
    let obj = {
      _page: searchparam.get("page")||1,
      _limit: 10,
    };
    searchparam.getAll("batch") && (obj.batch = searchparam.getAll("batch"));
    dispatch(getstudentData(obj));
  }, [location.search]);
  return (
    <div>
      <div
        data-testid="student-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "10px",
        }}
      >
        {/* Map through the student list using StudentCard component  */}
        {students.length > 0 &&
          students.map((el) => {
            return <StudentCard key={el.id} {...el} />;
          })}
      </div>
    </div>
  );
};

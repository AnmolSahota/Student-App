import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  let [searchparam, setsearchparam] = useSearchParams();
  let [data, setdata] = useState(searchparam.getAll("batch") || []);
  const [count, setcount] = useState(+searchparam.get("page") || 1);
  let handleChange = (e) => {
    if (data.includes(e.target.value)) {
      setdata(data.filter((el) => el != e.target.value));
    } else {
      setdata([...data, e.target.value]);
    }
  };

  useEffect(() => {
    let param = { batch: data };
    count && (param.page = count);
    setsearchparam(param);
  }, [data, count]);
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input
          data-testid="batch-web101"
          type="checkbox"
          value="WEB101"
          onChange={handleChange}
          checked={searchparam.getAll("batch").includes("WEB101")}
        />
        <label>WEB-101</label>
        <br />
        <br />
        <input
          data-testid="batch-js201"
          type="checkbox"
          value={"JS201"}
          onChange={handleChange}
          checked={searchparam.getAll("batch").includes("JS201")}
        />
        <label>JS-201</label>
        <br />
        <br />
        <input
          data-testid="batch-rct101"
          type="checkbox"
          value={"RCT101"}
          onChange={handleChange}
          checked={searchparam.getAll("batch").includes("RCT101")}
        />
        <label>RCT101</label>
        <br />
        <br />
        <input
          data-testid="batch-rct211"
          type="checkbox"
          value={"RCT211"}
          onChange={handleChange}
          checked={searchparam.getAll("batch").includes("RCT211")}
        />
        <label>RCT211</label>
        <br />
        <br />
        <input
          data-testid="batch-nxm101"
          type="checkbox"
          value={"NXM101"}
          onChange={handleChange}
          checked={searchparam.getAll("batch").includes("NXM101")}
        />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev" onClick={() => setcount(count - 1)}>
          Previous
        </button>
        <button data-testid="page-next" onClick={() => setcount(count + 1)}>
          Next
        </button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;

import React, { useState } from "react";
import moment from "moment";

const Home = ({}) => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; // today == moment()   입니다.

  return (
    <>
      <div className="moment">
        <button
          className="prev"
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          ◀︎
        </button>
        <span className="printMoment">{today.format("YYYY 년 MM 월")}</span>

        <button
          className="next"
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          ▶︎
        </button>
      </div>
    </>
  );
};

export default Home;

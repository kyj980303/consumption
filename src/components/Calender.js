import moment from "moment";
import React, { useState } from "react";

const Calender = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  return (
    <div className="moment">
      <button
        className="prev"
        onClick={() => {
          setMoment(getMoment.clone().subtract(1, "month"));
        }}
      >
        ◀︎
      </button>
      <span className="printMoment">{today.format("YYYY년 MM월")}</span>
      <button
        className="next"
        onClick={() => {
          setMoment(getMoment.clone().add(1, "month"));
        }}
      >
        ▶︎
      </button>
    </div>
  );
};

export default Calender;

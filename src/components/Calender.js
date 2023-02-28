import moment, { months } from "moment";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Calender = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  console.log(today);
  const history = useHistory();

  const prev = () => {
    setMoment(getMoment.clone().subtract(1, "month"));
    let moment = Number(today.format("MM") - 1);
    if (moment === 0) {
      moment = 12;
    }
    history.push({
      pathname: "/recode",
      state: {
        moment: moment,
      },
    });
  };

  const next = () => {
    setMoment(getMoment.clone().add(1, "month"));
    let moment = Number(today.format("MM")) + 1;
    if (moment === 13) {
      moment = 1;
    }
    history.push({
      pathname: "/recode",
      state: {
        moment: moment,
      },
    });
  };

  return (
    <div className="moment">
      <button className="prev" onClick={prev}>
        ◀︎
      </button>
      <span className="printMoment" id={Number(today.format("MM"))}>
        {today.format("YYYY년 MM월")}
      </span>
      <button className="next" onClick={next}>
        ▶︎
      </button>
    </div>
  );
};

export default Calender;

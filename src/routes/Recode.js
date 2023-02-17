import SetRecode from "components/SetRecode";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Recode = ({ userObj }) => {
  const history = useHistory();
  const location = useLocation();

  let budget = location.state.budget;
  let key = Math.random();

  const onClick = () => {
    history.push({
      pathname: "/recodeForm",
      state: {
        budget: budget,
        userObj: userObj.uid,
        key: key,
      },
    });
  };
  return (
    <>
      <div className="set">
        <div className="myBudgets2">
          <p className="myBudget">나의 예산</p>
          <p className="myBudget">{budget} 원</p>
        </div>
        <div className="myBudgets">
          <p className="myBudget">사용한 금액</p>
          <p className="myBudget">0 원</p>
        </div>
      </div>

      <div className="recode">
        <p className="recodeP">
          기록하기
          <span>
            <img src="img/plus.png" onClick={onClick} />
          </span>
        </p>

        <div className="bar"></div>
      </div>
      <SetRecode userObj={userObj} budget={budget} />
    </>
  );
};
export default Recode;

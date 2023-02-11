import React, { useState } from "react";
import moment from "moment";
import { dbService } from "fbase";
import { useHistory } from "react-router-dom";
import Recode from "./Recode";

const Home = ({ userObj, refreshUser }) => {
  const [budget, setBudget] = useState(""); // 예산

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setBudget(value);
  };

  const history = useHistory();
  const onSubmit = async (event) => {
    event.preventDefault();
    const nowDate = moment().format("YYYYMMDD");

    const budgetObj = {
      budget: budget,
      createdAt: nowDate,
      userId: userObj.uid,
      userName: userObj.displayName,
    };

    await dbService.collection("budget").add(budgetObj);
    setBudget("");
    history.push({
      pathname: "/recode",
      state: {
        budget: budget,
        createdAt: nowDate,
        userId: userObj.uid,
        userName: userObj.displayName,
      },
    });
    console.log(budgetObj);
  };

  return (
    <>
      <div className="budget">
        <p className="name">{userObj.displayName}님, 안녕하세요 : )</p>
        <p className="money">한 달동안 사용하실 예상 금액을 </p>
        <p className="money2">입력해주세요 !</p>
        <form onSubmit={onSubmit}>
          <input
            className="moneyInput"
            type="number"
            value={budget}
            onChange={onChange}
          />
          <button className="budgetBtn">예산 등록하기</button>
        </form>
      </div>
    </>
  );
};

export default Home;

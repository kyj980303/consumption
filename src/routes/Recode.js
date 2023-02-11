import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Recode = ({ userObj }) => {
  const location = useLocation();
  let budget = location.state.budget;
  return (
    <>
      <div className="myBudgets2">
        <p className="myBudget">나의 예산</p>
        <p className="myBudget">{budget} 원</p>
      </div>
      <div className="myBudgets">
        <p className="myBudget">사용한 금액</p>
        <p className="myBudget">0 원</p>
      </div>
    </>
  );
};
export default Recode;

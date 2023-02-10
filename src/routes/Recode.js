import React from "react";
import { dbService } from "fbase";
import { useEffect, useState } from "react";

const Recode = ({ userObj, refreshUser }) => {
  let ddd;
  const getBudget = async () => {
    const budget = await dbService
      .collection("budget")
      .where("userId", "==", userObj.uid) // 쿼리 조건문(where 여러개 할 수 있다.)
      .get();
    let budgetObj = budget.docs.map((doc) => doc.data());
    ddd = budgetObj[0].budget;
    console.log(ddd);
  };
  useEffect(() => {
    getBudget();
  });
  return <p>{ddd}</p>;
};

export default Recode;

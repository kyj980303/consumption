import { dbService } from "\bfbase";
import SetRecode from "components/SetRecode";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Recode = ({ userObj }) => {
  const history = useHistory();
  const location = useLocation();
  const [recodes, setRecodes] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const recodes = await dbService.collection("recode").get();
      let recodesData = recodes.docs.map((doc) => doc.data());
      setRecodes(recodesData);
    };
    fetchData();
  }, []);

  // 총 쓴 금액 구하기
  let sum = 0;
  for (let i = 0; i < recodes.length; i++) {
    sum += Number(recodes[i].money);
  }

  // 예산에서 사용한 금액 빼기
  let budget = location.state.budget;
  let remainder = budget - sum;

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
          <p className="myBudget">{remainder} 원</p>
        </div>
        <div className="myBudgets">
          <p className="myBudget">사용한 금액</p>
          <p className="myBudget">{sum} 원</p>
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

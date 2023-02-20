import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const List = ({ recodeObj, userObj, budget }) => {
  let history = useHistory();
  const location = useLocation();

  // 캘린더가 가리키는 월
  let moment = location.state.moment;

  if (moment === undefined) {
    let now = new Date();
    moment = Number(now.getMonth() + 1);
  }
  console.log("캘린더" + moment);

  // 등록된 기록의 월
  let monthSplit = recodeObj.selectDay.split(".");
  let month = Number(monthSplit[1]);
  console.log("기록" + month);

  const onClick = (event) => {
    event.preventDefault();
    let div = event.target.parentElement;
    let recodeId = div.id;
    console.log(recodeId);
    history.push({
      pathname: "/detail",
      state: {
        recodeObj: recodeObj,
        budget: budget,
      },
    });
  };

  return (
    // 로그인한 사람과 작성한 사람이 같다면 리스트를 보여주게 함
    // React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다.
    // 리액트 라이브러리는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다.
    // 따라서 불필요한 리렌더링을 방지하기 위해서는 각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.
    <div className="recodeList" onClick={onClick} id={recodeObj.key}>
      {recodeObj.createId === userObj.uid && moment === month && (
        <div className="list" id={recodeObj.key}>
          <span>{recodeObj.selectDay}</span>
          <span>{recodeObj.contents}</span>
          <span>{recodeObj.money}원</span>
        </div>
      )}
    </div>
  );
};
export default List;

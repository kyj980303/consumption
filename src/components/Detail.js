import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { dbService } from "\bfbase";

const Detail = () => {
  const location = useLocation();
  const history = useHistory();
  let recodeObj = location.state.recodeObj;

  const [startDate, setStartDate] = useState(new Date());
  const [newMoney, setNewMoney] = useState(recodeObj.money);
  const [newContents, setNewContents] = useState(recodeObj.contents);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");
    await dbService.doc(`recode/${recodeObj.id}`).update({
      money: newMoney,
      contents: newContents,
    });
    let budget = location.state.budget;

    history.push({
      pathname: "/recode",
      state: {
        budget: budget,
      },
    });
  };

  const onChangeMoney = (event) => {
    const {
      target: { value },
    } = event;
    setNewMoney(value);
  };

  const onChangeContents = (event) => {
    const {
      target: { value },
    } = event;
    setNewContents(value);
  };

  return (
    <>
      <form className="recodeForm " onSubmit={onSubmit}>
        <p>날짜를 선택해주세요 .</p>
        <DatePicker
          className="dateInput"
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <div>
          <p>사용하신 금액을 입력해주세요 .</p>
          <input
            className="dateInputUpdate"
            type="number"
            value={newMoney}
            onChange={onChangeMoney}
          />
          <p>사용 내역을 입력해주세요 .</p>
          <textarea
            className="useTxtUpdate"
            value={newContents}
            onChange={onChangeContents}
          />
        </div>
        <button className="budgetBtn" type="submit">
          수정하기
        </button>
      </form>
    </>
  );
};
export default Detail;

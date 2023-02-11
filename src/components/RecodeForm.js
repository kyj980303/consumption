import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const RecodeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <form className="recodeForm">
        <p>날짜를 선택해주세요 .</p>
        <DatePicker
          className="dateInput"
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <p>사용하신 금액을 입력해주세요 .</p>
        <input className="dateInput" type="number" placeholder="사용한 금액" />
        <p>사용 내역을 입력해주세요 .</p>
        <textarea className="useTxt" placeholder="사용 내역"></textarea>
        <button className="budgetBtn">등록하기</button>
      </form>
    </>
  );
};

export default RecodeForm;

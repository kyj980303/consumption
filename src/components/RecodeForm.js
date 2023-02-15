import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { dbService } from "\bfbase";
import { useHistory, useLocation } from "react-router-dom";

const RecodeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [money, setMoney] = useState("");
  const [contents, setContents] = useState("");
  const history = useHistory();
  const location = useLocation();

  // recodeObj에 작성자를 등록하기 위함
  let createId = location.state.userObj;
  // console.log("createId=========================" + createId);

  // 선택한 년/월/일
  let year = startDate.getFullYear();
  let month = startDate.getMonth() + 1;
  let day = startDate.getDate();

  // 월과 날짜가 한자리라면 앞에 0 붙이기
  const addZero = (date) => {
    if (date < 10) {
      const zeroDate = ("00" + date).slice(-2);
      return zeroDate;
    }
    return date;
  };

  // 선택된 날
  let selectDay =
    String(year) +
    addZero(String(month).slice(-2)) +
    addZero(String(day).slice(-2));

  const onSubmit = async (event) => {
    event.preventDefault();

    // 기록하기로 지출내역 등록하면 저장될 객체
    let key = Math.random();
    const recodeObj = {
      money: money,
      contents: contents,
      selectDay: selectDay,
      createId: createId,
      key: key,
    };

    console.log(recodeObj);
    await dbService.collection("recode").add(recodeObj);
    setContents("");

    // 기존에 담았던 budget을 함께 보낸다.
    let budget = location.state.budget;
    history.push({
      pathname: "/recode",
      state: {
        budget: budget,
        money: money,
        contents: contents,
        selectDay: selectDay,
        createId: createId,
        key: key,
      },
    });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setMoney(value);
  };

  const onChangeContenst = (event) => {
    const {
      target: { value },
    } = event;
    setContents(value);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="recodeForm">
        <p>날짜를 선택해주세요 .</p>
        <DatePicker
          className="dateInput"
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <p>사용하신 금액을 입력해주세요 .</p>
        <input
          className="dateInput"
          type="number"
          placeholder="사용한 금액"
          value={money}
          onChange={onChange}
        />
        <p>사용 내역을 입력해주세요 .</p>
        <textarea
          className="useTxt"
          placeholder="사용 내역"
          value={contents}
          onChange={onChangeContenst}
        ></textarea>
        <button className="budgetBtn">등록하기</button>
      </form>
    </>
  );
};

export default RecodeForm;

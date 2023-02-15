import { dbService } from "\bfbase";
import React from "react";
import { useEffect, useState } from "react";

const SetRecode = ({ userObj, createId, key }) => {
  const [recodes, setRecodes] = useState([]);
  console.log("로그인한 사람" + userObj.uid);
  console.log("작성자" + createId);

  useEffect(() => {
    async function fetchData() {
      const recodes = await dbService.collection("recode").get();
      let a = recodes.docs.map((doc) => doc.data());
      setRecodes(a);
    }
    fetchData();
  }, []);

  console.log(recodes);
  console.log("key" + key);
  // 로그인한 사람과 작성한 사람이 같다면 리스트를 보여주게 함
  const recodeList = recodes.map((recode) => (
    <div className="recodeList">
      {recode.createId === userObj.uid && (
        <div key={key}>
          {recode.selectDay} {recode.contents} {recode.money}
        </div>
      )}
    </div>
  ));
  return <div>{recodeList}</div>;
};
export default SetRecode;

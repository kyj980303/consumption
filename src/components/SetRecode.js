import { dbService } from "\bfbase";
import React from "react";
import { useEffect, useState } from "react";
import List from "components/List";

const SetRecode = ({ userObj, budget }) => {
  const [recodes, setRecodes] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const recodes = await dbService.collection("recode").get();
      let recodesData = recodes.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecodes(recodesData);
    };
    fetchData();
  }, []);

  console.log(recodes);

  return (
    <div className="recodes">
      {recodes.map((recode) => (
        <List
          key={recode.id}
          recodeObj={recode}
          userObj={userObj}
          budget={budget}
        />
      ))}
    </div>
  );
};
export default SetRecode;

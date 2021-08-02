import React, { useEffect } from "react";

const HistorySample = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    //push 특정경로로 이동
    history.push("/");
  };
  // const replaceToHome = () => {
  //   history.replace("/");
  // };
  useEffect(() => {
    // 페이지 이탈방지
    const unblock = history.block("정말 떠나실 거에용?");
    return () => {
      //언마운트 되기 전 호출
      //컴포넌트가 DOM 상에서 제거되기 직전 호출.
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      {/* <button onClick={replaceToHome}>홈홈 </button> */}
    </div>
  );
};

export default HistorySample;

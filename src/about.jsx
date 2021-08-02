import React from "react";
import qs from "qs";

const About = ({ location }) => {
  //쿼리 조회 할 경우 location.search
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초 실습해보는 예제 프로젝트</p>
      {detail && <p>detail 값이 true 입니다!</p>}
    </div>
  );
};

export default About;

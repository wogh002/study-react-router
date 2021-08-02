import React from "react";
import Profile from "./profile";
import { NavLink, Route } from "react-router-dom";
const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/jaeho"
            activeStyle={{ background: "black", color: "white" }}
          >
            park jaeho
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: "black", color: "white" }}
          >
            homer
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      {/*사용자로 부터 받아온 url 파라미터 값을 읽어 올 경우 */}
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;

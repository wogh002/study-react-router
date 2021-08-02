import { Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Profiles from "./profiles";
import HistorySample from "./historySample";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        {/* Route와 연결된 컴포넌트는 props로 location,match,history 사용 가능 */}
        <Route
          render={({ location }) => (
            <div>
              <h2>Page not found</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

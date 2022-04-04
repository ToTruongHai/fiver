import { Router, Switch } from "react-router-dom";
import ModalHOC from "./pages/HOC/ModalHOC";
import Home from "./pages/Home/Home";
import Join from "./pages/Join/Join";
import { HomeTemplate } from "./templates/homeTemplate";
import { history } from "./util/setting";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/home"} component={Home} />

        {/* Default Page */}
        <HomeTemplate path={"/"} component={Home} />
      </Switch>
      <ModalHOC />
    </Router>
  );
}

export default App;

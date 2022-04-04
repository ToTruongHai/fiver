import { Router, Switch } from "react-router-dom";
import ModalHOC from "./pages/HOC/ModalHOC";
import Home from "./pages/home/home";
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

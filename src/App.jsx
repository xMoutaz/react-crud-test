import "./App.css";
import Users from "./Users";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AttachSkill from './Attach-Skills/AttachSkill';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <h3>Platform Users</h3>
            <Users />
          </div>
        </Route>
        <Route path="/attach-skill/:id">
         <AttachSkill/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

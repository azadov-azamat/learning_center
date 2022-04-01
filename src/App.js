import {Route, Switch} from "react-router-dom";
import HomePage from "./component/pages/HomePage";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
        </Switch>
    );
}

export default App;

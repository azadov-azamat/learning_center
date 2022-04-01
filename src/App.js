import {Route, Switch} from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import Register from "./component/pages/Register";
import LoginJs from "./component/pages/LoginJs";
import ActiveCourses from "./component/pages/ActiveCourses";
import AdminPage from "./component/pages/AdminPage";
import MentorPage from "./component/pages/MentorPage";
import OperatorPage from "./component/pages/OperatorPage";
import NotFound from "./component/pages/NotFound";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/signIn' component={LoginJs}/>
            <Route path='/signUp' component={Register}/>
            <Route path='/activeCourses' component={ActiveCourses}/>
            <Route path='/adminPage' component={AdminPage}/>
            <Route path='/mentorPage' component={MentorPage}/>
            <Route path='/operatorPage' component={OperatorPage}/>
            <Route component={NotFound}/>
        </Switch>
    );
}

export default App;

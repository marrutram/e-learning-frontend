import React, { useContext } from "react";
import { BrowserRouter, Route, Switch,Redirect, useLocation, Link } from "react-router-dom";
import { globalC } from "./context";

//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Charts from "./pages/Charts";
import Home from "./pages/Home"
import Course from "./pages/course";
import CourseDetail from "./pages/course/detail";

const PrivateRoute = (props) => {
    const location = useLocation();
    const { authLogin } = useContext(globalC);

    if (authLogin === undefined) {
        return null;
    }

    return authLogin ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: "/",
                state: { from: location }
            }}
        />
    );
};

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute path="/signup" component={SignUp} />
            <PrivateRoute path="/charts" component={Charts} />
            <PrivateRoute exact path="/course" component={Course} />
            <PrivateRoute exact path="/course/:name/:id" component={CourseDetail} />

        </Switch>
    </BrowserRouter>
);

export default Routes;

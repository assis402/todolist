import { BrowserRouter, Route, Switch } from "react-router-dom"
import Todo from "../todo/todo"
import Home from "../home/home"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/app" exact>
                    <Todo/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import './App.css';
import Register from './components/auth/register';
import Login from './components/auth/login';
import home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
 <BrowserRouter> 
        {/* <Navbar /> */}
          <Switch> 
            {/* <Route path={"/"}    component={Login} exact/> */}
            <Route path={"/login"}   component={Login} exact/> 
            <Route path={"/register"} component={Register} exact/>
           
            <Route  path={"/"} component={Home}  exact />
        <Route path="/movie/:id" component={MovieDetails} />
            {/* <Route path={"*"}    component={NotFound} exact/> */}
          </Switch>
        </BrowserRouter>

    </div>
   
  );
}

export default App;

import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/login';
import home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';
import Favorites from './components/pages/Favorites';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // v5 syntax


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
 <BrowserRouter> 
        {/* <Navbar /> */}
          <Switch> 
            <Route path={"/login"}   component={Login} exact/> 
            <Route path={"/register"} component={Register} exact/>
           
            <Route  path={"/"} component={Home}  exact />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/favorites" component={Favorites } />
        <Route path="/movie/:id" component={<div>Movie Details Page</div>} /> 
          </Switch>
        </BrowserRouter>

    </div>
   
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router ,Route,Switch,Redirect} from "react-router-dom";
import NavBar  from './Components/NavBar';
import DersSecim from './Pages/DersSecim';
import Login from './Pages/Login';





function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          
          <Route  exact path='/Login' component={Login} />
          <Route  exact path='/DersSecim' component={DersSecim}/>
          <Redirect to="/" />
        </Switch>
           
      </Router>   
        
      
     
      
      
      
    </div>
  );
}


export default App;

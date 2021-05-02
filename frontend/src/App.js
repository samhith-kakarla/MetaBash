import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'; 

// PAGES
import { Home } from './pages/Home.jsx'; 
import { JoinRoom } from './pages/JoinRoom.jsx'; 
import { CreateRoom } from './pages/CreateRoom.jsx'; 
import { BashRoom } from './pages/BashRoom.jsx'; 

// CONTEXT
import { BashContextProvider } from './context/BashContext'; 

function App() {
  return (
    <BashContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/join" component={JoinRoom} />
            <Route exact path="/create" component={CreateRoom} />
            <Route exact path="/bash" component={BashRoom} />
          </Switch>
        </div>
      </Router>
    </BashContextProvider>
  );
}

export default App;

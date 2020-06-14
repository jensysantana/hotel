import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LayoutDashboard from './dashboard-views/layout/layout';
import './App.css';
// import ListItem from './dashboard-views/Components/ListItem/ListItem';
// import ContentTheme from './dashboard-views/Components/ContentTheme/ContentTheme';
// import BreadCrump from './dashboard-views/Components/BreadCrump/BreadCrump';
// import ThemePunchBanner from './dashboard-views/Components/ThemePunchBanner/ThemePunchBanner';
{/* <ThemePunchBanner /> */}
{/* <ListItem />
<BreadCrump />
<ContentTheme /> */}
function App() {
  return (
    <div className="wrapper">
      <Router basename="/dashboard">
        <Switch>
          <Route component={LayoutDashboard}/>
      
        </Switch>
      </Router>
    </div>
  );
} 

export default App;

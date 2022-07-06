import './styles/App.scss';
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import NavHorizontal from "./components/NavHorizontal";
import NavVertical from "./components/NavVertical";


/**
 * Function App returns the dashboard page
 * Div app-content contains navigation vertical and dashboard components
 * dashboard contains all the graphics and user datas
 * @returns Sportsee's interface
 */
function App() {
  //declare userId (defaut set to 12)
  const [userId, setUserId] = useState(12);

  return (
    <div className="App">
      <NavHorizontal currentUser={[userId, setUserId]} />
      <div className="app-content">
        <NavVertical />
        <Dashboard userId={userId} />
      </div>
    </div>
  );
}

export default App;

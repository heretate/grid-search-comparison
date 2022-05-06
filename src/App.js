import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Chart from "./components/mainContent/Chart";

import "./app.css"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="chartWrapper">
          <Chart/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

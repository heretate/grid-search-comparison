import GridChart from "./charts/gridchart/GridChart";
import GridNavBar from "./charts/gridchart/GridNavBar";

import "./chart.css";

export default function Chart() {
    return (
      <div className="chart">
        <GridNavBar/>
        <GridChart/>
      </div>
    )
  }
  
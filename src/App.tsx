import "./App.css";
import { LineChart } from "./components/LineChart";
import { BarChart } from "./components/BarChart";

function App() {
  return (
    <div className="App">
      <h1>Line Chart</h1>
      <LineChart />
      <h1>Bar Chart</h1>
      <BarChart />
    </div>
  );
}

export default App;

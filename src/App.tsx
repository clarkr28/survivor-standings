import "./App.css";
import StandingsChart from "./components/standingsChart/standingsChart";
import UglyTable from "./components/uglyTable/uglyTable";
import { getStandings } from "./data/calcs";

const standings = getStandings("ZakFriends");

function App() {
  return (
    <>
      <h1>Ugly Standings</h1>
      <UglyTable standings={standings} />
      <StandingsChart standings={standings} />
    </>
  );
}

export default App;

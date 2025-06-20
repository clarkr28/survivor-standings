import "./App.css";
import { getCurrentStandings } from "./data/calcs";

const standings = getCurrentStandings("ZakFriends");

function App() {
  return (
    <>
      <h1>Ugly Standings</h1>
      <div>
        {standings.map((ps) => (
          <p key={ps.name}>{`${ps.name}: ${ps.score}`}</p>
        ))}
      </div>
    </>
  );
}

export default App;

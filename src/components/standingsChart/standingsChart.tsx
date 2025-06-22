import { LineChart } from "@mui/x-charts/LineChart";
import type { PlayerResults } from "../../data/calcs";

export default function StandingsChart(props: { standings: PlayerResults[] }) {
  if (props.standings.length === 0) {
    return null;
  }

  return (
    <LineChart
      height={300}
      series={props.standings.map((s) => {
        return { data: s.weeklyScore, label: s.name, type: "line" };
      })}
      yAxis={[{ width: 50 }]}
    />
  );
}

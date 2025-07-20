import { BarChart, type BarItem, type BarLabelContext } from "@mui/x-charts";
import type { PlayerResults } from "../../data/calcs";

export default function CurrentStandingsChart(props: { standings: PlayerResults[] }) {
  const { standings } = props;

  const barData = standings.map((s) => s.weeklyScore[s.weeklyScore.length - 1]);
  const barLabels = standings.map((s) => s.name);

  return (
    <BarChart
      yAxis={[{ data: barLabels, position: "none" }]}
      series={[{ data: barData, type: "bar" }]}
      layout="horizontal"
      barLabel={(item: BarItem) => barLabels[item.dataIndex]}
      height={50 * standings.length}
    />
  );
}

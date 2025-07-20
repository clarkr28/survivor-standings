import type { PlayerResults } from "../../data/calcs";

export default function FullSeasonTable(props: { standings: PlayerResults[] }) {
  return (
    <table>
      <tbody>
        {props.standings.map((ps) => (
          <tr>
            <th scope="row">{ps.name}</th>
            {ps.weeklyScore.map((s) => (
              <td>{s}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

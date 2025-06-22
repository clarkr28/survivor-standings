import type { PlayerResults } from "../../data/calcs";

export default function UglyTable(props: { standings: PlayerResults[] }) {
  return (
    <>
      <h2>Ugly Table</h2>
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
    </>
  );
}

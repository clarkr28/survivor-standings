import "./App.css";
import StandingsChart from "./components/standingsChart/standingsChart";
import FullSeasonTable from "./components/fullSeasonTable/fullSeasonTable";
import { getStandings } from "./data/calcs";
import CurrentStandingsChart from "./components/currentStandingsChart/currentStandingsChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Header } from "./components/header/header";
import { ContentWidthBox } from "./components/contentWidthBox/contentWidthBox";

const standings = getStandings("ZakFriends");

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  cssVariables: true,
  typography: {
    h1: { fontSize: 30 },
    h2: { fontSize: 30 },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <ContentWidthBox>
        <Typography variant="h2">Season Totals</Typography>
        <CurrentStandingsChart standings={standings} />
        <Typography variant="h2">Weekly Scores</Typography>
        <StandingsChart standings={standings} />
        <FullSeasonTable standings={standings} />
      </ContentWidthBox>
    </ThemeProvider>
  );
}

export default App;

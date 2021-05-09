import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Main } from "./Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F384B",
      light: "#585f6f",
      dark: "#202734",
    },
    secondary: {
      main: "#05EC8C",
      light: "#37efa3",
      dark: "#03a562",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
});
const useStyles = makeStyles({
  flex: {
    justifyContent: "center",
  },
  margin: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "2rem 0 5rem 0",
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.flex}>
          <Typography color="secondary" variant="h5" component="h1">
            Pomodorochi
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Main classes={classes.margin} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const App = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div className="dashboardDiv">
            <div>
              <IconButton aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
            <div>
              <h1>
                The King's Restuarant
              </h1>
            </div>
            <div>
              <IconButton aria-label="home">
                <HomeIcon /> Dashboard
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="home">
                <QuestionMarkIcon /> FAQ
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="dashboardDiv"></div>
        </Grid>
      </Grid>
    </>
  );
};

export default App;

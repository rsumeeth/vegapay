import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
        <Stack spacing={2}>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "right" }}>
            Alpha User
          </Typography>
          <Typography variant="p" style={{ textAlign: "right", color: "grey" }}>
            Date.now
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedKit,
  selectedPersonalizedSale,
  selectedReissue,
} from "../../Redux/KitSlice";

export default function NewCardSale() {
  const count = useSelector((state) => state.kitSlice.value);
  const dispatch = useDispatch();
  const boxStyle = {
    border: "1px solid #eceff3",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#eceff3",
    },
  };
  function x() {
    dispatch(selectedKit());
  }
  function y() {
    dispatch(selectedPersonalizedSale());
  }
  function z() {
    dispatch(selectedReissue());
  }
  console.log(count);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "auto",
        },
      }}
    >
      <Paper elevation={0}>
        <Typography variant="h6" sx={{ padding: "25px 30px 10px 25px" }}>
          New Card Sale
        </Typography>

        <Typography variant="p" sx={{ padding: "25px 30px 10px 25px" }}>
          Issue New Card
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "25px 30px",
            "& > :not(style)": {
              m: 1,
              minWidth: "260px",
              height: 128,
            },
          }}
        >
          <Box sx={boxStyle}>
            <ListItemButton
              sx={{ py: 0, minHeight: "100%" }}
              onClick={() => x()}
            >
              <ListItemIcon sx={{}}>
                <AccountBoxRoundedIcon sx={{ color: "rgb(19, 20, 48)" }} />
              </ListItemIcon>
              <ListItemText primary="Kit" />
            </ListItemButton>
          </Box>
          <Box sx={boxStyle}>
            <ListItemButton
              sx={{ py: 0, minHeight: "100%" }}
              onClick={() => y()}
            >
              <ListItemIcon sx={{}}>
                <AccountCircleRoundedIcon sx={{ color: "rgb(19, 20, 48)" }} />
              </ListItemIcon>
              <ListItemText primary="Personalized Sales" />
            </ListItemButton>
          </Box>
          <Box sx={boxStyle}>
            <ListItemButton
              sx={{ py: 0, minHeight: "100%" }}
              onClick={() => z()}
            >
              <ListItemIcon sx={{}}>
                <AccountBoxRoundedIcon sx={{ color: "rgb(19, 20, 48)" }} />
              </ListItemIcon>
              <ListItemText primary="Reissue" />
            </ListItemButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Kit from "./CardSale/Kit";
import PersonalizedSale from "./CardSale/PersonalizedSale";
import Reissue from "./CardSale/Reissue";
import { useSelector } from "react-redux";

export default function CardSaleRender() {
  const isActive = useSelector((state) => state.kitSlice);

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
      <Paper>
        <Paper>
          {isActive.isActiveKit && <Kit />}
          {isActive.isActivePersonalized && <PersonalizedSale />}
          {isActive.isReissued && <Reissue />}
        </Paper>
      </Paper>
    </Box>
  );
}

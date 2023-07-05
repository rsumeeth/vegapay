import Stack from "@mui/material/Stack";
import NewCardSale from "./CardSale/NewCardSale";
import Search from "./Search";
import CardSaleRender from "./CardSaleRender";

export default function CardSale() {
  return (
    <div style={{ minHeight: "100vh", background: "#eceff3" }}>
      <Stack spacing={2}>
        <NewCardSale />
        <Search />
        <CardSaleRender />
      </Stack>
    </div>
  );
}

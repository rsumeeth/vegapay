import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { setSearchResult } from "../Redux/KitSlice.js";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchResult(searchValue));
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "auto",
          padding: "20px",
        },
      }}
    >
      <Paper sx={{}}>
        <TextField
          label="Search input"
          variant="outlined"
          value={searchValue}
          onChange={handleChange}
          sx={{ paddingRight: "20px" }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Paper>
    </Box>
  );
}

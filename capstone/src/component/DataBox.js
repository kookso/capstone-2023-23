import * as React from "react";

import { Box, Typography, Button, Grid } from "@material-ui/core";

//grid
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

//axios
import axios from "axios";

//grid style
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DataBox() {
  let [Temp, setTemp] = React.useState("");
  let [Moist, setMoist] = React.useState("");

  return (
    <div>
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Box
          spacing={2}
          sx={{
            display: "inline-flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            p: 3,
            m: 2,
          }}
          // item component로 구현할 필요
        >
          <Item
            sx={{
              m: 3,
              width: 250,
              height: 150,
              border: "2px solid #E1E2E3 ",
            }}
          >
            <h2>Humidity</h2>
            <Typography variant="h5" component="div">
              {Moist}
            </Typography>
          </Item>

          <Item
            sx={{
              m: 3,
              width: 250,
              height: 150,
              border: "2px solid #E1E2E3 ",
            }}
          >
            <h2>Temperature</h2>
            <Typography variant="h5" component="div">
              {Temp}
            </Typography>
          </Item>

          <Item
            sx={{
              m: 3,
              width: 250,
              height: 150,
              border: "2px solid #E1E2E3 ",
            }}
          >
            <h2>Soil-moisture</h2>
            <Typography variant="h5" component="div"></Typography>
          </Item>

          <Item
            sx={{
              m: 3,
              width: 250,
              height: 150,
              border: "2px solid #E1E2E3 ",
            }}
          >
            <h2>Amount of sunshine</h2>
            <Typography variant="h5" component="div"></Typography>
          </Item>
        </Box>
      </Box>

      <Button
        variant="outlined"
        onClick={() => {
          axios.get("http://localhost:3001/dummy").then((result) => {
            //console.log(result.data[0].data[0].y);
            //일단 0시의 temp와 moist
            let copyTemp = result.data[0].data[0].y;
            setTemp(copyTemp);

            let copyMoist = result.data[1].data[0].y;
            setMoist(copyMoist);

            //let Temp = result.data[0].data[0].y;
            //let Moist = result.data[1].data[0].y;
          });
        }}
      >
        UPDATE
      </Button>
    </div>
  );
}

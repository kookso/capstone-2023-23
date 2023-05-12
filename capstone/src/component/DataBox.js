// maincontent의 dataBox
import * as React from "react";
//axios
import axios from "axios";

//redux
import { useSelector, useDispatch } from "react-redux";
import { updateHumidity, updateSoil, updateTemp } from "../store/store";
import styled from "styled-components";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const BoxContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;
const Box = styled.div`
  width: 45%;
  height: 45%;
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding-right: 2rem;
  background-color: white;
`;

const DataID = styled.h2`
  margin: 1rem;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1.167;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 4px solid #198754;
`;
// const Underline = styled.span`
//   height: 4px;
//   width: 55px;
//   display: block;
//   margin: 0 auto 0.5rem;
//   background-color: #198754;
// `;
const SmallText = styled.p`
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto 0;
`;

export default function DataBox() {
  //redux
  const dispatch = useDispatch();
  let soilMoisture = useSelector((state) => state.soilMoisture);
  let temp = useSelector((state) => state.temp);
  let humidity = useSelector((state) => state.humidity);

  //dispatch가 실행 때마다 data 업데이트 해서 보여주는 코드
  //useEffect의 의존성 배열(두번째 매개변수)에 dispatch
  React.useEffect(() => {
    axios.get("http://localhost:3001/dummy").then((result) => {
      //일단 0시의 temp와 humidity
      let moistValue = result.data[1].data[0].y;
      let tempValue = result.data[0].data[0].y;
      let humidityValue = result.data[1].data[0].y;

      //Dispatch
      dispatch(updateSoil(moistValue));
      dispatch(updateTemp(tempValue));
      dispatch(updateHumidity(humidityValue));
    });
  }, [dispatch]);

  return (
    <BoxContainer>
      <Box>
        <DataID>Temp</DataID>
        <SmallText>{temp}</SmallText>
      </Box>
      <Box>
        <DataID>Humidity</DataID>
        <SmallText>{humidity}</SmallText>
      </Box>
      <Box>
        <DataID>Soil-Moisture</DataID>
        <SmallText>{temp}</SmallText>
      </Box>
      <Box>
        <DataID>Else</DataID>
        <SmallText>else</SmallText>
      </Box>
    </BoxContainer>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid
    //     container
    //     spacing={{ xs: 1, md: 3 }}
    //     columns={{ xs: 1, sm: 4, md: 12 }}
    //     justifyContent="center"
    //   >
    //     <Grid>
    //       <Item
    //         sx={{
    //           m: 5,
    //           width: 300,
    //           height: 180,
    //           border: "2px solid #E1E2E3 ",
    //         }}
    //       >
    //         <h1>Humidity</h1>
    //         <Typography variant="h5" component="div">
    //           {humidity}
    //         </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid>
    //       <Item
    //         sx={{
    //           m: 5,
    //           width: 300,
    //           height: 180,
    //           border: "2px solid #E1E2E3 ",
    //         }}
    //       >
    //         <h1>Temperature</h1>
    //         <Typography variant="h5" component="div">
    //           {temp}
    //         </Typography>
    //       </Item>
    //     </Grid>

    //     <Grid>
    //       <Item
    //         sx={{
    //           m: 5,
    //           width: 300,
    //           height: 180,
    //           border: "2px solid #E1E2E3 ",
    //         }}
    //       >
    //         <h1>Soil-Moisture</h1>
    //         <Typography variant="h5" component="div">
    //           {soilMoisture}
    //         </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid>
    //       <Item
    //         sx={{
    //           m: 5,
    //           width: 300,
    //           height: 180,
    //           border: "2px solid #E1E2E3 ",
    //         }}
    //       >
    //         <h1>Amount of sunshine</h1>
    //         <Typography variant="h5" component="div"></Typography>
    //       </Item>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}

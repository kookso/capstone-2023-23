// farm 화면에 들어간 booth들

import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const BoothBox = styled.div`
  display: flex;
  position: relative;
  width: auto;
  height: 90%;
  margin: 1rem;
  flex-shrink: 0;
`;

export default function Booth2(props) {
  const navigate = useNavigate();
  function handleClick(event) {
    navigate("/Farm/booth/plant1/");
  }
  return (
    <BoothBox onClick={() => handleClick()}>
      <Card
      // sx={{ p: 3, height: 250, Width: 350, border: "2px solid #E1E2E3 " }}
      >
        {/* <CardMedia
          sx={{ height: 150 }}
          // 서버에서 해당 부스 이미지를 가져오면 좋을까?
          image="https://pin.it/4qtCOeQ"
          title="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.boothInfo.boothName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Booth-Serial-Number : {props.boothInfo.boothSerialNumber}
          </Typography>
        </CardContent>

        {/* 아래 버튼은 plant 화면으로 넘어가는 버튼 */}
        {/* <CardActions> */}
        {/* <button>show plant</button>
        <button>Learn More</button> */}
        {/* </CardActions> */}
      </Card>
    </BoothBox>
  );
}

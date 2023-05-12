import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DataChart from "../component/DataChart";
import DataList from "../component/DataList";
import EmptyPage from "../component/EmptyPage";

import DataBox from "../component/DataBox";
import styled from "styled-components";
// //Farm/booth/plant1
//axios
import axios from "axios";
import { useSelector } from "react-redux";

const BasicLayout = styled.div`
  height: 100%;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgb(230, 231, 234);
`;
const DataContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 60%;
  padding: 1rem;
`;
const BoxContainer = styled.div`
  height: 40%;
  padding: 1rem;
`;
const ChartContainer = styled.div`
  height: 60%;
  padding: 1rem;
  background-color: white;
`;
const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  pardding: 1rem;
  background-color: white;
`;
const Btn = styled.button`
  width: fit-content;
  block-size: fit-content;
`;

function MainContent() {
  const navigate = useNavigate();
  return (
    <BasicLayout>
      <DataContainer>
        <ChartContainer>
          <DataChart />
        </ChartContainer>
        <BoxContainer>
          <DataBox />
        </BoxContainer>
      </DataContainer>
      <ImageContainer>
        <div style={{ width: "100%", height: "100%" }}></div>
        <Btn onClick={() => navigate(`/`)}>Home 가기</Btn>
      </ImageContainer>
    </BasicLayout>
  );
}
export default MainContent;

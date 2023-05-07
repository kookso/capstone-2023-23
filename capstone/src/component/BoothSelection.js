// /Farm화면

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import backgroundImg from "../img/hero_background.jpg";
import Box from "@mui/material/Box";

//axios
import axios from "axios";

import Booth2 from "../component/Booth2";

import AddModal from "../component/AddModal";
import DeleteModal from "../component/DeleteModal";
import boothBackground from "../img/booth_background.jpg";

const BasicLayout = styled.div`
  height: 92vh;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  align-item: center;
  justify-content: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const BoothRoot = styled.div`
  display: flex;
  margin: 0 auto;
  padding 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 6s0%;
`;
const BoothContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 50%;
  grid-auto-flow: dense;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: auto;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;
const PlainText = styled.p`
  margin: 0 auto;
  padding: 0rem 1rem;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(80, 112, 61);
  width: fit-content;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.3rem;
`;
const Underline = styled.div`
  width: 80px;
  height: 0.4rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: #48742c;
  background: #48742c;
  display: flex;
  position: relative;
  align-item: center;
  justify-content: center;
`;
const BtnContainer = styled.div`
  display: flex;
  float: right;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: right;
  align-content: right;
  width: 95%;
`;
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

function BoothSelection() {
  const scrollbarHeight =
    window.innerWidth - document.documentElement.clientWidth;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [booth, setBooth] = useState([]);
  const userRedux = useSelector((state) => state.user);
  // console.log("userRedux : " + userRedux);
  useEffect(() => {
    setUser(userRedux);
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/booth?email=${userRedux[0]}&all=true`
      );
      setBooth(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <BasicLayout>
        <HeadContainer>
          <PlainText>Hello! {user[1] + " " + user[2]}</PlainText>
          <Underline></Underline>
        </HeadContainer>
        <BoothRoot>
          <BoothContainer>
            {/* {Array.from({ length: 7 }).map((_, index) => (
              <Booth2 />
            ))} */}
            {booth.map((item) => (
              <Booth2 key={item.boothName} boothInfo={item} />
            ))}
          </BoothContainer>
          <BtnContainer>
            <AddModal />
            <DeleteModal />
          </BtnContainer>
        </BoothRoot>
      </BasicLayout>
    </div>
  );
}
export default BoothSelection;

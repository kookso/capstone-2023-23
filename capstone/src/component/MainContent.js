import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataChart from "../component/DataChart";
import DataList from "../component/DataList";
import EmptyPage from "../component/EmptyPage";

import DataBox from "../component/DataBox";
// //Farm/booth/plant1
//axios
import axios from "axios";

function MainContent() {
  return (
    <>
      <DataList></DataList>
      <DataBox></DataBox>
    </>
  );
}
export default MainContent;

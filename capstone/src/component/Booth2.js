// farm 화면에 들어간 booth들

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setCheckedBooths } from '../store/store';

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

  //checkBox  상태 관리
  const [isChecked, setIsChecked] = useState(false);

  //delete event 관리
  const dispatch = useDispatch();
  const checkedBooths = useSelector((state) => state.booth.checkedBooths);

  function handleCheckBoxChange(event) {
    event.stopPropagation();
    const checkedId = event.target.value;

    if (event.target.checked) {
      dispatch(setCheckedBooths(checkedId));
      setIsChecked(event.target.checked);
      console.log(event.target.value);
    } else {
      dispatch(
        setCheckedBooths(checkedBooths.filter((id) => id !== checkedId))
      );
    }
  }

  function handleClick(event) {
    navigate('/Farm/booth/plant1/');
  }
  return (
    <BoothBox>
      <Card>
        <Checkbox
          checked={isChecked} //checkBox 상태 설정
          onChange={handleCheckBoxChange} //checkBox 상태 변경 핸들러
          inputProps={{ 'aria-label': 'controlled' }}
          value={props.boothInfo.id} //check된 booth의 id 가져옴
        />
        <CardContent onClick={() => handleClick()}>
          <Typography gutterBottom variant="h5" component="div">
            {props.boothInfo.boothName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Booth-Serial-Number : {props.boothInfo.boothSerialNumber}
          </Typography>
        </CardContent>
      </Card>
    </BoothBox>
  );
}

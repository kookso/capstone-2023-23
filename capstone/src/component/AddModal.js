import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
//axios
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//redux
import { setBoothName, setBoothSerialNumber } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

//rendering
import Booth2 from './Booth2';

const SelectBtn = styled.button`
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  width: fit-content;
  padding: 0.5rem 2rem;
`;
const AddBtn = styled(SelectBtn)`
  border-radius: 0.5rem;
  border: 3px solid rgb(60, 141, 188);
  background: rgb(60, 141, 188);
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.3rem 0.5rem 1rem 0.5rem;
`;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

export default function AddModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //redux
  const dispatch = useDispatch();
  const boothName = useSelector((state) => state.booth.boothName);
  const boothSerialNumber = useSelector(
    (state) => state.booth.boothSerialNumber
  );
  const email = useSelector((state) => state.user);

  //id 생성함수
  function createId() {
    return Math.random().toString(36).substr(2, 9);
  }

  //DB에 부스 이름과 번호를 등록
  const handleSubmit1 = (e) => {
    const newId = createId();
    e.preventDefault();
    axios
      .post('http://localhost:3001/booth', {
        id: newId,
        boothName,
        boothSerialNumber,
        email: email[0],
      })
      .then((response) => {
        //redux 관련 수정 부분
        // console.log(response.data);
        dispatch(setBoothName(''));
        dispatch(setBoothSerialNumber(''));

        //add버튼 누를시 rerendering 되도록하기 위한
        const newBooth = { id: newId, boothName, boothSerialNumber };
        props.addBooth(newBooth);
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //상태값 초기화를 위한 코드
  React.useEffect(() => {
    return () => {
      setBoothName('');
      setBoothSerialNumber('');
    };
  }, []);

  return (
    <div>
      <AddBtn onClick={handleOpen}>add</AddBtn>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add my booth
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Booth의 이름과 번호를 정해주세요!
          </Typography>
          <TextField
            id="BoothName"
            label="Booth Name"
            variant="outlined"
            sx={{ mt: 3 }}
            value={boothName}
            onChange={(e) => dispatch(setBoothName(e.target.value))}
          />

          {/* input부분 */}
          <TextField
            id="BoothSerialNumber"
            label="Booth Serial Number"
            variant="outlined"
            sx={{ mt: 3 }}
            value={boothSerialNumber}
            onChange={(e) => dispatch(setBoothSerialNumber(e.target.value))}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              bgcolor: '#7B95B7',
              color: 'white',
              fontSize: 20,
            }}
            onClick={(e) => {
              handleSubmit1(e);
            }}
          >
            add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

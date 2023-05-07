import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
//axios
import axios from "axios";

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
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [boothName, setBoothName] = React.useState("");
  const [boothSerialNum, setBoothSerialNum] = React.useState("");

  // 부스 이름과 시리얼 번호 가져오기
  const saveBoothName = (event) => {
    setBoothName(event.target.value);
    console.log(event.target.value);
  };

  const saveBoothSerialNum = (event) => {
    setBoothSerialNum(event.target.value);
    console.log(event.target.value);
  };

  // const Handler_function = () => {
  //   const [form, setForm] = React.useState({
  //     boothName: '',
  //     boothSerialNum: '',
  //   });

  //   const { boothName, boothSerialNum } = form;

  //   const onChange = (e) => {
  //     const nextForm = {
  //       ...form,
  //       [e.target.name]: e.target.value,
  //     };
  //     console.log(nextForm);
  //     setForm(nextForm);
  //   };

  //   const handleClick = () => {
  //     setForm({ boothName: '', boothSerialNum: '' });
  //   };

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
            onChange={saveBoothName}
          />
          <TextField
            id="BoothSerialNumber"
            label="Booth Serial Number"
            variant="outlined"
            sx={{ mt: 3 }}
            value={boothSerialNum}
            onChange={saveBoothSerialNum}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              bgcolor: "#7B95B7",
              color: "white",
              fontSize: 20,
            }}
            // onClick={handleClick}
          >
            add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

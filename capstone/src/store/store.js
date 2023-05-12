import { configureStore, createSlice } from '@reduxjs/toolkit';

//1. soilMoisture
//usetState()의 역할, {name:'state이름',initialState:'state값'} 하면 state 하나 생성
let soilMoisture = createSlice({
  name: 'soilMoisture',
  initialState: '',

  //state 수정해주는 함수(액션 생성자 함수)를 아래 적기
  reducers: {
    updateSoil(state, action) {
      return action.payload;
    },
  },
});

//2. Temperature
let temp = createSlice({
  name: 'temp',
  initialState: '',
  reducers: {
    updateTemp(state, action) {
      return action.payload;
    },
  },
});

//3. Temperature
let humidity = createSlice({
  name: 'humidity',
  initialState: '',
  reducers: {
    updateHumidity(state, action) {
      return action.payload;
    },
  },
});

//4. User Info
let user = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    updateUser(state, action) {
      return action.payload;
    },
  },
});
//5. Booth info
let boothSlice = createSlice({
  name: 'booth',
  initialState: {
    boothName: '',
    boothSerialNumber: '',
  },
  reducers: {
    setBoothName: (state, action) => {
      state.boothName = action.payload;
    },
    setBoothSerialNumber: (state, action) => {
      state.boothSerialNumber = action.payload;
    },
  },
});

//6. Booth Delete Event
let checkedBooth = createSlice({
  name: 'checked',
  initialState: {
    checkedBooths: [],
  },
  //checkedBooths는 현재 배열이므로 아래 reducer함수로 상태 관리
  //아래 코드 setCheckedBooths 액션은 checkedBooths 배열에 특정 id를 추가하거나 삭제
  reducers: {
    setCheckedBooths: (state, action) => {
      const checkedId = action.payload;

      if (state.checkedBooths.includes(checkedId)) {
        state.checkedBooths = state.checkedBooths.filter(
          (id) => id !== checkedId
        );
      } else {
        state.checkedBooths.push(checkedId);
      }
    },
  },
});

let deleteBooth = createSlice({
  name: 'delete',
  initialState: {
    deleteList: [],
  },
  reducers: {
    deleteBoothReducer: (state, action) => {
      state.deleteList.push(action.payload);
    },
  },
});

//reducer, state 등록, {작명: createSlice만든거.reducer} 하면 등록 끝
export default configureStore({
  reducer: {
    soilMoisture: soilMoisture.reducer,
    temp: temp.reducer,
    humidity: humidity.reducer,
    user: user.reducer,
    booth: boothSlice.reducer,
    deleteBooth: deleteBooth.reducer,
    checkedBooth: checkedBooth.reducer,
  },
});

export const { updateSoil } = soilMoisture.actions;
export const { updateTemp } = temp.actions;
export const { updateHumidity } = humidity.actions;
export const { updateUser } = user.actions;
export const { setBoothName, setBoothSerialNumber } = boothSlice.actions;
export const { deleteBoothReducer } = deleteBooth.actions;
export const { setCheckedBooths } = checkedBooth.actions;

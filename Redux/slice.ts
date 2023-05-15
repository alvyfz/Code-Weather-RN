import {createSlice} from '@reduxjs/toolkit';

interface state {
  location: any | boolean;
}

export const reducer = createSlice({
  name: 'reducer',
  initialState: <state>{
    location: false,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLocation} = reducer.actions;

export default reducer.reducer;

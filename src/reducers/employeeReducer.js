import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
      data: []
    },
    reducers: {
      setData: (state, action) => {
        state.data.push(action.payload) ;
      }
    },
});

export const { setData } = employeeSlice.actions;
  
export default employeeSlice.reducer;

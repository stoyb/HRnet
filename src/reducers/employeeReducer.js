import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
      firstName: null,
      lastName: null,
      birthDate: null,
      startDate: null, 
      street: null, 
      city: null, 
      state: null, 
      zipCode: null, 
      department: null
    },
    reducers: {
      setFirstName: (state, action) => {
        state.firstName = action.payload;
      }, 
      setLastName: (state, action) => {
        state.lastName = action.payload;
      }, 
      setBirthDate: (state, action) => {
        state.birthDate = action.payload;
      },
      setStartDate: (state, action) => {
        state.startDate = action.payload;
      },
      setStreet: (state, action) => {
        state.street = action.payload;
      },
      setCity: (state, action) => {
        state.city = action.payload;
      },
      setZipCode: (state, action) => {
        state.zipCode = action.payload;
      },
      setDepartment: (state, action) => {
        state.department = action.payload;
      }
    },
  });

export const { setFirstName, setLastName, setBirthDate, setStartDate, setStreet, setCity, setZipCode, setDepartment } = employeeSlice.actions;
  
export default employeeSlice.reducer;

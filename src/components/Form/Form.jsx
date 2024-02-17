import React from 'react'
import { department } from '../../data/selectData'
import Field from '../Field/Field'
import Select from 'react-select'
import Fieldset from '../Fieldset/Fieldset'
import DataPicker from 'react-datepicker'
import { useState } from 'react' 
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux'
import { setData } from '../../reducers/employeeReducer'
import Modal from 'react-text-modal-component/dist/Modal'


const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      birthDate: null,
      startDate: null,
      department: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    });
    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = (e) => {
      e.preventDefault();
      setIsOpen(false);
    };
    const dispatch = useDispatch();
    
    const handleBirthDateChange = (date) => {
      const serializedDate = date.toISOString();
      setBirthDate(date);
      setFormData({ ...formData, birthDate: serializedDate });
    };
    const handleStartDateChange = (date) => {
      const serializedDate = date.toISOString();
      setStartDate(date);
      setFormData({ ...formData, startDate: serializedDate });
    };
    const handleSubmit = (e) => {
      e.preventDefault(); 
      dispatch(setData(formData));
      setFormData({
          firstName: '',
          lastName: '',
          birthDate: null,
          startDate: null,
          department: '', 
          street: '',
          city: '',
          state: '',
          zipCode: ''
      });
      openModal();
  };

    return (
    <>
        <form>
            <Field label="First Name">
                <input type="text"
                 value={formData.firstName}
                 onChange={(e) => setFormData({...formData, firstName: e.target.value })}/>
            </Field>
            <Field label="Last Name">
                <input type="text" 
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}/>
            </Field>
            <Field label="Date of birth">
                <DataPicker selected={birthDate} onChange={handleBirthDateChange}/>
            </Field>
            <Field label="Start Date">
                <DataPicker selected={startDate} onChange={handleStartDateChange} />
            </Field>
            <Fieldset 
              street={formData.street}
              city={formData.city} 
              zipCode={formData.zipCode} 
              setFormData={(selectedOption) =>
                setFormData({ ...formData, state: selectedOption.label })}
              setformDataStreet={(e) => setFormData({...formData, street: e.target.value })}
              setformDataCity={(e) => setFormData({...formData, city: e.target.value })}
              setformDataZipCode={(e) => setFormData({...formData, zipCode: e.target.value })}
              />
            <Field label="Department">
            <Select 
            options={department} 
            onChange={(selectedOption) =>
              setFormData({ ...formData, department: selectedOption.label})
            }
            />
            </Field>
            <Modal isOpen={isOpen} handleClose={closeModal}>Employee created !</Modal>
            <button onClick={handleSubmit}>Save</button>
        </form>
    </>
  )
}

export default Form
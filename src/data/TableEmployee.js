import { department, unitedStates } from "./selectData";

export const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
      cell: row => {
        const departmentInfo = department.find(d => d.value === row.department);
        return departmentInfo ? departmentInfo.label : row.department;
      }
          }, 
    {
      name: 'Date of birth',
      selector: row => row.birthDate,
      sortable: true
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true
    }, 
    {
      name: 'City',
      selector: row => row.city,
      sortable: true
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
      cell: row => {
        const stateInfo = unitedStates.find(s => s.value === row.state);
        return stateInfo ? stateInfo.label : row.state;
      }
    }, 
    {
      name: 'Zip Code',
      selector: row => row.zipCode,
      sortable: true
    }
  ];
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import Anchor from '../../components/Anchor/Anchor';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Title from '../../components/Title/Title';
import { columns } from '../../data/TableEmployee';
import styles from './CurrentEmployee.module.css';


const CurrentEmployee = () => {
  const dataEmployee = useSelector(state => state.employee.data);
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = e => {
    setFilterText(e.target.value);
  };

  const filteredData = dataEmployee.filter(row => {
    const rowToCheck = Object.values(row).join('').toLowerCase();
    return rowToCheck.includes(filterText.toLowerCase());
  });

  const paginationComponentOptions = {
    rowsPerPageText: 'Show entries',
    rangeSeparatorText: 'of',
    rowsPerPageOptions: [10, 20, 50]
  };

  const CustomPagination = () => {

    const [rowsPerPage, setRowsPerPage] = useState(0);
    return (
      <div className={styles.customPagination}>
        <span>
          {`${paginationComponentOptions.rowsPerPageText}: `}
         <select value={rowsPerPage} onChange={(e) => setRowsPerPage(e.target.value)}>
            {paginationComponentOptions.rowsPerPageOptions.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select> 
        </span>
        <span>
          {`Showing ${rowsPerPage} to ${rowsPerPage} of ${rowsPerPage} entries`}
        </span>
         <span>
          {`${paginationComponentOptions.rangeSeparatorText} ${rowsPerPage} of ${rowsPerPage}`}
        </span>
        <button >
          Previous
        </button>
        <span>
          {rowsPerPage}
        </span>
        <button >
          Next
        </button> 
      </div>
    );
  };

  return (
    <>
      <Header>
        <Title text="Current Employees" className={styles.title} />
      </Header>
      <Main>
        <div>
          <p> Search :</p>
          <input
            type="text"
            value={filterText}
            onChange={handleFilterChange}
          />
        </div>
        <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationComponent={CustomPagination}
        paginationComponentOptions={paginationComponentOptions}
        />
      </Main>
      <Anchor link="/" text="Home" />
    </>
  );
};

export default CurrentEmployee;

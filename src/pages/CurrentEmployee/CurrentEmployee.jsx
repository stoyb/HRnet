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
  return (
    <>
      <Header>
        <Title text="Current Employees" className={styles.title} />
      </Header>
      <Main>
        <div className={styles.searchContainer}>
          <label htmlFor="searchInput"> Search :</label>
          <input
            id="searchInput"
            type="text"
            value={filterText}
            onChange={handleFilterChange}
            className={styles.inputContainer}
            aria-label="Search employees"
          />
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
        <Anchor link="/" text="Home" />
      </Main>
    </>
  );
};

export default CurrentEmployee;

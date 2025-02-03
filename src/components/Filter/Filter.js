import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';

const Filter = () => {
  const filterInputId = nanoid();

  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <div className={css.section}>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        id={filterInputId}
        name="filter"
        type="text"
        onChange={handleInput}
      ></input>
    </div>
  );
};

export default Filter;

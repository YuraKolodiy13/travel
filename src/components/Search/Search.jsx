import {SelectValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import TextField from "@mui/material/TextField";
import React from "react";
import useSearch from "../../hooks/useSearch";

const Search = ({searchForm}) => {

  const {searchFormData, setSearchFormData, searchTours} = useSearch(searchForm);

  const onChange = (e) => {
    setSearchFormData({...searchFormData, [e.target.name]: e.target.value});
    localStorage.setItem('searchFormData', JSON.stringify({...searchFormData, [e.target.name]: e.target.value}))
  };
  const onChangeDate = (value, name) => {
    setSearchFormData({...searchFormData, [name]: value});
    localStorage.setItem('searchFormData', JSON.stringify({...searchFormData, [name]: value}))
  };

  return (
    <ValidatorForm className='olo-main-info-body' onSubmit={searchTours}>
      <SelectValidator
        value={searchFormData.cityFrom || ''}
        name='cityFrom'
        variant='outlined'
        onChange={onChange}
        validators={["required"]}
        errorMessages={["This field is required"]}
      >
        {searchForm.cityFrom?.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </SelectValidator>
      <SelectValidator
        value={searchFormData.destination || ''}
        name='destination'
        variant='outlined'
        onChange={onChange}
        validators={["required"]}
        errorMessages={["This field is required"]}
      >
        {searchForm.destination?.options.countries.popular.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
        {searchForm.destination?.options.countries.others.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </SelectValidator>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          onChange={date => onChangeDate(date, 'date')}
          value={searchFormData.date || [null, null]}
          name='date'
          renderInput={({ inputProps, ...startProps }, endProps) => {
            const startValue = inputProps.value;
            delete inputProps.value;
            return (
              <TextField
                {...startProps}
                name='date'
                inputProps={inputProps}
                value={`${startValue}-${endProps.inputProps.value}`}
              />
            )}}
        />
      </LocalizationProvider>
      <button type="submit">Найти</button>
    </ValidatorForm>
  )
};

export default Search;
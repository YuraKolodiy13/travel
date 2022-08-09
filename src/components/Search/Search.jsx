import {SelectValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import TextField from "@mui/material/TextField";
import React, {memo} from "react";
import useSearch from "../../hooks/useSearch";
import {useSelector} from "react-redux";
import './Search.scss'
import Button from "../Button/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import {MEALS} from "../../helpers/constants";

const Search = ({setSelectedFilters}) => {

  const searchForm = useSelector((state) => state.general.searchForm);
  const {searchFormData, setSearchFormData, searchTours} = useSearch();

  const onChange = (e) => {
    setSearchFormData({...searchFormData, [e.target.name]: e.target.value});
    localStorage.setItem('searchFormData', JSON.stringify({...searchFormData, [e.target.name]: e.target.value}))
  };
  const onChangeDate = (value, name) => {
    setSearchFormData({...searchFormData, [name]: value});
    localStorage.setItem('searchFormData', JSON.stringify({...searchFormData, [name]: value}))
  };

  const onSearchTour = () => {
    if(setSelectedFilters) setSelectedFilters({})
    searchTours()
  }

  console.log(searchFormData, 'searchFormData')

  return (
    <ValidatorForm className='search-form' onSubmit={onSearchTour}>
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
      <Select
        multiple
        value={searchFormData.stars || [-1]}
        onChange={onChange}
        name='stars'
        renderValue={(selected) => selected.join(', ')}
      >
        {searchForm.stars?.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <Checkbox checked={searchFormData.stars?.includes(option.id)} />
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
      <Select
        multiple
        value={searchFormData.meals || [-1]}
        onChange={onChange}
        name='meals'
        renderValue={(selected) => selected.join(', ')}
      >
        {searchForm.meals?.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <Checkbox checked={searchFormData.meals?.includes(option.id)} />
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
      <Button type='submit' title='Найти' color='primary'/>
    </ValidatorForm>
  )
};

// export default Search;
export default memo(Search);
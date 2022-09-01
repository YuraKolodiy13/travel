import {SelectValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import TextField from "@mui/material/TextField";
import React, {memo, useMemo, useState} from "react";
import useSearch from "../../hooks/useSearch";
import {useSelector} from "react-redux";
import './Search.scss'
import Button from "../Button/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Popover from "@mui/material/Popover";

const Search = ({setSelectedFilters}) => {

  const searchForm = useSelector((state) => state.general.searchForm);
  const {searchFormData, setSearchFormData, searchTours} = useSearch();
  const [touristsAnchorEl, setTouristsAnchorEl] = useState(null);
  const [nightsAnchorEl, setNightsAnchorEl] = useState(null);

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

  const onChangeNights = (value) => {
    if(searchFormData.nightsFrom === searchFormData.nightsTo){
      if(searchFormData.nightsFrom > value){
        setSearchFormData({...searchFormData, nightsFrom: value, nightsTo: searchFormData.nightsFrom});
      }else {
        setSearchFormData({...searchFormData, nightsTo: value})
      }
    }else if((!searchFormData.nightsFrom && !searchFormData.nightsTo) || (searchFormData.nightsFrom && searchFormData.nightsTo)){
      setSearchFormData({...searchFormData, nightsFrom: value, nightsTo: value})
    }
  }

  const getNightsValueTitle = useMemo(() => {
    let value = '';
    if(searchFormData.nightsFrom === searchFormData.nightsTo){
      value += searchFormData.nightsFrom
    }else {
      value += `${searchFormData.nightsFrom}-${searchFormData.nightsTo}`
    }
    if(searchFormData.nightsTo === 1){
      value += ' ніч'
    }else if(searchFormData.nightsTo < 5){
      value += ' ночі'
    }else {
      value += ' ночей'
    }
    return value
  }, [searchFormData.nightsFrom, searchFormData.nightsTo])

  const getTouristsValueTitle = useMemo(() => {
    let value = searchFormData.adults + searchFormData.kids;
    if(value === 1) value += ' турист'
    else if(value < 5) value += ' туриста'
    else value += ' туристів'
    return value;
  }, [searchFormData.adults, searchFormData.kids])

  return (
    <ValidatorForm className='search-form' onSubmit={onSearchTour}>
      <div className="search-form__field">
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
      </div>

      <div className="search-form__field">
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
      </div>

      <div className="search-form__field">
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
      </div>

      <div className="select-nights search-form__field">
        <Button
          type='button'
          doAction={e => setNightsAnchorEl(e.currentTarget)}
          title={getNightsValueTitle}
          color='primary-inverse'
        />
        <Popover
          open={Boolean(nightsAnchorEl)}
          anchorEl={nightsAnchorEl}
          onClose={() => setNightsAnchorEl(null)}
          className='select-nights-popover'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <ul>
            {[...Array(15).keys()].map(item => (
              <li
                className={`${(searchFormData.nightsFrom === item + 1) || (searchFormData.nightsTo === item + 1) ? 'selected' : ''}`}
                key={item}
                onClick={() => onChangeNights(item + 1)}
              >
                {item + 1}
              </li>
            ))}
          </ul>
        </Popover>
      </div>
      <div className="select-tourists search-form__field">
        <Button
          type='button'
          doAction={e => setTouristsAnchorEl(e.currentTarget)}
          title={getTouristsValueTitle}
          color='primary-inverse'
        />
        <Popover
          open={Boolean(touristsAnchorEl)}
          anchorEl={touristsAnchorEl}
          onClose={() => setTouristsAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Select
            value={searchFormData.adults}
            onChange={onChange}
            name='adults'
          >
            {[...Array(searchForm.tourists?.options.maxAdults).keys()].map((option) => (
              <MenuItem key={option} value={option + 1}>{option + 1}</MenuItem>
            ))}
          </Select>
          <Select
            value={searchFormData.kids}
            onChange={onChange}
            name='kids'
          >
            {[...Array(searchForm.tourists?.options.maxKids).keys()].map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </Popover>
      </div>
      <Select
        className='search-form__field'
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
        className='search-form__field'
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
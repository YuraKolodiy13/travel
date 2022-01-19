import {SelectValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  READ_RESULTS_REQUEST,
  SEARCH_FORM_REQUEST,
  SEARCH_START_REQUEST
} from "../../actions/general";
import DateRangePicker from '@mui/lab/DateRangePicker';
import TextField from "@mui/material/TextField";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Homepage = () => {

  const loading = useSelector((state) => state.general.loading);
  const hotels = useSelector((state) => state.general.hotels);
  const searchForm = useSelector((state) => state.general.searchForm);
  const dispatch = useDispatch();


  const [state, setState] = useState(JSON.parse(localStorage.getItem('searchFormData')) || {});

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: {
        body: {
          "Form": {
            "countryId": -1,
            "townFromId": 5
          },
        }
      }
    });
  }, []);

  useEffect(() => {
    if(!localStorage.getItem('searchFormData')){
      const currentDate = new Date();
      setState({
        cityFrom: searchForm.cityFrom?.checkedModel.id,
        destination: searchForm.destination?.checkedModel.country,
        date: [currentDate.setDate(currentDate.getDate() + 7), currentDate.setDate(currentDate.getDate() + 14)]
      })
    }
  }, [searchForm]);

  const searchTours = () => {
    dispatch({
      type: SEARCH_START_REQUEST,
      payload: {
        body: {
          form: {
            countryId: state.destination,
            townFromId: state.cityFrom,
            ages: [],
            stars: [3,4,7],
            meals: [1,2],
            hotels: [],
            regions: [],
            resorts: [],
            nightsFrom: 7,
            nightsTo: 7,
            adults: 2,
            kids: 0,
            dateFrom: new Date(state.date[0]),
            dateTo: new Date(state.date[1])
          }
        }
      }
    })
  };

  const loadMoreResults = () => {
    dispatch({
      type: READ_RESULTS_REQUEST,
      payload: {
        body: {
          firstCount: hotels?.sResult?.length + 10,
          hashId: hotels.hash,
          mapKey: 0,
          offset: 1,
          partnerType: "",
          show_type: "",
          sort: "",
          sortType: 1
        }
      }
    })
  };

  const onChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
    localStorage.setItem('searchFormData', JSON.stringify({...state, [e.target.name]: e.target.value}))
  };
  const onChangeDate = (value, name) => {
    setState({...state, [name]: value});
    localStorage.setItem('searchFormData', JSON.stringify({...state, [name]: value}))
  };

  return (
    <div className='Homepage'>
      <ValidatorForm className='olo-main-info-body' onSubmit={searchTours}>
        <SelectValidator
          value={state.cityFrom || ''}
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
          value={state.destination || ''}
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
          value={state.date || [null, null]}
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

      {hotels?.sResult?.map(item =>
        <HotelCard item={item} key={item.id}/>
      )}
      {hotels && !hotels?.stopHotelSearch && (
        <button onClick={loadMoreResults}>Показати більше</button>
      )}
    </div>
  )
};

export default Homepage;
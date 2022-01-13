import {SelectValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_FORM_REQUEST, SEARCH_START_REQUEST} from "../../actions/general";

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
      setState({
        cityFrom: searchForm.cityFrom?.checkedModel.id,
        destination: searchForm.destination?.checkedModel.country,
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
            dateFrom: "12.01.2022",
            dateTo: "25.01.2022"
          }
        }
      }
    })
  };

  const onChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
    localStorage.setItem('searchFormData', JSON.stringify({...state, [e.target.name]: e.target.value}))
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
        <button type="submit">Найти</button>
      </ValidatorForm>

      {hotels?.map(item =>
        <HotelCard item={item} key={item.id}/>
      )}
    </div>
  )
};

export default Homepage;
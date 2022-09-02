import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CLEAR_CATALOG_DATA, SEARCH_START_REQUEST} from "../actions/catalog";
import {useNavigate} from "react-router-dom";
import {getFullDate} from "../helpers/global";

const useSearch = () => {
  const searchForm = useSelector((state) => state.general.searchForm);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [searchFormData, setSearchFormData] = useState(JSON.parse(localStorage.getItem('searchFormData')) || {});

  const currentDate = new Date();
  const initialSearchData = {
    cityFrom: searchForm.cityFrom?.checkedModel.id || 13,
    destination: searchForm.destination?.checkedModel.country || 25,
    date: [currentDate.setDate(currentDate.getDate() + 7), currentDate.setDate(currentDate.getDate() + 14)],
    meals: [1, 2],
    stars: [3,4,7],
    adults: 2,
    kids: 0,
    ages: [],
    nightsFrom: 7,
    nightsTo: 7,
  }

  useEffect(() => {
    if(!localStorage.getItem('searchFormData')){
      setSearchFormData(initialSearchData)
    }
  }, [searchForm]);

  const searchTours = () => {
    history('/catalog');
    dispatch({type: CLEAR_CATALOG_DATA})
    const dates = searchFormData.date ? searchFormData.date : [new Date(), new Date()]
    dispatch({
      type: SEARCH_START_REQUEST,
      payload: {
        body: {
          form: {
            countryId: searchFormData.destination || initialSearchData.destination,
            townFromId: searchFormData.cityFrom || initialSearchData.cityFrom,
            ages: searchFormData.ages || initialSearchData.ages,
            stars: searchFormData.stars || initialSearchData.stars,
            meals: searchFormData.meals || initialSearchData.meals,
            hotels: [],
            regions: [],
            resorts: [],
            nightsFrom: searchFormData.nightsFrom || initialSearchData.nightsFrom,
            nightsTo: searchFormData.nightsTo || initialSearchData.nightsTo,
            adults: searchFormData.adults || initialSearchData.adults,
            kids: searchFormData.kids || initialSearchData.kids,
            dateFrom: getFullDate(new Date(dates[0])),
            dateTo: getFullDate(new Date(dates[1]))
          }
        }
      }
    })
  };

  return {searchFormData, setSearchFormData, searchTours}
};

export default useSearch;
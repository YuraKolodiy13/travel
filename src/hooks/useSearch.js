import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {SEARCH_START_REQUEST} from "../actions/general";
import {useNavigate} from "react-router-dom";
import {getFullDate} from "../helpers/global";

const useSearch = () => {
  const searchForm = useSelector((state) => state.general.searchForm);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [searchFormData, setSearchFormData] = useState(JSON.parse(localStorage.getItem('searchFormData')) || {});

  useEffect(() => {
    if(!localStorage.getItem('searchFormData')){
      const currentDate = new Date();
      setSearchFormData({
        cityFrom: searchForm.cityFrom?.checkedModel.id,
        destination: searchForm.destination?.checkedModel.country,
        date: [currentDate.setDate(currentDate.getDate() + 7), currentDate.setDate(currentDate.getDate() + 14)]
      })
    }
  }, [searchForm]);

  const searchTours = () => {
    history('/catalog');
    dispatch({
      type: SEARCH_START_REQUEST,
      payload: {
        body: {
          form: {
            countryId: searchFormData.destination,
            townFromId: searchFormData.cityFrom,
            ages: [1],
            stars: [3,4,7],
            meals: [1,2],
            hotels: [],
            regions: [],
            resorts: [],
            nightsFrom: 7,
            nightsTo: 7,
            adults: 2,
            kids: 1,
            dateFrom: getFullDate(new Date(searchFormData.date[0])),
            dateTo: getFullDate(new Date(searchFormData.date[1]))
          }
        }
      }
    })
  };

  return {searchFormData, setSearchFormData, searchTours}
};

export default useSearch;
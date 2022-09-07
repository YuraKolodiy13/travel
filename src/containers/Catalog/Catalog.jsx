import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_CATALOG_DATA, READ_FILTERED_RESULTS_REQUEST, READ_RESULTS_REQUEST} from "../../actions/catalog";
import {SEARCH_FORM_REQUEST} from "../../actions/general";
import Search from "../../components/Search/Search";
import useSearch from "../../hooks/useSearch";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import {DEFAULT_SEARCH_VALUE} from "../../helpers/constants";
import './Catalog.scss';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Collapse from "@mui/material/Collapse";
import {
  selectHotels,
  selectError,
  selectLoadingHotels,
  selectLoadingFilters,
  selectFilters
} from "../../selectors/catalog";
import {selectFlights} from "../../selectors/general";

const Catalog = () => {

  const hotels = useSelector(selectHotels);
  const error = useSelector(selectError);
  const flights = useSelector(selectFlights);
  const loadingHotels = useSelector(selectLoadingHotels);
  const loadingFilters = useSelector(selectLoadingFilters);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const {searchTours} = useSearch();
  const [collapsed, setCollapsed] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const isFiltered = useMemo(() => !!Object.keys(selectedFilters).length, [selectedFilters])

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: DEFAULT_SEARCH_VALUE
    })
    if(isFiltered){
      dispatch({
        type: READ_FILTERED_RESULTS_REQUEST,
        payload: {data: {firstCount: 10, hashId: hotels.hash}, filterData: selectedFilters}
      })
    }else {
      searchTours()
    }

    return () => dispatch({type: CLEAR_CATALOG_DATA})
  }, []); // eslint-disable-line


  const loadMoreResults = () => {
    if(isFiltered){
      dispatch({
        type: READ_FILTERED_RESULTS_REQUEST,
        payload: {data: {firstCount: hotels?.sResult?.length + 10, hashId: hotels.hash}, filterData: selectedFilters}
      })
    }else {
      dispatch({
        type: READ_RESULTS_REQUEST,
        payload: {firstCount: hotels?.sResult?.length + 10, hashId: hotels.hash}
      })
    }

  };

  const toggleCollapsed = useCallback((item) => {
    const newCollapsed = collapsed.includes(item) ? collapsed.filter(el => el !== item) : [...collapsed, item];
    setCollapsed(newCollapsed);
  }, [collapsed]);

  const changeSelectedFilters = (name, typeId, id) => {
    let newItems = selectedFilters[name] ? [...selectedFilters[name].Values] : [];
    newItems = newItems.includes(id) ? newItems.filter(item => item !== id) : [...newItems, id];
    const newSelectedFilters = {...selectedFilters, [name]: {TypeId: typeId, Values: newItems}};
    setSelectedFilters(newSelectedFilters);
    dispatch({type: READ_FILTERED_RESULTS_REQUEST, payload: {data: {firstCount: 10, hashId: hotels.hash}, filterData: newSelectedFilters}})
  }


  return (
    <div className='Catalog' data-testid='catalog-page'>

      <Search setSelectedFilters={setSelectedFilters}/>

      <div className='catalog__result'>
        {!loadingFilters
          ? <div className="catalog__filters">
            {filters?.map(([key, value]) => !!value.Values.length &&
              <div key={value.TypeId}>
                <h5
                  onClick={() => toggleCollapsed(value.TypeId)}
                  className={!collapsed.includes(value.TypeId) ? 'active' : ''}
                >
                  {key}
                </h5>
                <Collapse in={!collapsed.includes(value.TypeId)} timeout="auto" unmountOnExit>
                  <FormGroup>
                    {value.Values.map(el =>
                      <FormControlLabel
                        key={el.Id}
                        control={(
                          <Checkbox
                            value={selectedFilters[key]?.Values.includes(el.Id)}
                            onClick={() => changeSelectedFilters(key, value.TypeId, el.Id)}
                          />
                        )}
                        label={el.Name}
                      />
                    )}
                  </FormGroup>
                </Collapse>
              </div>
            )}
          </div>
          : <Loader/>
        }
        {!loadingHotels
          ? !!hotels?.sResult.length
            ? <div className="catalog__hotels">
              {hotels?.sResult?.map(item =>
                <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
              )}
              {hotels && !hotels?.stopHotelSearch && hotels?.sResult.length >= 10 && (
                <Button doAction={loadMoreResults} title='Показати більше' color='primary'/>
              )}
            </div>
            : <div className='catalog__noResults'>
                <p className='error'>{error}</p>
                <p>Sorry we haven't found any tours</p>
              </div>
          : <Loader/>
        }
      </div>
    </div>
  )
};

export default Catalog;
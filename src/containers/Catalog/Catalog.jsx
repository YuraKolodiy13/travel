import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_CATALOG_DATA, READ_RESULTS_REQUEST} from "../../actions/catalog";
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

const Catalog = () => {

  const hotels = useSelector((state) => state.catalog.hotels);
  const flights = useSelector((state) => state.general.flights);
  const loading = useSelector((state) => state.catalog.loading);
  const filters = useSelector((state) => state.catalog.filters);
  const dispatch = useDispatch();
  const {searchTours} = useSearch();
  const [collapsed, setCollapsed] = useState([]);

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: {
        body: DEFAULT_SEARCH_VALUE
      }
    })
    searchTours()
    return () => dispatch({type: CLEAR_CATALOG_DATA})
  }, []); // eslint-disable-line


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

  const toggleCollapsed = useCallback((item) => {
    const newCollapsed = collapsed.includes(item) ? collapsed.filter(el => el !== item) : [...collapsed, item];
    setCollapsed(newCollapsed);
  }, [collapsed]);

  return (
    <div className='Catalog' data-testid='catalog-page'>

      <Search/>

      {!loading
        ? <>
            {!!hotels?.sResult.length
              ? <div className='catalog__result'>
                  <div className="catalog__filters">
                    {filters && Object.entries(filters.filter).map(([key, value]) =>
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
                              <FormControlLabel key={el.Id} control={<Checkbox />} label={el.Name} />
                            )}
                          </FormGroup>
                        </Collapse>

                      </div>
                    )}
                  </div>
                  <div className="catalog__hotels">
                    {hotels?.sResult?.map(item =>
                      <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
                    )}
                    {hotels && !hotels?.stopHotelSearch && hotels?.sResult.length >= 10 && (
                      <Button doAction={loadMoreResults} title='Показати більше' color='primary'/>
                    )}
                  </div>
                </div>
              : <p>Sorry we haven't found any tours, please choose another city</p>
            }
          </>
        : <Loader/>
      }
    </div>
  )
};

export default Catalog;
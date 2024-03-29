import CountryCard from "../../components/CountryCard/CountryCard";
import Collapse from "@mui/material/Collapse";
import React, {useEffect, useMemo, useState} from "react";
import './Countries.scss';
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_FORM_REQUEST} from "../../actions/general";
import Button from "../../components/Button/Button";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {useLocation} from "react-router";
import {DEFAULT_SEARCH_VALUE} from "../../helpers/constants";
import {selectSearchForm} from "../../selectors/general";

const Countries = () => {

  const searchForm = useSelector(selectSearchForm);
  const [showAllOtherCountries, setShowAllOtherCountries] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = useMemo(() => location.pathname.split('/').slice(1), [location.pathname]);

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: DEFAULT_SEARCH_VALUE
    })
  }, [dispatch])

  return (
    <div className="countries">
      <Breadcrumbs path={path}/>
      <div className="popular-countries">
        <h4>Популярні країни</h4>
        <ul>
          {searchForm?.destination?.options?.countries.popular.map(item =>
            <CountryCard key={item.id} name={item.name} imgSrc={item.alpha2}/>
          )}
        </ul>
      </div>
      <div className="others-countries">
        <h4>Інші країни</h4>
        <ul>
          {searchForm?.destination?.options?.countries.others.slice(0, 6).map(item =>
            <CountryCard key={item.id} name={item.name} imgSrc={item.alpha2}/>
          )}
        </ul>
        {searchForm?.destination?.options?.countries.others.length > 6 && (
          <>
            <Collapse in={showAllOtherCountries} timeout="auto" unmountOnExit>
              <ul>
                {searchForm?.destination?.options?.countries.others.slice(6).map(item =>
                  <CountryCard key={item.id} name={item.name} imgSrc={item.alpha2}/>
                )}
              </ul>
            </Collapse>
            <Button
              title={`Показати ${showAllOtherCountries ? 'менше' : 'більше'}`}
              color='primary'
              doAction={() => setShowAllOtherCountries(!showAllOtherCountries)}
            />
          </>
        )}

      </div>

    </div>
  )
}

export default Countries;
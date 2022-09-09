import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_TOURS_BY_COUNTRY_REQUEST} from "../../actions/tours";
import {useLocation, useParams} from "react-router";
import {COUNTRIES_IDS} from "../../helpers/constants";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import TopHotelCard from "../../components/TopHotelCard/TopHotelCard";
import Loader from "../../components/Loader/Loader";
import Pagination from "@mui/material/Pagination";
import {selectToursByCountry, selectLoading} from "../../selectors/tours";
const Tours = () => {

  const toursByCountry = useSelector(selectToursByCountry);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const {countryCode} = useParams();
  const location = useLocation()
  const path = useMemo(() => location.pathname.split('/').slice(1), [location.pathname]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch({
      type: GET_TOURS_BY_COUNTRY_REQUEST,
      payload: {
        body: {
          countryId: String(COUNTRIES_IDS[countryCode.toLocaleLowerCase()].id),
        }
      }
    })
  }, [dispatch, countryCode]);

  const onChangePage = (e, value) => {
    setCurrentPage(value)
  }

  return (
    <div className='Tours'>
      <Breadcrumbs path={path}/>
      {!loading
        ? !!toursByCountry.length
          ? <div className="tours__items">
              {toursByCountry?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item =>
                <TopHotelCard key={item.info.hotel.mapKey} item={item.info}/>
              )}
              <Pagination
                count={Math.ceil(toursByCountry.length / itemsPerPage)}
                shape="rounded"
                page={currentPage}
                onChange={onChangePage}
              />
            </div>
          : <div className='no-content'>
              <img src={`https://farvater.travel/img/country_photos/md/${countryCode}.jpg`} alt=""/>
              <h3>Sorry we haven't found {COUNTRIES_IDS[countryCode.toLocaleLowerCase()].name}'s top hotels</h3>
              <p>Please choose another country</p>
            </div>
        : <Loader/>
      }

    </div>
  )
};

export default Tours;
import {GET_TOUR_REQUEST} from "../../actions/general";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import './Hotel.scss'

const Hotel = () => {

  const dispatch = useDispatch();
  const tour = useSelector((state) => state.general.tour);

  useEffect(() => {
    dispatch({type: GET_TOUR_REQUEST, payload: {pathname: window.location.pathname, body: {}}});
  }, []);

  return (
    <div className="Hotel">
      <h1>{tour.title}</h1>

      <div className="hotel-main">
        <div className="hotel-gallery">
          <GalleryGrid images={tour.images}/>
        </div>
        <div className="hotel-info">
          виліт
        </div>
      </div>

      <div className="hotel-description">
        <h2>Опис готелю</h2>
        <div dangerouslySetInnerHTML={{__html: tour.description}}/>
      </div>
      <div className='hotel-services' dangerouslySetInnerHTML={{__html: tour.services}}/>
    </div>
  )
};

export default Hotel;
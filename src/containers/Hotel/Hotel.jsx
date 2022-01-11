import {SEARCH_FORM_REQUEST} from "../../actions/general";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

const Hotel = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const searchForm = useSelector((state) => state.general.searchForm);

  dispatch({
    type: SEARCH_FORM_REQUEST,
    payload: {
      id,
      body: {}
    }
  });

  return (
    <div className="Hotel">
      {/*<div dangerouslySetInnerHTML={{__html:}}/>*/}
    </div>
  )
};

export default Hotel;
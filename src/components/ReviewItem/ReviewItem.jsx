import React, {memo, useState} from "react";
import './ReviewItem.scss';

const ReviewItem = ({name, date, title, text, score, type}) => {
  const [expanded, setExpanded] = useState(false);

  if(!text) return null;

  return (
    <li className='ReviewItem'>
      <div className="reviewItem__info">
        <h5>{name} <span>{date}</span></h5>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <p
          className={text.length > 500 && !expanded ? 'expand-text' : ''}
          dangerouslySetInnerHTML={{__html: expanded ? text : text.slice(0, 500)}}
        />
        {text.length > 500 && (
          <span onClick={() => setExpanded(!expanded)}>Read {expanded ? 'Less' : 'More'}</span>
        )}
      </div>
      <div className="reviewItem__mark">
        <div className='reviewItem__rating'>{score?.replace(',', '.') * 2}</div>
        <img src={`https://farvater.travel/img/reviews/${type}.png`} alt=""/>
      </div>
    </li>
  )
};

export default memo(ReviewItem);
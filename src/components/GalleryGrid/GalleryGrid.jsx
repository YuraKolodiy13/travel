import React from "react";
import {Gallery, Item} from "react-photoswipe-gallery";
import './GalleryGrid.scss'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

const GalleryGrid = ({images}) => {

  return (
    <div className='GalleryGrid'>
      <Gallery>
        <div className="grid-gallery">
          {images?.map((item, i) =>
            <Item
              key={i}
              original={item}
              thumbnail={item}
              width='1024'
              height='683'
            >
              {({ ref, open }) => (
                <div className="destination" ref={ref} onClick={open} style={{backgroundImage: `url(${item})`}}>
                  <div className="overlay"/>
                  {i === 4 && <span>+{images.length - i}</span>}
                </div>
              )}
            </Item>
          )}
        </div>
      </Gallery>
    </div>
  )
};

export default GalleryGrid;
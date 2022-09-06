import {render} from "@testing-library/react";
import React from "react";
import GalleryGrid from "./GalleryGrid";
import {tourMock} from "../../mock/tour";

describe('gallery component', () => {

  const images = tourMock.images;

  test('gallery snapshot', () => {
    const gallery = render(
      <GalleryGrid images={images} />
    );
    expect(gallery).toMatchSnapshot();
  });
})
import {render} from "@testing-library/react";
import React from "react";
import GalleryGrid from "./GalleryGrid";
import {tourMock} from "../../mock/tour";
import userEvent from "@testing-library/user-event/dist";

describe('gallery component', () => {

  const images = tourMock.images;

  test('gallery snapshot', () => {
    const gallery = render(
      <GalleryGrid images={images} />
    );
    expect(gallery).toMatchSnapshot();
  });

  test('gallery should contain images and open gallery view', () => {
    const {container} = render(
      <GalleryGrid images={images} />
    );
    expect(screen.get);
    expect(container.get);
    expect(container.getElementsByClassName('destination').length).toBeGreaterThan(5);
    expect(container.getElementsByClassName('destination')[0]).toBeInTheDocument();
    userEvent.click(container.getElementsByClassName('destination')[0]);
    expect(container.getElementsByClassName('pswp')[0]).toHaveClass('pswp--open');
  });
})
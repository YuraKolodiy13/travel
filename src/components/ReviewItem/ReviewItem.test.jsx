import {render} from '@testing-library/react';
import ReviewItem from "./ReviewItem";
import React from "react";
import userEvent from "@testing-library/user-event/dist";

describe('testing ReviewItem component', () => {

  test('render ReviewItem component', () => {
    const {getByRole} = render(<ReviewItem text='test'/>);
    expect(getByRole('listitem')).toBeInTheDocument();
  })

  test('render ReviewItem without required props', () => {
    const {queryByRole} = render(<ReviewItem/>);
    expect(queryByRole('listitem')).toBeNull();
  })

  test('check if Read more btn exists', () => {
    const {queryByText} = render(<ReviewItem text='Lorem ipsum dololpa debitis deserunt dolosed sit sunt ullam unde veniam voluptas voluptates voluptatibus! Amet ea eos eveniet itaque qui quibusdam rem repellendus temporibus, voluptas. Beatae debitis dolore modi temporibus! Ad aliquam, exercitationem hic in sequi vitae. Accusamus aliquid amet assumenda at commodi dignissimos distinctio earum eligendi, enim, esse nesciunt optio pariatur placeat totam veniam, veritatis voluptatibus. Blanditiis eos ex illum nam nemo nihil officia quasi quod, soluta.'/>);
    expect(queryByText('Read More')).toBeInTheDocument();
  })

  test('check if Read more btn doesnt exist', () => {
    const {queryByText} = render(<ReviewItem text='test'/>);
    expect(queryByText('Read More')).toBeNull();
  })

  test('click on Read More/Less', () => {
    const {queryByText} = render(<ReviewItem text='Lorem ipsum dololpa debitis deserunt dolosed sit sunt ullam unde veniam voluptas voluptates voluptatibus! Amet ea eos eveniet itaque qui quibusdam rem repellendus temporibus, voluptas. Beatae debitis dolore modi temporibus! Ad aliquam, exercitationem hic in sequi vitae. Accusamus aliquid amet assumenda at commodi dignissimos distinctio earum eligendi, enim, esse nesciunt optio pariatur placeat totam veniam, veritatis voluptatibus. Blanditiis eos ex illum nam nemo nihil officia quasi quod, soluta.'/>);
    userEvent.click(queryByText('Read More'));
    expect(queryByText('Read Less')).toBeInTheDocument();
    userEvent.click(queryByText('Read Less'));
    expect(queryByText('Read More')).toBeInTheDocument();
  })

})
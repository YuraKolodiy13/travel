import {render} from "@testing-library/react";
import React from "react";
import GalleryGrid from "./GalleryGrid";

describe('gallery component', () => {

  const images = [
    'https://img4.farvater.travel/mapkey/34015/0?size=original',
    'https://img4.farvater.travel/hotelimages/64fd1575-598c-4c39-8c46-f5621ff1682f?size=original',
    'https://img4.farvater.travel/hotelimages/5b66631d-eeea-4e30-9e25-fdfe9d55cbcd?size=original',
    'https://img4.farvater.travel/hotelimages/34981905-fa0e-47b9-b310-2d75ef189382?size=original',
    'https://img4.farvater.travel/hotelimages/ec935f6a-1293-4360-b703-08a6797c3e1a?size=original',
    'https://img4.farvater.travel/hotelimages/f25926b0-25c6-423d-8922-fe5b77782a56?size=original',
    'https://img4.farvater.travel/hotelimages/8a310410-b21b-4c6b-94f2-4766237fefc9?size=original',
    'https://img4.farvater.travel/hotelimages/1f0db15b-1d45-48da-b608-c503d345edc1?size=original',
    'https://img4.farvater.travel/hotelimages/6bea2ca4-fd03-4759-a17c-269c08a3c59a?size=original',
    'https://img4.farvater.travel/hotelimages/2a6d08f9-3a83-43ed-993c-f4656aa0e4f2?size=original',
    'https://img4.farvater.travel/hotelimages/a585642f-ae0e-4dd4-8dc9-9b301c716ab4?size=original',
    'https://img4.farvater.travel/hotelimages/15bf0363-03dd-482c-8653-70fbe8755d19?size=original',
    'https://img4.farvater.travel/hotelimages/c66e2382-a840-43fd-b343-aa57c79d6ffd?size=original',
    'https://img4.farvater.travel/hotelimages/d8bdfea6-d434-445f-8e9f-35a3950a6dd1?size=original',
    'https://img4.farvater.travel/hotelimages/b1c0a457-a4ba-4799-9082-9f65bbafc190?size=original',
    'https://img4.farvater.travel/hotelimages/27eed90a-bf32-4b5e-9192-0f48f127fb40?size=original',
    'https://img4.farvater.travel/hotelimages/f085ad4e-9902-48fb-ab6d-312775bbdf50?size=original',
    'https://img4.farvater.travel/hotelimages/d34a1a92-169d-449f-8ac1-2bc4d0d87d5d?size=original',
    'https://img4.farvater.travel/hotelimages/da1aeb77-36a7-461f-8dbe-6a8c05261404?size=original',
    'https://img4.farvater.travel/hotelimages/c48b1a8a-aa09-43e0-96a4-420557247f8e?size=original',
    'https://img4.farvater.travel/hotelimages/dba2c657-2e9a-4712-8f4d-16021341206e?size=original',
    'https://img4.farvater.travel/hotelimages/e8a431b9-21e4-4637-9632-00d317a95047?size=original',
    'https://img4.farvater.travel/hotelimages/10b43a98-e525-4895-8fcd-c45e801b1434?size=original',
    'https://img4.farvater.travel/hotelimages/5ba8abd9-3a68-492e-ab85-444bd66327cb?size=original',
    'https://img4.farvater.travel/hotelimages/75d37a57-028e-4717-9f3a-c6bd33a94564?size=original'
  ];

  test('gallery snapshot', () => {
    const gallery = render(
      <GalleryGrid images={images} />
    );
    expect(gallery).toMatchSnapshot();
  });
})
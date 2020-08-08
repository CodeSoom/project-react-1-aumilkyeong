import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  GoogleMap,
  LoadScript,
  StreetViewService,
  StreetViewPanorama,
} from '@react-google-maps/api';

import {
  setCoordinates,
} from '../slice';

import { get } from '../utils';

export default function MapContainer() {
  const dispatch = useDispatch();

  const coordinates = useSelector(get('coordinates'));
  const { latitude, longitude } = useSelector(get('randomSpot'));

  const mapContainerStyle = {
    width: '100%',
    height: '92vh',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const onLoad = (streetViewService) => {
    streetViewService.getPanorama({
      location: center,
      preference: 'best',
      radius: 5000,
    }, (data, status) => {
      // TODO: api 응답 직접 찍어보기
      console.log(
        'StreetViewService results',
        { data, status },
      );

      if (status !== 'OK') {
        console.log('API 재호출 필요');
      }

      // TODO: 한국이 아닌 경우도 API 재호출 필요... 한국만 나오게할 더 좋은 방법은?

      const { latLng } = data.location;

      dispatch(setCoordinates(latLng));
    });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCnV3P6n1bq76ebCroUSE0NI4Zuu927QZg"
    >
      <GoogleMap
        id="circle-example"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        <StreetViewService
          onLoad={onLoad}
        />
        <StreetViewPanorama
          position={coordinates}
          visible
        />
      </GoogleMap>
    </LoadScript>
  );
}

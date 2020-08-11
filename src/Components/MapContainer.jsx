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

  function fetchPanorama(streetViewService) {
    const panoramaOptions = {
      location: center,
      preference: 'best',
      radius: 50000, // meters
    };

    streetViewService.getPanorama(panoramaOptions, (data, status) => {
      // console.log(
      //   'StreetViewService results',
      //   { data, status },
      // );

      if (status !== 'OK') {
        console.error('result code', status);
      }

      const latLng = {
        lat: data.location.latLng.lat(),
        lng: data.location.latLng.lng(),
      };

      dispatch(setCoordinates(latLng));
    });
  }

  const onLoad = (streetViewService) => {
    fetchPanorama(streetViewService);
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

import React from 'react';

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import { getRandomSpot } from '../RandomSpot';

const CLIENT_ID = '2q6vh1ehsm';

const { latitude, longitude } = getRandomSpot('korea');

export default function MapContainer() {
  return (
    <>
      <RenderAfterNavermapsLoaded
        ncpClientId={CLIENT_ID}
        submodules={['panorama']}
        error={<p>ERROR OCCURED</p>}
        loading={<p>Processing...</p>}
      >
        <NaverMap
          mapDivId="panorama"
          style={{
            width: '100vw',
            height: '100vh',
          }}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={10}
        />
      </RenderAfterNavermapsLoaded>
    </>
  );
}

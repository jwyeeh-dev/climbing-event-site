import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

export default function Kakao() {
    return (
        <Map
            center={{ lat: 33.450701, lng: 126.570667 }}
            style={{ width: '300px', height: '500px' }}
            level={3}
        />
    );
}
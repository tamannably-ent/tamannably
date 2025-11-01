'use client';

import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};
// 15.143187750194295, 76.91600199083364

type latlng = {
    lat: number,
    lng: number
};

let center = {
  lat: 15.143187750194295,
  lng: 76.91600199083364
};

const MapComponent = (params: latlng) => {
    
    const {lat, lng} = params;
    // console.log(`from Maps: lat: ${lat} lng:${lng}`);
    center.lat = lat;
    center.lng = lng;
    console.log(center)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [address, setAddress] = useState<string>('');

  useEffect(()=>{
    setMarkerPosition({lat, lng})
  },[params])
  

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkerPosition({ lat, lng });
      
      // Perform reverse geocoding
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK') {
          if (results && results[0]) {
            setAddress(results[0].formatted_address);
          } else {
            setAddress('No address found');
          }
        } else {
          setAddress('Geocoder failed due to: ' + status);
        }
      });
    }
  }, []);

  const onLoad = useCallback(function callback(mapInstance: google.maps.Map) {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p><strong>Latitude:</strong> {markerPosition?.lat || 'N/A'}</p>
        <p><strong>Longitude:</strong> {markerPosition?.lng || 'N/A'}</p>
        <p><strong>Address:</strong> {address || 'Click on the map to get an address'}</p>
      </div>
    </div>
  ) : <></>;
}

export default MapComponent;
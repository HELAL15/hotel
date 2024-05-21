import React, { memo } from 'react'
import { MapContainer } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ServiceLocation = () => {
  const position = [51.505, -0.09]
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
        <div className='pb-4 relative border-b border-b-neutral-200 w-fit'>
          <h2 className='text-2xl font-semibold'>Location</h2>
          <p>San Diego, CA, United States of America (SAN-San Diego Intl.)</p>
        </div>
        <div className='my-4'>
        <iframe className='rounded-[30px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6822576736668!2d31.392158124506444!3d31.03510117095697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d7f8f216a31%3A0x25a14ab3f68f668c!2sSmart%20Vision!5e0!3m2!1sar!2seg!4v1716283830609!5m2!1sar!2seg"
          width="100%" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </>
  )
}

export default memo(ServiceLocation)

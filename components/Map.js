import {React, useState, useMemo, useCallback, useRef} from 'react'
import { useJsApiLoader, GoogleMap, StreetViewPanorama } from '@react-google-maps/api'
// require('dotenv').config()

const center = {lat: 19.43270444524167, lng: -99.13318543974893}

export default function Map () {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    
      })
    
      if(!isLoaded) {
        return <div>Loading...</div>
      }

    return(
        <div className='w-full h-full'>
            <GoogleMap
            center={center}
            zoom={14}
            mapContainerStyle={{width: '100%', height: '100%'}}
            options={{
                zoomControl: false,
                fullscreenControl:false
            }}
            >

            </GoogleMap>
        </div>
    )
}
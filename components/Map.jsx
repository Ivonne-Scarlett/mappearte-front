import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useLoadScript, GoogleMap, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api'
import mapStyles from './mapStyles'
import spray from '../public/icons/spray.png'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import '@reach/combobox/styles.css'
import { getArtistById, getStreetart } from '../lib/api';

const libraries = ['places']
const mapContainerStyle = {width:'90vw', height:'32rem'}
const center = {lat: 19.43270444524167, lng: -99.13318543974893}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
  fullscreenControl: false,
  clickableIcons: false
}
const icon = '../icons/spray.png' //TODO: Verificar si usar este o el import de la linea 4

export default function Map () {
  const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      libraries
  })
  // const [currentLocation, setCurrentLocation] = useState(null)
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getStreetart()
    .then(response => {
      const streetArt = response?.data?.streetArt;
      setMarkers(streetArt);
    })
  }, [])

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
    {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    }])
  }, [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
      
  const panTo = useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(14)
  }, [])

  if (loadError) return "Error";
  if (!isLoaded) return "Loading..."

  // useEffect(() => {
  //     window.navigator.geolocation.getCurrentPosition(
  //         ( {coords} ) => {
  //           const {latitude, longitude} = coords
  //           setCurrentLocation({lat: latitude, lng:longitude})
  //         },
  //         error => {
  //           window.alert(error)
  //           setCurrentLocation({latitude: null, longitude: null})
  //         }
  //     )
  // }, [])

  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries
  //   })
  
  //   if(!isLoaded) {
  //     return <div>Loading...</div>
  //   }

  const onPointClick = (pointData) => {
    getArtistById(pointData.artistId[0]).then(response => {
      setSelected({...pointData, artist:response.artists})
    })
  }
 
  return(
      <div>
          <GoogleMap
          id='map'
          center={center}
          zoom={14}
          mapContainerStyle={mapContainerStyle}
          options={options}
          streetViewControl={true}
          onLoad={onMapLoad}
          className='w-full'
          >
            <h1 className='absolute z-10 text-blueP hidden md:block right-4 mt-4'>MappeArte</h1>
            <Search panTo={panTo} className='text-black' />
            <Locate panTo={panTo}/>

          <MarkerClusterer>
            {(clusterer) => 
              markers.map((marker) => (
              <Marker
                key={marker._id}
                position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.lng)}}
                icon={{
                  url: spray,
                  scaledSize: new window.google.maps.Size(30, 30),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15)
                }}
                onClick={() => {
                  onPointClick(marker)
                }}
                clusterer={clusterer}
              />
            ))
            }
            
            </MarkerClusterer>

            {selected ? (
            <InfoWindow
              position={{ lat: parseFloat(selected.lat), lng: parseFloat(selected.lng)}}
              onCloseClick={() => {
                setSelected(null)
              }}
            >
              <div>
                <h2 className="text-black text-3xl font-normal">
                  <span className="text-black text-3xl font-light">Artista: </span> 
                  {selected.artist?.artist ? selected.artist?.artist : 'Job'}
                </h2>
                <p className="text-black text-xl">Dirección: {selected.address}</p>
                <div>
                  <img 
                    src={selected.muralImg} 
                    alt="imagen"
                    style={{width:'100%'}} 
                    className="border border-solid border-white"
                  /> 
                </div>
              </div>
            </InfoWindow>
            ) : null}
          </GoogleMap>
      </div>
  )
}

function Locate({panTo}) {
return ( 
  <button
    className='absolute bg-transparent border-0 h-12 z-10'
    onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        () => null
        )
    }}>
    <img src="../icons/compass.png" alt="compass" className='h-12 m-2'/>
  </button>
)
}

function Search({panTo}) {
const { ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
  requestOptions: {
    location: {lat: () => 19.43270444524167, lng: () => -99.13318543974893},
    radius: 200 * 1000
  }
})

return (
  <div className='absolute left-2/4 -translate-x-1/2 z-10'>
    <Combobox
      onSelect={async (address) => {
        setValue(address, false)
        clearSuggestions()
        try {
          const results = await getGeocode({address})
          const {lat, lng } = await getLatLng(results[0])
          panTo({lat, lng})
        } catch (error) {
          console.log('error')
        }
      
      }}
    > 
    <ComboboxInput
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
      disabled={!ready}
      placeholder='Busca una dirección'
      className="placeholder:text-slate-200 text-white font-normal w-[10rem] md:w-[18rem] bg-cyan-600 mt-4 md:pl-4 border-2 border-backgroundP rounded-lg"
    />
    <ComboboxPopover>
      <ComboboxList className="text-black font-normal">
        {status === 'OK' && data.map(({id, description}) => (
          <ComboboxOption key={id} value={description} />
        ))}
     </ComboboxList>
    </ComboboxPopover>
    </Combobox>
  </div>
)}
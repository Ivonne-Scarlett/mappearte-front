import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import mapStyles from './mapStyles'
import spray from '../public/icons/spray.png'
import usePlacesAutocomplete, {getGeocode, getLatlng} from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import '@reach/combobox/styles.css'

const libraries = ['places']
const mapContainerStyle = {width: '100vw', height: '100vh'}
const center = {lat: 19.43270444524167, lng: -99.13318543974893}
const options = {
  styles: mapStyles, //TODO: Verificar por que no funciona el estilo del mapa(Colores)
  disableDefaultUI: true,
  zoomControl: false,
  fullscreenControl: false
}
const icon = '../icons/spray.png' //TODO: Verificar si usar este o el import de la linea 4

export default function Map () {
  const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries
  })
  // const [currentLocation, setCurrentLocation] = useState(null)
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)

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

  return(
      <div>
        <h1 className='absolute z-10'>Mappearte</h1>

        <Search panTo={panTo} />
        <Locate panTo={panTo}/>

          <GoogleMap
          id='map'
          center={center}
          zoom={14}
          mapContainerStyle={mapContainerStyle}
          options={options}
          streetViewControl={true}
          onClick={onMapClick}
          onLoad={onMapLoad}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.time.toISOString()}
                position={{lat: marker.lat, lng: marker.lng}}
                icon={{
                  url: spray,
                  scaledSize: new window.google.maps.Size(30, 30),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15)
                }}
                onClick={() => {
                  setSelected(marker)
                }}
              />
            ))}

            {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng}}
              onCloseClick={() => {
                setSelected(null)
              }}
            >
              <div>
                <h2>Artista:</h2>
                <p>Dirección:</p>
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
    className='absolute top-75 right-16 bg-transparent border-0 h-12 z-10'
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
    <img src="../icons/compass.png" alt="compass" className='h-12'/>
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
  <div className='absolute top-75 left-2/4 -translate-x-1/2 w-full max-w-md z-10'>
    <Combobox
      onSelect={async (address) => {
        setValue(address, false)
        clearSuggestions()
        try {
          const results = await getGeocode({address})
          const {lat, lng } = await getLatlng(results[0])
          panTo({lat, lng})
        } catch (error) {
          console.log('error')
        }
        console.log(address)
      }}
    > 
    <ComboboxInput
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
      disabled={!ready}
      placeholder='Busca una dirección'
    />
    <ComboboxPopover>
      <ComboboxList>
        {status === 'OK' && data.map(({id, description}) => (
          <ComboboxOption key={id} value={description} />
        ))}
     </ComboboxList>
    </ComboboxPopover>
    </Combobox>
  </div>
)}
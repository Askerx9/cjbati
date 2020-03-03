import React from "react"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


const position = [50.76389, 4.29653]
const MyMaps = () => {

  if (typeof window !== 'undefined') {
    return (
      <Map className={'map'} center={position} zoom={15}>
        <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        <Marker position={position}>
          <Popup>CJBati Rénovation</Popup>
        </Marker>
      </Map>
    )
  }
  return null
}

export default MyMaps

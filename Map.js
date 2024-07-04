import { useEffect } from "react";
import {L} from 'react-leaflet';
function Map(){
    useEffect(()=>{
       
    },[])
return(
    <div>
        {()=>{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
              } else {
                alert("Geolocation is not supported by this browser");
              }
          
            const success=(position)=> {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              getMap(latitude, longitude);
            }
          
            const error=()=> {
              alert("Unable to retrieve location");
            }
          
            const getMap=(latitude, longitude) =>{
              const m = L.map("map")
              const map=m.setView([latitude, longitude], 5);
              L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
              L.marker([latitude, longitude]).addTo(map);
            }
        }}()
        <div id="map" style="height: 500px"></div>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    
    </div>)
}
export default Map;
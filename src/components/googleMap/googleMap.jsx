import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD8jfj9Z4vvhBqHsH3Ocu-TUUUt39cl-_c" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        >
          <div lat={59.955413} lng={30.337844}>
            My Marker
          </div>
        </GoogleMapReact>
      </div>
    </>
  );
};

export default GoogleMap;

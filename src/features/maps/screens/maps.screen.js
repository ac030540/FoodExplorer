import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
import {
  Loading,
  LoadingContainer,
} from "../../restaurants/screens/restaurants.styles";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapsScreen = () => {
  const {
    location,
    error: locationError,
    isLoading: locationLoading,
  } = useContext(LocationContext);
  const {
    restaurants = [],
    error: restaurantsError,
    isLoading: restaurantsLoading,
  } = useContext(RestaurantsContext);
  const hasError = !!locationError || !!restaurantsError;
  const isLoading = restaurantsLoading || locationLoading;

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} size={50} />
        </LoadingContainer>
      )}
      {hasError && (
        <Map
          region={{
            latitude: 0,
            longitude: 0,
          }}
        />
      )}
      {!hasError && !isLoading && (
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <MapCallout restaurant={restaurant} />
              </Marker>
            );
          })}
        </Map>
      )}
    </>
  );
};

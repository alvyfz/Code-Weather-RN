/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function IconWeather(name: any, height = 60) {
  const uri = `https://openweathermap.org/img/wn/${name}@2x.png`;
  return (
    <>
      {name && (
        <Image
          source={{
            uri,
          }}
          style={{width: 60, height}}
        />
      )}
    </>
  );
}

export default IconWeather;

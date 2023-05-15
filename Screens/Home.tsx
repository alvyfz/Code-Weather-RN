/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Utils/colors';
import useFetch from '../Hooks/useFetch';
import {endpoint} from '../Utils/constant';

function Home(): ReactElement {
  const location = useSelector(state => state?.location?.coords);
  const [data, isLoading] = useFetch(endpoint.oneCallWeather, {
    lat: location?.latitude,
    lon: location?.longitude,
    exclude: 'daily',
  });
  console.log(location?.latitude, location?.longitude);
  console.log(data, isLoading);

  return (
    <View>
      <View
        style={{
          padding: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Mountain View, CA
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '500'}}>Overseas</Text>
        <Text>Light breeze</Text>
        <Text style={{fontSize: 60, fontWeight: '200'}}>57℉</Text>
        <Text>Feels like 57℉</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.gray,
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Wind: 5.8mph N <Icon name="location-arrow" size={18} />
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Pressure: 29.97inHg
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Humidity: 86%
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Visibility: 6.2mi
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              UV index: 0.0
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Dev point: 53℉
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;

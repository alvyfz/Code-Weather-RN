/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Utils/colors';
import useFetch from '../Hooks/useFetch';
import {endpoint, imgWeather} from '../Utils/constant';

function Home(): ReactElement {
  const location = useSelector(state => state?.location?.coords);
  const [data, isLoading] = useFetch(endpoint.oneCallWeather, {
    lat: location?.latitude,
    lon: location?.longitude,
  });
  console.log(data);
  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
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
              {data?.name}, {data?.sys?.country}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: imgWeather(data?.weather?.[0]?.icon)}}
                style={{width: 60, height: 60}}
              />
              <View>
                <Text style={{fontWeight: '500'}}>
                  {data?.weather?.[0]?.main}
                </Text>
                <Text>{data?.weather?.[0]?.description}</Text>
              </View>
            </View>
            <Text style={{fontSize: 60, fontWeight: '200'}}>
              {data?.main?.temp}℉
            </Text>
            <Text>Feels like {data?.main?.feels_like}℉</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.gray,
              paddingHorizontal: 15,
              paddingVertical: 10,
              margin: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Wind: {data?.wind?.speed}mph N{' '}
                  <Icon name="location-arrow" size={18} />
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Pressure: {data?.main?.pressure}inHg
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Humidity: {data?.main?.humidity}%
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Visibility: {data?.visibility}mi
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  UV index: {data?.clouds?.all}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Dev point:{' '}
                  {Math.round(
                    (data?.main?.temp_min + data?.main?.temp_min) / 2,
                  )}
                  ℉
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export default Home;

import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  useColorScheme,
  Text,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';

import AntDesign from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Swiper
      // eslint-disable-next-line react-native/no-inline-styles
      buttonWrapperStyle={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
      showsButtons={true}
      loop={true}
      paginationStyle={{
        marginRight: w * 0.7,
        marginBottom: h * 0.02,
      }}
      activeDotColor={isDarkMode ? Colors.darker : Colors.lighter}
      dotColor={isDarkMode ? Colors.lighter : Colors.darker}
      nextButton={
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            width: 60,
            justifyContent: 'center',
            backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
          }}>
          <AntDesign
            name="arrowright"
            size={22}
            color={isDarkMode ? Colors.darker : Colors.lighter}
          />
        </View>
      }
      prevButton={
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            width: 60,
            justifyContent: 'center',
            backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
            marginHorizontal: 20,
          }}>
          <AntDesign
            name="arrowleft"
            size={22}
            color={isDarkMode ? Colors.darker : Colors.lighter}
          />
        </View>
      }>

      <View style={styles.slide}>
        <Image source={require('./assets/images/1.jpg')} style={styles.img} />
        <Text
          style={[
            styles.title,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
          React Native UI-kit
        </Text>
        <Text style={[
            styles.text,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('./assets/images/2.jpg')} style={styles.img} />
        <Text style={[
            styles.title,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
         Get Started
        </Text>
        <Text style={[
            styles.text,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('./assets/images/5.jpg')} style={styles.img} />
        <Text style={[
            styles.title,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
           Discover
        </Text>
        <Text style={[
            styles.text,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('./assets/images/6.jpg')} style={styles.img} />
        <Text style={[
            styles.title,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
         Welcome Devhub
        </Text>
        <Text style={[
            styles.text,
            {color: isDarkMode ? Colors.lighter : Colors.darker},
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
  </Swiper>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: 'center',
    borderBottomRightRadius: 80,
    borderTopLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 30,
  },
  text: {
    color: '#111',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
  },
});

export default App;

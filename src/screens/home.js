import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import Videos from '../components/videos';

function Home(props) {
  const {navigation} = props;
  const videos = [
    {
      thumbnail: 'https://img.youtube.com/vi/L6AYquaHvWk/0.jpg',
      videoId: 'L6AYquaHvWk',
      title: 'React Native - navigataion',
    },
    {
      thumbnail: 'https://img.youtube.com/vi/5UmJwPivCHE/0.jpg',
      videoId: '5UmJwPivCHE',
      title: 'Johnny Depp vs Amber Heard Case ',
    },
    {
      thumbnail: 'https://img.youtube.com/vi/xf2DPY3vGto/0.jpg',
      videoId: 'xf2DPY3vGto',
      title: 'Android Native Vs Apple Native',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Videos videoData={videos} navigation={navigation}/>
        {/* <TouchableOpacity style={styles.videoBox}>
          <Image
            source={{
              uri: 'https://img.youtube.com/vi/xf2DPY3vGto/0.jpg',
            }}
            style={styles.thumbnail}
          />
          <Text style={styles.title}>React Native - YouTube Player</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  videoBox: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // padding: 10,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
});

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';

function Videos(props) {
  const {videoData} = props;
  const playVideo = videoId => {
    console.log(videoId);
    // props.navigation.navigate('Player', {videoId});
    props.navigation.navigate('Demo', {videoId});
  };
  return (
    <>
      {videoData.map(video => (
        <TouchableOpacity
          onPress={() => playVideo(video.videoId)}
          style={styles.videoBox}>
          <Image
            source={{
              uri: video.thumbnail,
            }}
            style={styles.thumbnail}
          />
          <Text style={styles.title}>{video.title}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
}

export default Videos;

const styles = StyleSheet.create({
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

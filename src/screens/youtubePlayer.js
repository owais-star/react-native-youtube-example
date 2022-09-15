import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Button,
  View,
  Alert,
  Text,
  StyleSheet,
  Touchable,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation-locker';
import Videos from '../components//videos';


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
export default function Player(props) {
  const { navigation, route } = props;
  const { videoId } = route.params;
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // console.log('videoId', videoId);
    // Orientation.lockToPortrait();
    setPlaying(true);
    navigation.addListener('focus', () => {
      setPlaying(true);
    });
  }, []);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const handleFullScreen = useCallback(isFullScreen => {
    // setPlaying(false);
    // Alert.alert('video has finished playing!');
    if (isFullScreen) {
      Orientation.lockToLandscape()
    } else {
      Orientation.lockToPortrait()
    }
    console.log('state', isFullScreen);
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.BackButton}>
          <Text style={styles.BackButtonText}> Click to Go back</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            // handle or ignore
          }}
          onLongPress={() => {
            // handle or ignore
          }}>
          {/* <View pointerEvents="none"> */}
          <YoutubePlayer
            height={220}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
            controls={false}
            showFullscreenButton={true}
            onFullScreenChange={handleFullScreen}
          />
          {/* </View> */}
        </Pressable>
        {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
      </View>
      <ScrollView style={{ flex: 1, paddingVertical: 10, paddingTop: 10 }}>
        <View >
          <Videos videoData={videos} navigation={navigation} />
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
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#000',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  Header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 50,
  },
  BackButton: {
    marginLeft: 10,
  },
  BackButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

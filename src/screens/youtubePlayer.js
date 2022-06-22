import React, {useState, useCallback, useRef, useEffect} from 'react';
import {
  Button,
  View,
  Alert,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Player(props) {
  const {navigation, route} = props;
  const {videoId} = route.params;
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // console.log('videoId', videoId);
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

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View>
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
          <View pointerEvents="none">
            <YoutubePlayer
              height={400}
              play={playing}
              videoId={videoId}
              onChangeState={onStateChange}
            />
          </View>
        </Pressable>

        {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
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

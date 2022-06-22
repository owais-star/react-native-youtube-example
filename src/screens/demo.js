import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import WebView from 'react-native-webview';
import {StyleSheet} from 'react-native';

function Demo(props) {
  const {navigation, route} = props;
  const {videoId} = route.params;
  return (
    <Pressable
      style={{flex: 1}}
      onPress={() => {
        // handle or ignore
      }}
      onLongPress={() => {
        // handle or ignore
      }}>
      <View pointerEvents="none" style={{flex: 1}}>
        <WebView
          javaScriptEnabled={true}
          scrollEnabled={false}
          allowsFullscreenVideo={true}
          userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
          source={{
            uri: `https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=1&showinfo=0&controls=1&fullscreen=1`,
          }}
          style={{flex: 1}}
        />
      </View>
    </Pressable>
  );
}

export default Demo;

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

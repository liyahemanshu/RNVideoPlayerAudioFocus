import Video from 'react-native-video';
import video from './src/broadchurch.mp4';
import React from 'react';
import {View, Button} from 'react-native';

export default App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  // const togglePlaying = () => {};

  return (
    <View>
      <Video
        source={video}
        paused={!isPlaying}
        controls={true}
        style={{height: 200, width:200}}
        muted={isMuted}
        ignoreSilentSwitch={isMuted ? 'obey' : 'ignore'}
        mixWithOthers={isMuted ? 'mix' : 'inherit'}
        gainAudioFocus={isMuted ? false : true}
      />
      <Button
        onPress={() => setIsPlaying(p => !p)}
        title={isPlaying ? 'Stop' : 'Play'}
      />
      <Button
        onPress={() => setIsMuted(m => !m)}
        title={isMuted ? 'Unmute' : 'Mute'}
      />
    </View>
  );
};

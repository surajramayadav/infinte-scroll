import React from 'react';
import {View, ActivityIndicator,StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loader} >
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
    loader: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})

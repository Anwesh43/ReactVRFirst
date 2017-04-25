import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class ReactVRFirst extends React.Component {
    render() {
    const textStrings = ["Hello","Strike","Scar"]
    const textViews = textStrings.map((text)=>(<View style={{margin:0.1,height:0.3,backgroundColor:'#009688'}}><Text style={{font:5,color:'white',textAlign:'center'}}>{text}</Text></View>))
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{
          flex:1,
          width:2,
          flexDirection:'column',
          alignItems:'stretch',
          transform:[{translate:[-1,1,-4]}]
        }}>
        {textViews}
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRFirst', () => ReactVRFirst);

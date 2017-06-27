import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Box
} from 'react-vr';

export default class ReactVRFirst extends React.Component {
    constructor(props) {
        super(props)
        this.state = {boxColor:'red',deg:0}
    }
    componentDidMount() {
        const maxDeg = 90
        const interval = setInterval(()=>{
            var deg = this.state.deg-maxDeg/10
            if(Math.abs(this.state.deg) < maxDeg) {
                this.setState({deg})
            }
            else {
                clearInterval(interval)
            }
        },100)
    }
    render() {
    const textStrings = ["Hello","Strike","Scar"]
    const textViews = textStrings.map((text)=>(<View style={{margin:0.1,height:0.3,backgroundColor:'#009688'}}><Text style={{fontSize:0.2,color:'white',textAlign:'center'}}>{text}</Text></View>))
    return (
      <View>
        <Pano source={asset('nature.jpg')}>
        <View style={{
          flex:1,
          width:2,
          flexDirection:'column',
          alignItems:'stretch',
          transform:[{translate:[-1,-1,-5]},{rotateX:this.state.deg}]
        }}>
        {textViews}
        </View>
        <Box onEnter={()=>this.setState({boxColor:'green'})} onExit = {()=>this.setState({boxColor:'red'})} dimWidth={1} dimHeight={1} dimDepth={1} style={{color:this.state.boxColor,transform:[{translate:[-1,-1,-2]}]}}/>
      </Pano>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRFirst', () => ReactVRFirst);

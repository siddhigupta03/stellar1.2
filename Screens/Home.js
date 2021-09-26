import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Platform, ImageBackground,
Image } from 'react-native';

export default class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droideSafeArea}/>
                <ImageBackground source={require('../assets/space.gif')} resizeMode={'cover'} style={styles.image}>
                <Text style={styles.tT}>Stellar App</Text>
                <Image source={require('../assets/main-icon.png')} style={{width:100, height:100, alignSelf:'center'}} />

                <View>
                    <TouchableOpacity style={styles.navButtons}
                    onPress={()=>this.props.navigation.navigate('Space Crafts')}>
                        <Text style={styles.btText}>Space Crafts</Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.btImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navButtons}
                    onPress={()=>this.props.navigation.navigate('Star Maps')}>
                        <Text style={styles.btText}>Star Maps</Text>
                        <Image source={require('../assets/star_map.png')} style={styles.btImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navButtons}
                    onPress={()=>this.props.navigation.navigate('Daily Pics')}>
                        <Text style={styles.btText}>Daily Pictures</Text>
                        <Image source={require('../assets/daily_pictures.png')} style={styles.btImg} />
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    droideSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    container:{
        flex:1
    },
    tT:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'#ffffff'
    },
    navButtons:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'#abcdef'
    },
    btImg:{
        marginLeft:205,
        width:70,
        height:80,
        left:20
    },
    btText:{
        textAlign:'center',
        color:'#000',
    },
    
        image: {
            flex: 1,
            justifyContent: "center",
            resizeMode:'center',
          },
    
})
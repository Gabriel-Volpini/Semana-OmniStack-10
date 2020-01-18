import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"//TODO
import MapView,{Marker, Callout} from "react-native-maps";
import {requestPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import api from "./services/Api"

export default function Main({navigation}){

    const [devs, setDevs] = useState([])
    const [ currentLocation, setCurrentLocation ] = useState(null);
    const [ techs, setTechs ] = useState("");
    useEffect(()=>{
        async function loadInitialPosition(){
           const { granted } = await requestPermissionsAsync()
               if (granted) {
                   const {coords} = await getCurrentPositionAsync({
                       enableHighAccuracy: true,
                   })
   
                   const {latitude, longitude} = coords;
   
                   setCurrentLocation({
                       latitude,
                       longitude,
                       latitudeDelta: 0.04,
                       longitudeDelta: 0.04,
                   })
               }
           }
        loadInitialPosition()
    }, [])

    async function loadDevs(){
      const {latitude, longitude} = currentLocation;
      
      const response = await api.get("/search",{
          params:{
              techs
          }
      });

      setDevs(response.data);
    }

    function handleRegionChange(region){
        setCurrentLocation(region);
    }

    if(!currentLocation) return null;

    function navegacao(user){
        navigation.navigate('Profile', {github_userName : user})
    }

    return(
        <>
            <MapView 
                initialRegion={currentLocation} 
                style={styles.map}
                onRegionChangeComplete={handleRegionChange}
            >
                {
                    devs&& devs.map(dev =>(
                        <Marker 
                        key={dev._id}
                        coordinate={{
                            longitude:dev.location.coordinates[0],
                            latitude: dev.location.coordinates[1],
                        }}>
                            <Image 
                                style={styles.avatar} 
                                source={{uri: dev.avatar_url}}
                            />
                            <Callout onPress={() => navegacao(dev.github_userName)}>
                                <View style={styles.Collout}>
                                    <Text style={styles.devName}>{dev.name}</Text>
                                    <Text style={styles.devBio}>{dev.bio}</Text>
                                    <Text style={styles.devTechs}>{dev.techs.join(", ")}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }
            </MapView>
            <View style={styles.searchForm}>
            <TextInput 
                style={styles.searchInput}
                placeholder="Buscar dev`s por tecnologia"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={text => setTechs(text)}
            />
            <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
                <MaterialIcons name="my-location" size={20} color="#FFf"/>
            </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    map:{
        flex:1
    },
    avatar:{
        width:54,
        height:54,
        borderRadius:4,
        borderWidth:4,
        borderColor:"#7d40e7"
    },
    Collout:{
        width:260,
    },
    devName:{
     fontWeight:"bold",
     fontSize:16   
    },  
    devBio:{
        color:"#666",
        marginTop:5
    },
    devTechs:{
        marginTop:5
    },
    searchForm:{
        position:"absolute",
        top:20,
        left:10,
        right:10,
        zIndex: 10,
        flexDirection: "row",
    },
    searchInput:{
        flex: 1,
        height:50,
        backgroundColor:"#FFF",
        color:"#333",
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:16,
        shadowColor: "#000",
        shadowOpacity:0.2,
        textShadowOffset:{
            width:4,
            height:4
        },
        elevation:3
    },
    loadButton:{
        width:50,
        height:50,
        backgroundColor:"#8E4Dff",
        justifyContent:"center",
        alignItems:"center",
        marginLeft: 10,
        borderRadius:25,
        shadowColor: "#000",
        shadowOpacity:0.2,
        textShadowOffset:{
            width:4,
            height:4
        },
        elevation:3
    } 

})
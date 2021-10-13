import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const data = [
    {
        id: 225,
        icon: 'home',
        location: 'Home',
        destination: 'Azovska Street, Dnepr , UA'
    },
    {
        id: 267,
        icon: 'briefcase',
        location: 'Work',
        destination: 'Naberegna Street, Dnepr , UA'
    },
]
const NavFavorites = () => {
    return (
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
                return(
                    <View style={{height: 0.3, backgroundColor: 'gray'}} />
                )
            }}
            renderItem={(itemData) => {
                return(
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 13}}>
                        <View style={{backgroundColor: 'gray', width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons name={itemData.item.icon} size={15} color='white'/>
                        </View>
                        <View style={{marginHorizontal: 20}}>
                            <Text style={{fontSize: 15, color: 'black'}}>{itemData.item.location}</Text>
                            <Text style={{fontSize: 12}}>{itemData.item.destination}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
            style={{ paddingHorizontal: 20, marginTop: 10}}
        />
    )
}


export default NavFavorites


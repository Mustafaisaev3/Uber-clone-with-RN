import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import MapView, {Marker} from 'react-native-maps'
import Map from '../components/Map'
import NavigateCard from './NavigateCard'
import RideOptionsCard from './RideOptionsCard'
import tw from 'tailwind-react-native-classnames'
import { createStackNavigator } from '@react-navigation/stack'

const MapScreen = () => {
    const Stack = createStackNavigator()

    return (
        <View style={{flex: 1}}>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{headerShown: false}} />
                    <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{headerShown: false}} />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

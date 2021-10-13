import React, {useState, useEffect} from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Actions from '../store/actions/SelectedPlaceAction'
import { useDispatch, useSelector } from 'react-redux';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = ({navigation}) => {
    const origin = useSelector(state => state.selectedPlace.origin.location.lat)
    const dispatch = useDispatch()
    const [disabledButton, setdisabledButton] = useState(true)

    
    useEffect(() => {
        if(origin){
            setdisabledButton(false)
        } else if (!origin) {
            setdisabledButton(true)
        }
    }, [origin])
    

    const data = [
        {
            id: '222',
            title: 'Get a ride', 
            image: require('../assets/images/uberCar.png'),
            screen: 'MapScreen'
        },
        {
            id: '333',
            title: 'Order food', 
            image: require('../assets/images/uberFood.png'),
            screen: 'EatsScreen'
        },
    ]

    const ItemToRender = (itemData) => {
        return(
            <TouchableOpacity style={!origin ? {opacity: 0.3} : {opacity: 1}} disabled={disabledButton} onPress={() => navigation.navigate("MapScreen")}>
                <NavOptions data={itemData.item} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={require('../assets/images/uber-logo.png')} />
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    styles={{
                        container: {
                            flex: 0
                        }
                    }}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        dispatch(Actions.SetOrigin(details.geometry.location, data.description))
                    }}
                    query={{
                        key: 'AIzaSyAnltu3jaC9HhilaDQBVhi7d7iN7xDsnlQ',
                        language: 'en',
                    }}
                />
                <FlatList data={data} keyExtractor={item => item.id} renderItem={ItemToRender} horizontal />

                <NavFavorites />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

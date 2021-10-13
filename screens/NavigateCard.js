import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import * as Actions from '../store/actions/SelectedPlaceAction'
import NavFavorites from '../components/NavFavorites'
import Ionicons from 'react-native-vector-icons/Ionicons'



const NavigateCard = ({navigation}) => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={[tw`text-center py-5`, {fontSize: 15}]}>Good Morning</Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        returnKeyType={'search'}
                        query={{
                            key: 'AIzaSyAnltu3jaC9HhilaDQBVhi7d7iN7xDsnlQ',
                            language: 'en',
                        }}
                        onPress={(data, details) => {
                            dispatch(Actions.SetDestination(details.geometry.location, data.description))
                            navigation.navigate('RideOptionsCard')
                        }}
                    />
                </View>
                <NavFavorites />
                </View>
            </KeyboardAvoidingView>
            <View style={styles.bottomButtonsContainer}>
                <TouchableOpacity style={[styles.bottomButton, {backgroundColor: 'black'}]} onPress={() => navigation.navigate('RideOptionsCard')}>
                    <Ionicons name="car" size={16} color="white"/>
                    <Text style={{color: 'white'}}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottomButton, {backgroundColor: 'white'}]}>
                    <Ionicons name="fast-food-outline" size={16} color="black"/>
                    <Text>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bottomButtonsContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around', 
        flex: 1
    },
    bottomButton: {
        width: 100, 
        paddingVertical: 7, 
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderRadius: 20
    }

})

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})

export default NavigateCard


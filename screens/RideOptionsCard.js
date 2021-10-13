import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux'

const data = [
    {
        id: 'Uber-X-123',
        title: 'Uber X',
        multiplier: 1,
        image: require('../assets/images/UberCars/UberX.png')
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: require('../assets/images/UberCars/UberXL.png')
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: require('../assets/images/UberCars/Lux.png')
    }
]


const RideOptionsCard = ({navigation}) => {
    const travelData = useSelector(state => state.selectedPlace.travelData)
    const [selected, setSelected] = useState(null)

    
    const RenderUberCars = (itemData) => {
        const formatedDistance = travelData.distance.text.replace(' mi', '').replace(',', '')
        const price = formatedDistance * itemData.item.multiplier
        return(
            <TouchableOpacity style={[styles.carOfferContainer, {backgroundColor: `${itemData.item.id == selected?.id ? 'rgb(226, 226, 226)' : 'white'}`}]} onPress={() => setSelected(itemData.item)}>
                <Image style={styles.carOfferImage} source={itemData.item.image} />
                <View style={styles.offerDesc}>
                    <Text style={styles.carOfferTitle}>{itemData.item.title}</Text>
                    <Text>{travelData.duration.text}</Text>
                </View>
                <View style={styles.carOfferPriceContainer}>
                    <Text style={styles.carOfferPrice}>${price.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.continer}>
            <View style={styles.goBackBtnContainer}>
                <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' />
                </TouchableOpacity>
                <Text style={styles.headerText}>Select a Ride - {travelData.distance.text} </Text>
            </View>
            <FlatList data={data} keyExtractor={item => item.id} renderItem={RenderUberCars} />
            <TouchableOpacity style={styles.chooseBtn}>
                <Text style={{color: 'white'}}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer: {
        flex: 1
    },
    goBackBtnContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        height: '20%'
    },
    goBackBtn: {
        width: "30%", 
        marginLeft: 30
    },
    headerText: {
        alignItems: 'flex-start', 
        width: '65%', 
        fontSize: 18
    },
    chooseBtn: {
        backgroundColor: 'black', 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 10, 
        padding: 10
    },
    carOfferContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    },
    carOfferImage: {
        width: 70, 
        height: 70, 
        resizeMode: 'contain'
    },
    offerDesc: {
        width: "30%",
        justifyContent: 'flex-start'
    },
    carOfferTitle: {
        fontWeight: '700', 
        color: 'black', 
        fontSize: 17
    },
    carOfferPriceContainer: {
        width: '20%',
        alignItems: 'center'
    },
    carOfferPrice: {
        color: 'black', 
        fontSize: 15
    }
})

export default RideOptionsCard


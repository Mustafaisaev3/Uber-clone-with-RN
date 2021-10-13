import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/core'

const NavOptions = ({data}) => {

    return (
        <View style={[tw`m-2`, {alignItems: 'center',backgroundColor: 'rgb(212, 212, 212)', borderRadius: 3}]}>
            <Image style={{width: 120, height: 120, resizeMode: 'contain'}} source={data.image} />
            <Text>{data.title}</Text>
            <AntDesign style={tw`p-2 bg-black rounded-full  mt-4 mb-4`} name='arrowright' size={20} color='white' />
        </View>
    )
}

export default NavOptions

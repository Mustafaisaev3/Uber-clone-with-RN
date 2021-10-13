import React, {useRef, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MapView, {Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import * as Actions from '../store/actions/SelectedPlaceAction'


const Map = () => {
    const dispatch = useDispatch()
    const origin = useSelector(state => state.selectedPlace.origin)
    const destination = useSelector(state => state.selectedPlace.destination)
    const mapRef = useRef(null)

    useEffect(() => {
        if(!origin || !destination) return 
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
        })
    }, [origin.location, destination.location])

    useEffect(() => {
        if(!origin || !destination) return 

        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyBACUw-EBiUVXDYqpDtAz-V0abW15-WwoI`)
                .then(res => res.json())
                .then(data => {
                   dispatch(Actions.SetTravelTime(data.rows[0].elements[0])) 
                })
        }
        getTravelTime()
    }, [origin.location, destination.location  ])

    return (
        <MapView
            ref={mapRef}
            style={{width: '100%', height: '100%'}}
            initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
            }}
        >
            {origin && destination.location.lat && (
                <MapViewDirections 
                    origin={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    destination={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    apikey={'AIzaSyAnltu3jaC9HhilaDQBVhi7d7iN7xDsnlQ'}
                    strokeWidth={3}
                    strokeColor={'black'}
                />
            )

            }

            {origin.location.lat && 
                <Marker 
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Place"
                    description={origin.description}
                    identifier='origin'
                />
            }
            {destination.location.lat && (
                <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng
                }}
                title="Place"
                description={destination.description}
                identifier='destination'
            />
            )}
            
        </MapView>
    )
}

const styles = StyleSheet.create({})

export default Map


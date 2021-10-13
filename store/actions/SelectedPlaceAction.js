export const SET_ORIGIN = 'SET_ORIGIN'
export const SET_DESTINATION = 'SET_DESTINATION'
export const SET_TRAVEL_TIME = 'SET_TRAVEL_TIME'

export const SetOrigin = (location, description) => {
    return({
        type: SET_ORIGIN,
        location: location,
        description: description
    })
}

export const SetDestination = (location, description) => {
    return({
        type: SET_DESTINATION,
        location: location,
        description: description
    })
}

export const SetTravelTime = (travelData) => {
    return({
        type: SET_TRAVEL_TIME,
        travelData: travelData
    })
}
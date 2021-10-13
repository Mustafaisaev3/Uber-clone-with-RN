import { SET_ORIGIN } from "../actions/SelectedPlaceAction"
import { SET_DESTINATION } from "../actions/SelectedPlaceAction"
import { SET_TRAVEL_TIME } from "../actions/SelectedPlaceAction"

const initialState = {
    origin: {
        location: {},
        description: ''
    },
    destination: {
        location: {},
        description: ''
    },
    travelData: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_ORIGIN:
            return({
                ...state,
                origin: {
                    location: action.location,
                    description: action.description
                }
            })

        case SET_DESTINATION:
            return({
                ...state,
                destination: {
                    location: action.location,
                    description: action.description
                }
            })

        case SET_TRAVEL_TIME:
            return({
                ...state,
                travelData: action.travelData
            })
    }
    return state
}
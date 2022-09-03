const defaultState = ['Love']
const BASE_URL = 'http://127.0.0.1:3000/'
const GREETING_ENDPOINT = 'v1/greeting'
const GET_GREETING_REQUEST = 'GET_THINGS_REQUEST'

export default function greetingReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_GREETING_REQUEST:
            console.log('Reduced')
            return action.payload.message
        default:
            return state
    }
}

export function setGreeting(message) {
    return {
        type: GET_GREETING_REQUEST,
        payload: message,
    }
}

export const getGreeting = () => async (dispatch) => {
    const message = await fetch(`${BASE_URL}${GREETING_ENDPOINT}`).then((response) => response.json())
    console.log(message)
    dispatch(setGreeting(message))
}

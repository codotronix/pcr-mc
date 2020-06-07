import {
    UI_UPDATE_URL
}
from '../actionTypes'

const initState = {
    currentPath: ''
}

const uiReducer = (state=initState, action) => {
    const { type, payload } = action
    switch(type) {
        case UI_UPDATE_URL: {
            const { currentPath } = payload
            return {
                ...state,
                currentPath
            }
        }
        default:
            return state
    }
}

export default uiReducer
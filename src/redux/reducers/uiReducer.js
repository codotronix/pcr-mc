import {
    UI_SIDEBAR_OPEN,
    UI_SIDEBAR_CLOSE
}
from '../actionTypes'

const initState = {
    sidebarOpen: false
}

const uiReducer = (state=initState, action) => {
    const { type, payload } = action
    switch(type) {
        case UI_SIDEBAR_OPEN: {
            return {
                ...state,
                sidebarOpen: true
            }
        }
        case UI_SIDEBAR_CLOSE: {
            return {
                ...state,
                sidebarOpen: false
            }
        }
        default:
            return state
    }
}

export default uiReducer
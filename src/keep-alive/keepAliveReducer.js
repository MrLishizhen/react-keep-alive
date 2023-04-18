/**
 *
 * state keepAliveStates
 * action:{
 *     type,
 *     payload
 * }
 */
import * as actionTypes from './actionTypes'

function keepAliveReducer(state, action) {
    const {type, payload} = action;
    const {keepAliveId, reactElement, nodes} = payload;

    switch (type) {
        //第一次走这
        case actionTypes.CREATING:
            return {
                ...state,
                [keepAliveId]: {
                    keepAliveId,
                    reactElement,
                    status: type,
                    nodes: null
                }
            }
        //第二次走这
        case actionTypes.CREATED:
            return {
                ...state,
                [keepAliveId]:{
                    ...state[keepAliveId],
                    status:type,
                    nodes:nodes
                }
            }
        default:
            return state
    }
}

export default keepAliveReducer

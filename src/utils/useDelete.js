import Axios from 'axios'
import { useReducer } from 'react'

const reducer = (state, action) => {
    //console.log('state', state, 'action', action)
    if (action.type === 'REQUEST') {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === 'SUCCESS') {
        return {
            ...state,
            loading: false,
            data: action.data
        }
    }
    return state
}

const useDelete = () => {
    const [data, dispatch] = useReducer(reducer, {
        loading: false,
        data: {}
    })
    const remove = url => {
        dispatch({ type: 'REQUEST' })
        Axios
            .delete(url)
            .then(() => {
                dispatch({
                    type: 'SUCCESS',
                })
            })
    }
    return [data, remove]
}

export default useDelete
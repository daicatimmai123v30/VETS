import {USER_LOAD, USER_LOGIN, USER_LOGOUT} from '../actions/types'
const intitalState ={
    isAuthentication:false,
    user:null
}
const userReducer = (state=intitalState,action)=>{
    switch(action.type){
        case USER_LOGIN:{
            return state={...state,isAuthentication:true,user:action.payload}
        }
        case USER_LOGOUT:{
            return state={isAuthentication:false,user:null}
        }
        case USER_LOAD:{
            return state={isAuthentication:true,user:action.payload}
        }
        default:return state
    }
}
export default userReducer;
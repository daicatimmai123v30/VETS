import IO from 'socket.io-client';

export const USER_LOGIN='USER_LOGIN'
export const USER_LOGOUT='USER_LOGOUT'
export const USER_LOAD='USER_LOAD'
export const USER_ERROR='USER_ERROR'


export const ACTIVE_USER ="ACTIVE_USER";
export const OPEN_CHAT ="OPEN_CHAT";
export const CLOSE_CHAT ="CLOSE_CHAT";
export const ACTIVE_ROOM ="ACTIVE_ROOM";
export const LOAD_MESSAGE ="LOAD_MESSAGE";
export const ADD_MESSAGE ="ADD_MESSAGE";
export const CLEAR_MESSAGES="CLEAR_MESSAGES";
export const CLEAR_SESSION_MESSAGES="CLEAR_SESSION_MESSAGES"

export const LOAD_PETS ="LOAD_PETS";
export const ADD_PET="ADD_PET";

export const SHOW_LOADING="SHOW_LOADING";
export const HIDE_LOADING="HIDE_LOADING"




export const TOKEN ='TOKEN';
export const UNIQUE_CHAT="UNIQUE_CHAT";
export const UNIQUE_ROOM_CHAT="UNIQUE_ROOM_CHAT";
export const API_URL='http://192.168.1.5:4444'

// Socket config
export const socket =IO('http://192.168.1.5:4441',{
    forceNew:true,
})
socket.on('connect',()=>console.log('connected'))
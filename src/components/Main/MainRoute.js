import axios from "axios";
import React,{useEffect} from "react";
import {Route, Switch,useHistory} from 'react-router-dom'
import { API_URL, TOKEN, USER_LOAD } from "../../actions/types";
import Home from "../Home/Home";
// import Signup from "./users/Signup";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import setAuthToken from '../../utils/setAuthToken'
import { useDispatch } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
const Mainrouter = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const checkToken = async()=>{
        const token = localStorage.getItem(TOKEN);
        try {
            setAuthToken(token)
            const response =await axios.get(`${API_URL}/api/Account`);
            if(response.data.success)
            {
                dispatch({type:USER_LOAD,payload:response.data.user})
                history.push('/Home')
            }
            else
            {
                console.log('213')
                localStorage.removeItem(TOKEN);
                setAuthToken(null);
                history.push('/Home')
            }
        } catch (error) {
            history.push('/Home')
        }
    }
    useEffect(()=>{
        checkToken();
    },[])
    return(
            <Switch >
                <Route path='/Signin' component={Signin} />
                <Route path='/Signup' component={Signup}/>
                <Route path='/Home' component={Home}/>
            </Switch>
    )
};
export default Mainrouter;
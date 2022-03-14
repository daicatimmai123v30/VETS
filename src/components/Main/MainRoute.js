import axios from "axios";
import React,{useEffect} from "react";
import {Route, Switch,Redirect} from 'react-router-dom'
import { ACTIVE_USER, API_URL, LOAD_PETS, TOKEN, UNIQUE_CHAT, UNIQUE_ROOM_CHAT, USER_ERROR, USER_LOAD } from "../../actions/types";
import Home from "../Home/Home";
import ListDoctor from "../ListDoctor/ListDoctor";
import Doctor from "../Doctor/Doctor";
import ListPet from "../ListPet/ListPet";
import ListPetOwner from "../ListPetOwner/ListPetOwner";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Schedule from "../Schedule/Schedule";
import VerifyOTP from "../VerifyOTP/VerifyOTP";
import Information from "../Information/Information"
import CreaterPet from "../CreatePet/CreaterPet";
import Pet from "../Pet/Pet";
import Appointment from "../Appointment/Appointment";
import Facility from '../Facility/Facility';
import ListFacility from '../ListFacility/ListFacility';
import Support from '../Support/Support';
import Profile from "../Profile/Profile";
import CreateFacility from "../CreateFacility/CreateFacility";
import CreateDoctor from '../CreateDoctor/CreateDoctor'
// import Signup from "./users/Signup";

import setAuthToken from '../../utils/setAuthToken'
import { useDispatch,useSelector} from "react-redux";


const Mainrouter = () =>{
    const dispatch = useDispatch();
    const user=useSelector(state=>state.user);

    const checkToken = async()=>{
        const token = localStorage.getItem(TOKEN);
        try {
            setAuthToken(token)
            const response =await axios.get(`${API_URL}/api/Account`,{test:2});
            if(response.data.success)
            {
                dispatch({type:USER_LOAD,payload:response.data.user})
                const newResponse = await axios.get(`${API_URL}/api/Pet/list-pet`);
                if(newResponse.data.success)
                    dispatch({type:LOAD_PETS,payload:newResponse.data.pets})
            }
            else
            {
                dispatch({type:USER_ERROR})
                localStorage.removeItem(TOKEN);
                setAuthToken(null);
            }
        } catch (error) {
            dispatch({type:USER_ERROR})
            localStorage.removeItem(TOKEN);
            setAuthToken(null);
        }
    }
    const chatUserList =()=>{
        const unique_Chat = JSON.parse(localStorage.getItem(UNIQUE_CHAT));
        const unique_RoomChat = JSON.parse(localStorage.getItem(UNIQUE_ROOM_CHAT));
        if(!unique_Chat)
            localStorage.setItem(UNIQUE_CHAT,JSON.stringify([]))
        if(!unique_RoomChat)
            localStorage.setItem(UNIQUE_ROOM_CHAT,JSON.stringify([]))
        if(user.isAuthentication)
            dispatch({type:ACTIVE_USER,payload:user?.user?._id})
    }
    useEffect(()=>{
        checkToken();
        chatUserList();
    },[])
    return(
        <Switch >
            {user?.user?.role==="DOCTOR" || user?.user?.role==="ADMIN"?(
                <Route path='/List-pet-owner' component={ListPetOwner}/>
            ):null}
            <Route path='/Signin' component={Signin} />
            <Route path='/Signup' component={Signup}/>
            <Route path='/Home' component={Home}/>
            <Route path='/Information' component={Information}/>
            <Route path='/VerifyOTP' component={VerifyOTP}/>
            {user.isAuthentication?(
                <>
                <Route path='/List-doctor' component={ListDoctor}/>
                <Route path='/Doctor/:slug' component={Doctor}/>
                <Route path='/List-pet' component={ListPet}/>
                <Route path='/Schedule' component={Schedule}/>
                <Route path='/Create-pet' component={CreaterPet}/>
                <Route path='/Pet/:slug' component={Pet}/>
                <Route path='/Profile/:slug' component={Profile}/>
                <Route path='/Appointment/:slug' component={Appointment}/>
                <Route path='/Appointment' component={Appointment}/>
                <Route path='/Facility/:slug' component={Facility}/>
                <Route path='/List-facility' component={ListFacility}/>
                <Route path='/Support' component={Support}/>
                {user.user.role==="ADMIN"?(
                    <>
                        <Route path='/Create-facility' component={CreateFacility}/>
                        <Route path='/Create-doctor' component={CreateDoctor}/>
                    </>
                ):null}
                </>
            ):null}
            <Redirect to='/Home'/>
        </Switch>
    )
};
export default Mainrouter;
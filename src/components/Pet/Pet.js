import React ,{useEffect,useState} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import ContainerLeft from '../Container/ContainerLeft';
import axios from 'axios';
import { API_URL, TOKEN } from '../../actions/types';
import setAuthToken from '../../utils/setAuthToken';
import { useHistory } from 'react-router';
import Mess from '../../assets/icons/mess.png'
import Chat from '../Chat/Chat';
import './Pet.css'
import { useSelector } from 'react-redux';
import ViewFullImage from '../ViewFullImage/ViewFullImage';
const Pet = (props) => {
    const [pet,setPet]=useState({});
    const [isPet,setIsPet]=useState(false);
    const chat =useSelector(state=>state.chat);
    const {pets}= useSelector(state=>state.user);
    const [urlImageFullView,setUrlImageFullView]=useState('')
    const {location} = useHistory();
    const loadPet =async ()=>{
            for(var value of pets)
                if(value._id===location.pathname.split('/')[2])
                {
                    setIsPet(true);
                    setPet({...value,createdAt:new Date(value.createdAt).toISOString().split('T')[0]})
                }
        
    }
    useEffect(()=>{
        loadPet();
    },[])
    return (
        <div className="main">
            {chat.visibleChat?(<Chat></Chat>):null}
            <Header></Header>
            <div className="body">
                <div className="body-container">
                    <ContainerLeft/>
                    <div className="container-right container-pet">
                        <div className="box box-pet">
                            <div className="pet">
                                <div className="pet-avatar">
                                    <img  src={pet.avatar} alt="pet-avatar" className="pet-image"/>
                                    <div className="container-images">
                                        {pet?.imagePet?.map((image,index)=>(
                                            <img className="images" key={index} src={image.image} onClick={()=>setUrlImageFullView(image.image)}/>
                                        ))}
                                    </div>
                                    <div style={{width:'100%',height:150,marginTop:20,alignItems:'center',justifyContent:'space-between',display:'flex',flexDirection:'column'}}>
                                        <div className="btn-edit">
                                            <img style={{width:40,height:40}} src={Mess}/>
                                            <label>Chỉnh sửa</label>
                                        </div>
                                        <div className="btn-delete">
                                            <label>Xóa</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="pet-information">
                                    <label className="fullName">{pet.namePet}</label>
                                    <div className="createdAt-pet">
                                        <label>Thêm vào ngày {pet.createdAt}</label>
                                    </div>
                                    <label className="property">Loài: <label>{pet.breed}</label></label>
                                    <label className="property">Giống: <label>{pet.species}</label></label>
                                    <label className="property">Giới Tính: <label>{pet.gender}</label></label>
                                    <label className="property">Tuổi Thọ: <label>{pet.age}</label></label>
                                    <label className="property">Cân nặng: <label>{pet.weight}</label></label>
                                    <label className="property">Tình Trạng: <label>{123}</label></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer></Footer>
            {urlImageFullView?(
                <ViewFullImage uri={urlImageFullView} onClick={()=>setUrlImageFullView('')}/>
            ):null}
        </div>
    )
}

export default Pet

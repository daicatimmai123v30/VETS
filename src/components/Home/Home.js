import React,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {TOKEN, USER_LOGOUT} from '../../actions/types'
import setAuthToken from '../../utils/setAuthToken'
import Background from '../../assets/image/background@2x.png'
import './Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Home = () =>{
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const onLogout = () =>{
        dispatch({type:USER_LOGOUT});
        localStorage.removeItem(TOKEN);
        setAuthToken(null)
    }
    const onLogin = () =>{
        history.push('/Signin')
    }
    const onRegister = () =>{
        history.push('/Signup')
    }
    useEffect(()=>{
    },[])
    return (
        <div className="main">
            <Header></Header>
            <div className="body">
                <div className="body-welcome">
                    <img src={Background} className="background"/>
                </div>
                <div className="body-container">
                    <div className="container-left">
                        {(user.isAuthentication)?
                        (
                            <div className="user-information">
                                <img className="user-avatar" src={user.user.image}/>
                                <div style={{flexDirection:'column',display:'flex',alignItems:'center',width:'100%'}}>
                                    <label className="firstname-label">
                                        {user.user.firstName}
                                        <ion-icon name="create-outline" style={{fontSize:'40px',color:'#888e86'}}></ion-icon>
                                    </label>
                                    <label className="pet-label">Pet: 0</label>
                                </div>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Hồ sơ thú cưng
                                    </label>
                                    <ion-icon name="paw-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Lịch hẹn
                                    </label>
                                    <ion-icon name="calendar-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Nhân sự
                                    </label>
                                    <ion-icon name="person-circle" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Phòng khám
                                    </label>
                                    <ion-icon name="home-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Tài liệu
                                    </label>
                                    <ion-icon name="document-text-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Cài đặt
                                    </label>
                                    <ion-icon name="settings-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Hỗ trợ
                                    </label>
                                    <ion-icon name="help-circle-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process" onClick={()=>onLogout()}>
                                    <label className="btn-label">
                                        Đăng xuất
                                    </label>
                                    <ion-icon name="log-out-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                            </div>
                        ):(
                            <div className="user-information">
                                <ion-icon name="person-circle-outline" style={{fontSize:'250px'}}></ion-icon>
                                <button className="btn-authentication" onClick={()=>onLogin()}>
                                    <label className="btn-label">
                                        Đăng nhập
                                    </label>
                                </button>
                                <button className="btn-authentication" onClick={()=>onRegister()}>
                                    <label className="btn-label">
                                        Đăng ký
                                    </label>
                                </button>
                            </div>
                        )
                        }
                    </div>
                    <div className="container-right">
                    <div className="box">
                            <div className="box-header">
                                <label className="box-header-title">Lịch hẹn</label>
                            </div>
                            <div className="appointment">
                                <div className="appointment-box">
                                    <div className ="appointment-data">

                                    </div>
                                    <div className ="appointment-data">
                                
                                    </div>
                                    <div className ="appointment-data">
                                
                                    </div>
                                    <div className ="appointment-data">
                                
                                    </div>
                                    <div className ="appointment-data">
                                
                                    </div>
                                    <div className ="appointment-data">
                                
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <label className="box-header-title">Tin tức</label>
                            </div>
                            <div className="news">
                                <div className="news-form">
                                    <label className="news-data">
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </label>
                                    <a href="">Xem thêm</a>
                                </div>
                                <div className="news-form">
                                    <label className="news-data">
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </label>
                                    <a href="">Xem thêm</a>
                                </div>
                                <div className="news-form">
                                    <label className="news-data">
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    2021, Oct 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </label>
                                    <a href="">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="box">
                            <div className="box-header">
                                <label className="box-header-title">Tài Liệu</label>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
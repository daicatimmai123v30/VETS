    import React,{Fragment} from 'react'
    import './Header.css'
    import Logo from '../../assets/icons/Logo.png'
    import Search from '../../assets/icons/Search.png'
    import {useSelector} from 'react-redux'
import { useHistory } from 'react-router'
const Header = () => {
    const user = useSelector(state => state.user);
    const history = useHistory();
    const onLogin = () =>{
        history.push('/Signin')
    }
    return (
        <div className="header">
            <div className="view-header-home">
                <button className="btn-home" onClick={()=>{history.push('/Home')}}>
                    <img src={Logo} className="header-logo"/>
                    <label className="header-title">ARTEMIS</label>
                </button>
            </div>
            <div className="view-header-home">
                <input className="header-search" placeholder="Tìm thú cưng hoặc bác sĩ"/>
                <button className="btn">
                    <img className="header-icon-search" src={Search}/>
                </button>
            </div>
            <div className="view-header-user">
               {user.isAuthentication?
               (<Fragment>
                <button className="btn">
                    <ion-icon name="notifications-outline" style={{fontSize:'40px'}}></ion-icon>
                </button>
                <button className="btn">
                    <ion-icon name="chatbubbles-outline" style={{fontSize:'40px'}}></ion-icon>
                </button>
                <button className="btn">
                    <label className="user-title">{`Chào ${user.user.firstName}`}</label>
                    <ion-icon name="person-circle-outline" style={{fontSize:'40px'}}></ion-icon>
                </button>
               </Fragment>):
               (
                <Fragment>
                <button className="btn" onClick={()=>onLogin()}>
                    <label className="user-title">Đăng nhập</label>
                </button>
                <button className="btn">
                    <ion-icon name="person-circle-outline" style={{fontSize:'40px'}}></ion-icon>
                </button>
                </Fragment>
               )} 
            </div>
        </div>
    )
}
export default Header
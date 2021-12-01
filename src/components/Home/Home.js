import React from 'react'
import { useSelector } from 'react-redux'
import Background from '../../assets/image/background@2x.png'
import Chat from '../Chat/Chat'
import ContainerLeft from '../Container/ContainerLeft'
import ContainerRight from '../Container/ContainerRight'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'
const Home = () =>{
    const chat = useSelector(state => state.chat)
    return (
        <div className="main">
            {chat.visibleChat?(<Chat></Chat>):null}
            <Header></Header>
            <div className="body">
                <div className="body-welcome">
                    <img src={Background} className="background"/>
                </div>
                <div className="body-container">
                    <ContainerLeft/>
                    <ContainerRight/>
                </div>  
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
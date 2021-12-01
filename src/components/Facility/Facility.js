import React,{useEffect}from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
// import Background from '../../../assets/image/background@2x.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContainerLeft from '../Container/ContainerLeft';
import './Facility.css'


const Facility = () =>{
    
    return (
        <div className="main">
                <Header></Header>
            <div className="body">
                <div className="body-container">
                    <ContainerLeft></ContainerLeft>
                    <div className="container-right">
                        <div className="box1">
                            <div className='facility'>
                         
                                <p href='' className="header_facility">
                                <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility1.png" alt='' className='header_facility-img'/>
                                <div className='header_facility-info'>
                                <button className="btn-process1">
                                    <label className="btn-label1">
                                        Nhân sự
                                    </label>
                                    <ion-icon name="person-circle" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                </div>
                            </p>
                        </div>
                        <div className='facility-cotent'>
                                <div className='branch'>
                                    <span>Chi nhánh</span>
                                    <span className='parameter'>9/10</span>
                                </div>
                                <div className='address'>
                                    <p><span className='address1'>Địa chỉ:</span>Số,đường,quận,thành phố</p>
                                    <p><span className='phone'>Số điện thoại:</span>123456789</p>
                                </div>
                        </div>
                        <div className="rating-doctor">
                            <div className="view-comment">
                                <textarea 
                                    className="input-comment"
                                    // onChange={(event)=>setData({...data,comments:event.target.value})} 
                                ></textarea>
                                <div className="comments-bottom">
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={40}
                                        edit={true}
                                        activeColor="#ffd700"
                                        isHalf={true}
                                    />
                                   <button >
                                       Rate and Comment
                                   </button>
                                </div>
                            </div>
                            <div className="list-comments">
                                <div className="row-data">
                                    <label className="name-user">Usernama: <label>adhashsdsadasdad</label></label>
                                    <label className="rating">5/5</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>  
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Facility;
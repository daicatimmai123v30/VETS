import React,{useEffect}from 'react';
import './ListFacility.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContainerLeft from '../Container/ContainerLeft';

const facility = () =>{
    
    return (
        <div className="main">
                <Header></Header>
            <div className="body">
                <div className="body-container">
                    <ContainerLeft></ContainerLeft>
                    <div className="container-right">
                        
                        <div className="box1">
                            
                            <div className='facility'>
                                <button>
                                    <p href='' className="header_facility">
                                    <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility1.png" alt='' className='header_facility-img'/>
                                    <div className='header_facility-info'>
                                        <span className='header_facility-name'>Tên chi nhánh</span>
                                        <span className='header_facility-descriotion'>Địa chỉ:</span>
                                        <span className='header_facility-descriotion'>Số điện thoại: </span>
                                    </div>
                                   </p>
                                </button>
                            
                            </div>
                            <div className='facility'>
                                <button>
                                    <p href='' className="header_facility">
                                    <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility1.png" alt='' className='header_facility-img'/>
                                    <div className='header_facility-info'>
                                        <span className='header_facility-name'>Tên chi nhánh</span>
                                        <span className='header_facility-descriotion'>Địa chỉ:</span>
                                        <span className='header_facility-descriotion'>Số điện thoại: </span>
                                    </div>
                                   </p>
                                </button>
                            
                            </div>
                            <div className='facility'>
                                <button>
                                    <p href='' className="header_facility">
                                    <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility1.png" alt='' className='header_facility-img'/>
                                    <div className='header_facility-info'>
                                        <span className='header_facility-name'>Tên chi nhánh</span>
                                        <span className='header_facility-descriotion'>Địa chỉ:</span>
                                        <span className='header_facility-descriotion'>Số điện thoại: </span>
                                    </div>
                                   </p>
                                </button>
                            
                            </div>
                            <div className='facility'>
                                <button>
                                    <p href='' className="header_facility">
                                    <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility1.png" alt='' className='header_facility-img'/>
                                    <div className='header_facility-info'>
                                        <span className='header_facility-name'>Tên chi nhánh</span>
                                        <span className='header_facility-descriotion'>Địa chỉ:</span>
                                        <span className='header_facility-descriotion'>Số điện thoại: </span>
                                    </div>
                                   </p>
                                </button>
                            
                            </div>

                            <div className='facility'>
                                    <button>
                                    <p href='' className="header_facility">
                                    <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility2.png" alt='' className='header_facility-img'/>
                                    <div className='header_facility-info'>
                                    <span className='header_facility-name'>Tên chi nhánh</span>
                                    <span className='header_facility-descriotion'>Địa chỉ:</span>
                                    <span className='header_facility-descriotion'>Số điện thoại: </span>
                                
                                    </div>
                                    

                                </p></button>
                                
                            </div>

                            <div className='facility'>
                                    <button>
                                    <p href='' className="header_facility">
                                    <img src="https://raw.githubusercontent.com/tuanstyle252/caps1/main/src/assets/icons/facility3.png" alt='' className='header_facility-img'/>
                                    <div className='header_facility-info'>
                                    <span className='header_facility-name'>Tên chi nhánh</span>
                                    <span className='header_facility-descriotion'>Địa chỉ:</span>
                                    <span className='header_facility-descriotion'>Số điện thoại: </span>
                                
                                    </div>
                                    

                                </p></button>
                                
                            </div>
                        
                        </div>
                    </div>  
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default facility;
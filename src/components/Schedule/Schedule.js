
import Header from "../Header/Header";
import ContainerLeft from "../Container/ContainerLeft";
import Footer from "../Footer/Footer";
import Chat from "../Chat/Chat";
import { useSelector } from "react-redux";
import React,{useState} from "react";
import {ScheduleComponent,Inject,Week,WorkWeek,Month,Agenda,Day, ViewsDirective, ViewDirective,EventSettingsModel } from '@syncfusion/ej2-react-schedule';

const Schedule =()=>{
    
    const chat = useSelector(state=>state.chat);
    const [dataSource,setDatasource]=useState([
        {
            Id: 1,
            Subject: 'Meeting - 1',
            StartTime: new Date(2021, 10, 20, 7, 0),
            EndTime: new Date(2021, 10, 20, 8, 30),
            IsAllDay: false,
            isBlock:true,
            Location:'Lê Đại',
            Description:'ashdgasjhahf'
            
        },{
            Id: 2,
            Subject: 'Meeting - 2',
            StartTime: new Date(2021, 10, 19, 7, 0),
            EndTime: new Date(2021, 10, 19, 8, 30),
            IsAllDay: false,
            isBlock:true,
            Description:'ashdgasjhahf'
        }
    ])
    return (
        <div className="main">
            {chat.visibleChat?(<Chat></Chat>):null}
            <Header></Header>
            <div className="body">
                <div className="body-container">
                    <ContainerLeft/>
                    <div className="container-right">
                        <div className="box">
                            <div className="box-header">
                                <label className="box-header-title">Lịch làm việc</label>
                            </div>
                            <ScheduleComponent currentView="Week" eventSettings={{dataSource:dataSource}}  >
                                <ViewsDirective>
                                    <ViewDirective option='Day' startHour="6:00" endHour="22:00" displayName="NGÀY" />
                                    <ViewDirective option='Week' startHour="6:00" endHour="22:00" displayName="TUẦN"/>
                                    {/* <ViewDirective option='WorkWeek' /> */}
                                    <ViewDirective option='Month'  showWeekNumber={true} showWeekend={false} displayName="THÁNG" />
                                    {/* <ViewDirective option='Agenda' /> */}
                                </ViewsDirective>
                                <Inject services={[Week,WorkWeek,Day,Month,Agenda]}/>
                            </ScheduleComponent>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Schedule;
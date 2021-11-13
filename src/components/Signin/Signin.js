import React ,{useState,useEffect}from "react";
import axios from 'axios'
import './Signin.css'
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { API_URL, TOKEN, USER_LOGIN } from "../../actions/types";
import setToken from "../../utils/setAuthToken"
const Signin  =()=>{
    const [account,setAccount] = useState({
        username:'',
        password:'',
    })
    const user = useSelector((state)=>state.user);
    const distpatch = useDispatch();
    const [error,setError] =useState('');
    const history = useHistory();
    const onChangeAccount = (event) =>{
        setAccount({
            ...account,[event.target.name]:event.target.value
        })
    }
    const onSignin=async (event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/Api/Account/Login`,account);
            if(response.data.success)
            {
                localStorage.setItem(TOKEN,response.data.token);
                setToken(response.data.token)
                distpatch({type:USER_LOGIN,payload:response.data.user});
                history.push('/Home')
            }
            else
            {
                setError(response.data.message)
            }
        } catch (error) {
            return setError('Lỗi Mạng!')
        }
    }
    return(
        <div className='signin'>
            <div className='form-signin'>
                <h1>Đăng nhập</h1>
                <form  onSubmit={(event)=>onSignin(event)} noValidate>
                    <div className='username'>
                    <lable className="">Tên tài khoản</lable>
                    <input type='text' className="username" name="username" placeholder="Nhập tài khoản" onChange={onChangeAccount}  noValidate />
                    </div>
                    <div className='password'>
                    <lable className="">Mật khẩu</lable>
                    <input type='password' className="password" name="password" placeholder="Nhập mật khẩu" onChange={onChangeAccount} noValidate />
                    </div>
                    <div className="log">
                        <label style={{color:'red',fontSize:'17px',fontWeight:'600'}}>{error}</label>
                        <button type='submit'>Đăng nhập</button>
                        <small>Bạn chưa có tài khoản?</small>
                    </div>
                </form>
            </div>
        </div>

    );
}
export default Signin;
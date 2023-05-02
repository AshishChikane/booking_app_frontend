import {Link , Navigate } from 'react-router-dom'
import { useState,useContext } from "react";
import axios from 'axios';
import { UserContext } from '../../UserContext';

export default function LoginPage(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);          // to access the setUser from UserContext file

    async function login(ev){
        ev.preventDefault(); 
        try{
            // const response = await axios.post('/user/login',{email,password});
            // setUser(response.data)              // data of user come from backend

            // second method 
            const {data} = await axios.post('/user/login',{email,password});
            setUser(data)              // data of user come from backend

            alert("Login Successfull");
            setRedirect(true);
        }catch(err){
            alert('Login Failed');
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>     //link to the page
    }

    return ( 
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={login}>
                <input  type="email" 
                        placeholder="your@emailcom" 
                        value={email} 
                        onChange={ev=>{setEmail(ev.target.value)}}/>

                <input  type="password" 
                        placeholder="password" 
                        value={password}
                        onChange={ev=>{setPassword(ev.target.value)}}/>
                <button className="primary">Login</button>
                <div className="py-2 text-center text-gray-500">
                    Don't have an account yet? <Link className='underline text-black' to={'/register'}>Register now</Link>
                </div>
            </form>
            </div>
           
        </div>
    );
}